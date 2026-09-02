#!/usr/bin/env node
/**
 * Content audit.
 *
 * Greps the source and, when present, the built output for the claims and
 * artefacts that must never ship: removed projects, private prices, invented
 * outcomes, and objects rendered as `[object Object]`.
 *
 *   node scripts/audit-content.mjs            # source only
 *   node scripts/audit-content.mjs --built    # source plus .next and out
 *
 * Exits non-zero on any hit, so it can gate a deploy.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, extname } from 'node:path'

const ROOT = process.cwd()
const CHECK_BUILT = process.argv.includes('--built')

const SOURCE_DIRS = ['src', 'docs', 'public', 'scripts']
const SOURCE_FILES = ['README.md', 'ADDING_A_PROJECT.md', 'SITE_CONTENT.md', 'package.json']
const BUILT_DIRS = ['out', '.next/server/app']

const TEXT_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.mjs',
  '.json',
  '.md',
  '.css',
  '.html',
  '.txt',
  '.xml',
  '.svg',
  '',
])

/**
 * Rules run against every text file in scope.
 *
 * `renderedOnly` rules run only against rendered output — HTML, RSC payloads,
 * sitemaps — because the phrase is legitimate in source comments or inside a
 * negation. `[object Object]` is the clearest case: this repository talks about
 * it on purpose, and what matters is that it never reaches a page.
 */
const RENDERED_EXTENSIONS = new Set(['.html', '.txt', '.xml'])

/**
 * The documents whose job is to name the forbidden phrases in order to forbid
 * them. Rules marked `phrase` skip these files; rules that guard a private
 * VALUE — a rate, a client's price — do not, because a private number is just
 * as leaked in a README as on a page.
 */
const GUIDANCE_FILES = new Set([
  'README.md',
  'SITE_CONTENT.md',
  'ADDING_A_PROJECT.md',
  'docs/PORTFOLIO_AND_PROOF_SYSTEM.md',
])

const RULES = [
  ['Object rendered into markup', /\[object Object\]/g, { renderedOnly: true }],
  ['Removed project: BWE Construyo', /BWE\s+Construyo/gi, { phrase: true }],
  ['Removed project: BWE Construye', /BWE\s+Construye\b/gi, { phrase: true }],
  ['Removed concept: Dr. Rolando Lopez', /Dr\.?\s*Rolando\s+L[o\u00f3]pez/gi, { phrase: true }],
  [
    'Bargain pricing: "starts in the hundreds"',
    /starts?\s+in\s+the\s+hundreds/gi,
    { phrase: true },
  ],
  ['Bargain pricing: "low thousands"', /low\s+thousands/gi, { phrase: true }],
  ['Bargain pricing: "far below agency"', /far\s+below\s+(what\s+an\s+)?agenc/gi, { phrase: true }],
  [
    'Unverified claim: discussions under way (affirmative)',
    /(?<!\bno\s)(?<!\bnot\s)discussions?\s+(?:are|is)\s+under\s*way/gi,
    { phrase: true },
  ],
  [
    'Unverified claim: Heart of Luray taking direct bookings',
    /taking\s+direct\s+bookings/gi,
    { phrase: true },
  ],
  ['Private maintenance price', /\$(?:49|79|149|199)\b/g],
  ["Private price: Ginny's engagement", /\$1[,.]?500\b/g],
  ['Employer that must not appear', /Rocket\s+Mortgage/gi, { phrase: true }],
  ['Employer that must not appear', /\bFICO\b/g, { phrase: true }],
  ['Raw hosting hostname used as a visible label', />\s*[a-z0-9-]+\.netlify\.app\s*</gi],
]

/** Rules that are checked as structured facts rather than by grep. */
const STRUCTURAL_CHECKS = [
  {
    label: 'Heart of Luray must be an owned venture, not a client project',
    file: 'src/content/projects/heart-of-luray.ts',
    require: [/relationship:\s*'owned'/, /status:\s*'live'/],
  },
  {
    label: "Ginny's Cleaning must be a client project in progress, not a concept",
    file: 'src/content/projects/ginnys-cleaning.ts',
    require: [/relationship:\s*'client'/, /status:\s*'in-progress'/],
  },
  {
    label: 'Enlace Mental must be a product collaboration',
    file: 'src/content/projects/enlace-mental.ts',
    require: [/relationship:\s*'collaboration'/],
  },
  {
    label: 'Estero y Mar must remain a self-initiated concept',
    file: 'src/content/projects/estero-y-mar.ts',
    require: [/relationship:\s*'self-initiated'/, /status:\s*'concept'/],
  },
  {
    label: 'Handy Danny must remain a self-initiated concept',
    file: 'src/content/projects/handy-danny.ts',
    require: [/relationship:\s*'self-initiated'/, /status:\s*'concept'/],
  },
]

function walk(dir, files = []) {
  if (!existsSync(dir)) return files
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.git') continue
    const full = join(dir, entry)
    // Hashed chunks are compiled copies of source we already scan, plus
    // framework internals. Scanning them only produces noise.
    if (full.includes('/_next/static/') || full.includes('/.next/static/')) continue
    const stats = statSync(full)
    if (stats.isDirectory()) walk(full, files)
    else if (TEXT_EXTENSIONS.has(extname(entry)) && stats.size < 8_000_000) files.push(full)
  }
  return files
}

const targets = [
  ...SOURCE_DIRS.flatMap((d) => walk(join(ROOT, d))),
  ...SOURCE_FILES.map((f) => join(ROOT, f)).filter((f) => existsSync(f)),
  ...(CHECK_BUILT ? BUILT_DIRS.flatMap((d) => walk(join(ROOT, d))) : []),
]

const findings = []

for (const file of targets) {
  if (file.endsWith('audit-content.mjs')) continue
  let text
  try {
    text = readFileSync(file, 'utf8')
  } catch {
    continue
  }
  const relative = file.replace(`${ROOT}/`, '')
  const rendered = RENDERED_EXTENSIONS.has(extname(file))
  const isGuidance = GUIDANCE_FILES.has(relative)
  for (const [label, pattern, options] of RULES) {
    if (options?.renderedOnly && !rendered) continue
    if (options?.phrase && isGuidance) continue
    pattern.lastIndex = 0
    const match = pattern.exec(text)
    if (match) {
      const line = text.slice(0, match.index).split('\n').length
      findings.push({
        label,
        file: relative,
        line,
        excerpt: match[0].slice(0, 80),
      })
    }
  }
}

for (const check of STRUCTURAL_CHECKS) {
  const full = join(ROOT, check.file)
  if (!existsSync(full)) {
    findings.push({ label: check.label, file: check.file, line: 0, excerpt: 'file missing' })
    continue
  }
  const text = readFileSync(full, 'utf8')
  for (const required of check.require) {
    if (!required.test(text)) {
      findings.push({
        label: check.label,
        file: check.file,
        line: 0,
        excerpt: `expected ${required}`,
      })
    }
  }
}

console.log(
  `Content audit — ${targets.length} files checked${CHECK_BUILT ? ' (source + built output)' : ' (source only)'}`,
)

if (findings.length === 0) {
  console.log('No forbidden claims, removed projects or private prices found.')
  process.exit(0)
}

for (const finding of findings) {
  console.error(`  ✗ ${finding.label}\n      ${finding.file}:${finding.line} — ${finding.excerpt}`)
}
console.error(`\n${findings.length} finding(s).`)
process.exit(1)

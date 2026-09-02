# Chris Lekkas — portfolio

The public portfolio and proof layer for Chris Lekkas: product strategist and digital
builder for owner-led businesses. English and Spanish, first-class in both.

Canonical repository: **`jclekkas/chris-lekkas-portfolio`** (lowercase).
Live domain: `chrislekkas.com` (not yet deployed from this repository — see
**Deploying** below).

```bash
git clone https://github.com/jclekkas/chris-lekkas-portfolio.git
```

---

## Running it

```bash
npm install          # Node 20+; the lockfile is committed
npm run dev          # http://localhost:3000
```

`npm install` uses `legacy-peer-deps` (set in `.npmrc`) because the ESLint and
TypeScript peer ranges in the Next toolchain otherwise send npm's resolver into a
several-minute backtrack. Keep the flag; the tree it produces is correct.

### The commands that matter

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build for Vercel — includes the server contact route |
| `npm run build:static` | `output: 'export'` into `out/` — no server, email fallback |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` / `format:check` | Prettier |
| `npm run audit:content` | Fails if a forbidden claim, removed project or private price is anywhere in the source. Add `-- --built` to scan `out/` and `.next` too |
| `npm run verify` | format check → lint → typecheck → build → content audit |

---

## Two build targets, one codebase

**Vercel / Node (`npm run build`).** `/api/contact` exists. It validates with the same
Zod schema the browser uses, sanitises the input, drops obvious bots, and emails the
enquiry.

**Static export (`npm run build:static`).** There is no server, so the contact route is
excluded from the build entirely (it lives in `route.api.ts`, and `api.ts` is only a
recognised page extension on the server build). The form does not pretend a message was
sent. It says there is no server, keeps everything the visitor typed on screen, and
hands them a mailto link with all of it already written into the body.

The static output in `out/` can be dragged onto Netlify Drop, Cloudflare Pages, S3 or
any shared host. `public/_headers` carries the same three security headers the Vercel
target sets in `next.config.ts`.

---

## Environment variables

Copy `.env.example` to `.env.local`. Nothing here is required to run or build.

| Variable | Required | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Origin for canonical URLs, hreflang, sitemap and social cards. **A Vercel preview needs no variables at all**: when this is unset, a preview or development deployment uses its own `NEXT_PUBLIC_VERCEL_URL`, and is served `noindex` so it cannot compete with production. Falls back to `https://chrislekkas.com`. |
| `RESEND_API_KEY` | No | Server build only. Without it the contact route still validates and accepts a submission, logs it, and reports `delivered: false` — so a misconfigured deploy fails loudly instead of swallowing enquiries. |
| `CONTACT_TO_EMAIL` | No (defaults to `jclekkas@gmail.com`) | Where enquiries go. |
| `CONTACT_FROM_EMAIL` | No | Sender address for the delivery provider. |
| `NEXT_PUBLIC_STATIC_EXPORT` | Set automatically by `build:static` | Never set this by hand on Vercel — it turns the working form into the email fallback. |

No secrets are committed. There is no `.env` in the repository and `.gitignore` keeps
it that way.

---

## How the content is organised

```
src/content/
  schema.ts              Zod schema + types for a project record
  localized.ts           pick() / pickList() — the only way to read { en, es }
  site.ts                Origin, contact address, route shape
  copy/                  Every interface string, en.ts and es.ts, typed against types.ts
  projects/              One file per project, plus index.ts which validates them all
```

Two things are structural rather than conventional:

**A localized value cannot be rendered by accident.** Every visitor-facing string is an
`{ en, es }` pair. Components read it through an accessor that returns `string`. There
is no code path that puts the object itself into JSX — which is how the previous build
printed `[object Object]` on seven pages.

**Both languages are enforced at build time.** `localizedText` requires `en` and `es`;
`localizedList` additionally requires both lists to be the same length. `src/content/
projects/index.ts` validates every record when the module loads, so a half-translated
project fails the build with the field path, not on a public page.

**Status and relationship are separate fields.** Status is *what state is the work in*
(`live`, `in-progress`, `delivered`, `concept`). Relationship is *how did it come about*
(`client`, `owned`, `collaboration`, `self-initiated`). They are independent, and the
schema refuses the one combination that is incoherent: self-initiated work is a concept
until somebody commissions it.

Adding a project: see [`ADDING_A_PROJECT.md`](./ADDING_A_PROJECT.md).
Changing page copy: see [`SITE_CONTENT.md`](./SITE_CONTENT.md).
How the portfolio fits the wider operating system, and the rules for promoting a project
from lead to published case study: see
[`docs/PORTFOLIO_AND_PROOF_SYSTEM.md`](./docs/PORTFOLIO_AND_PROOF_SYSTEM.md).

---

## Routes

| Route | Notes |
| --- | --- |
| `/` | Language chooser. Meta refresh for no-JS, plus a script that honours the visitor's own language. `noindex`, canonical to `/en/`. |
| `/en`, `/es` | Home |
| `/en/work`, `/es/work` | Work index — active and owned work, then selected concepts |
| `/en/work/[slug]`, `/es/work/[slug]` | Case study, six projects each |
| `/en/about`, `/es/about` | About |
| `/en/contact`, `/es/contact` | Contact |
| `/api/contact` | Server build only |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Generated from the project list, so a removed project cannot linger |
| 404 | One page, both languages, since a static host serves one file for every miss |

Both trees publish the same path shape, so switching language is a prefix swap and the
visitor stays on the page — including the case study — they were reading.

---

## Before this goes to production

### Resolved — do not reopen these

Chris has approved all of the following. They are settled and are not open questions.

- Ginny's Cleaning Services may be named publicly.
- Ginny's is an in-progress client engagement, not a concept.
- Enlace Mental may be named and featured prominently.
- Enlace Mental's relationship label is **product collaboration** — not cofounder, not
  partner, not investor, not contractor.
- The typical **$5,000** starting investment may be shown publicly.
- There are no testimonials on the site, and none are to be added without written
  permission from the person quoted.
- There are no unverified outcome claims. Every project either states measured
  evidence or says plainly that nothing has been measured.

### Still open

- [ ] **Permission to name BWE Construction & Engineering.** No document in this
      repository records the firm agreeing to be named publicly, so it stays
      `publicPermission: 'pending'`. Everything else about the project is settled: the
      working website is complete and launch is waiting on the firm regaining control of
      its domain. The case study links only to the working prototype, never to the
      domain it does not currently control.
- [ ] **Whether an Enlace Mental preview link may be shown.** The platform has not
      launched and the host name in its repository is a fallback default rather than a
      confirmed address, so the case study currently links to nothing. Say the word and
      a labelled preview link can be added.

### Missing assets

- [ ] **A higher-resolution portrait.** The only file available is 400×400
      (`public/chris/portrait.webp`). It is displayed at a size it can carry, but a
      1200px original is needed before it can be used larger.
- [ ] **Genuine mobile screenshots** for Heart of Luray, BWE Construction & Engineering,
      Ginny's Cleaning Services and Handy Danny. Enlace Mental and Hotel Rancho Estero y
      Mar have real phone captures and use them. Nothing is faked: no desktop screenshot
      is placed inside a phone frame and no empty device is drawn to fill a gap.

Enlace Mental's screenshots — desktop, phone and four gallery frames — were captured on
2026-09-02 from a local production build of `jclekkas/enlace-mental` at commit
`3ae674f`. Recapture them when the platform changes materially; see
[`ADDING_A_PROJECT.md`](./ADDING_A_PROJECT.md).

### Verification that could not be done here

- **The three external prototype URLs were never opened.** Outbound HTTPS to
  `heartofluray.com` and the `*.netlify.app` prototypes is blocked by this build
  environment's egress policy. The links are present and correctly labelled — a clean
  label, never a raw generated hostname — but somebody needs to open each one before
  launch.
- **Lighthouse ran against a local static server**, not a production deployment.

## Deploying

Do not deploy production without Chris's approval.

**Preview on Vercel.** Import the repository, pick the branch, keep the detected Next.js
settings and deploy. **No environment variables are required**: the build detects a
preview deployment and uses its own URL for canonicals, hreflang and the sitemap, and
serves the whole preview `noindex`. The contact route works; add `RESEND_API_KEY` if you
want enquiries actually emailed rather than logged.

**Preview as a static folder.**

```bash
npm run build:static
npx serve out
```

The full site works, both languages, every project. Only the contact form differs, and it
says so.

---

## Licence and contents

Private. The repository contains no credentials, no client files, no private commercial
terms and no material from any other project. `npm run audit:content` enforces that:
it fails the build if a removed project, a private price, an unverified outcome claim or
an `[object Object]` appears anywhere in the source or the built output.

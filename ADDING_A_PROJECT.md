# Adding a project

Adding a project is two files and one line. It is deliberately not a tour of the
components.

1. Put the images in `public/projects/<slug>/`.
2. Write `src/content/projects/<slug>.ts`.
3. Add it to the array in `src/content/projects/index.ts`.

Everything else — the work index, the homepage, the case study route, the sitemap, the
structured data, the related-work links, both languages — follows from the record.

Before you start, read the **publication gate** at the bottom. A project that has not
cleared it should not go to production even if the code is finished.

---

## 1. Images

```
public/projects/<slug>/
  homepage-desktop.webp     the one required asset for a featured project
  homepage-mobile.webp      only if a genuine phone screenshot exists
  <anything>.webp           optional gallery frames
```

Rules that are not negotiable:

- **Never fabricate a phone screenshot from a desktop one**, and never place a desktop
  screenshot inside a phone frame. If there is no real mobile capture, leave `mobile`
  out. The desktop asset is presented on its own and the page is fine.
- **Never draw an empty device frame** to fill a gap.
- **Never use an old prototype as a stand-in** for a different product. If the current
  visuals do not exist, set `featured: false`, leave the images out, and add the missing
  asset to the checklist in `README.md`. The card falls back to a typographic panel.
- Export WebP. Record the **real pixel width and height** in the record — they reserve
  the box so nothing shifts as the image loads, and the schema requires them.
- Do not crop away the interface context that makes the screenshot worth showing.

## 2. The record

Copy the closest existing project and edit it. Every field below is required unless
marked optional. Types live in `src/content/schema.ts`.

```ts
import type { Project } from '../schema'

export const exampleCo: Project = {
  slug: 'example-co',              // lowercase, hyphenated; the URL in both languages
  name: 'Example Co',              // proper noun — the same in both languages

  status: 'in-progress',           // live | in-progress | delivered | concept
  relationship: 'client',          // client | owned | collaboration | self-initiated
  featured: false,                 // homepage. Requires a desktop image.
  order: 7,                        // position within its group; lower comes first

  year: 2026,
  industry:  { en: '…', es: '…' },
  location:  { en: '…', es: '…' },
  audience:  { en: '…', es: '…' },  // who the work is for, in one sentence
  role:      { en: '…', es: '…' },  // what Chris actually did

  summary:   { en: '…', es: '…' },  // one sentence; cards, metadata, search results
  headline:  { en: '…', es: '…' },  // the case-study title: a claim about the work

  businessProblem: { en: ['…'], es: ['…'] },  // 1–3 paragraphs
  keyDecisions:    { en: ['…'], es: ['…'] },  // the judgement calls
  deliverables:    { en: ['…'], es: ['…'] },  // what exists as a result

  evidence: { en: '…', es: '…' },   // or null — see "Evidence" below
  currentState: { en: '…', es: '…' },

  liveUrl:      { url: 'https://…', label: { en: '…', es: '…' } },  // optional
  prototypeUrl: { url: 'https://…', label: { en: '…', es: '…' } },  // optional

  images: {
    desktop: { src: '/projects/example-co/homepage-desktop.webp',
               width: 1440, height: 900,
               alt: { en: '…', es: '…' } },
    gallery: [],
  },

  publicPermission: 'pending',     // 'approved' once the business has said yes
  permissionNote: 'What is outstanding and who has to confirm it.',
  lastVerified: '2026-09-02',      // the day a human last checked these facts
}
```

### Status and relationship are different questions

**Status** is what state the work is in. **Relationship** is how it came about. They are
independent, and mixing them is the mistake this model exists to prevent.

| | |
| --- | --- |
| `live` | Launched and in use by the business |
| `in-progress` | Being built right now, with the business |
| `delivered` | Built and handed over; may not be what runs at that address today |
| `concept` | Built to show what is possible. Nobody commissioned it |

| | |
| --- | --- |
| `client` | Paid work for a business |
| `owned` | A business Chris owns and operates |
| `collaboration` | A product built alongside its founder |
| `self-initiated` | Started by Chris, uncommissioned |

The schema refuses `self-initiated` with any status other than `concept`. Self-initiated
work stays a concept until somebody commissions it — at which point both fields change
together.

### Both languages, written not translated

`localizedText` requires `en` and `es`. `localizedList` also requires both lists to be the
same length, so the two versions of a page make the same number of points. Write the
Spanish as Spanish, in the same formal *usted* register the rest of the site uses — not a
word-for-word rendering of the English. If you change a fact in one language, change it in
the other in the same commit.

### Evidence

`evidence` is the one field people are tempted to invent on. Do not.

- Something was measured → say what, and what it was measured against.
- A commercial stage changed → that is real evidence, and it is enough. *"The original
  concept converted into a client engagement."*
- A prototype works but nobody has used it commercially → *"Built and tested as a working
  prototype; commercial adoption has not been measured."*
- Nothing at all → set `evidence: null`. The page then says, in as many words, that
  nothing has been measured yet. Silence is worse than the admission.

Never write a revenue figure, conversion rate, lead count, traffic number, satisfaction
score, time saving, adoption claim, booking count, testimonial, search ranking or launch
date that nobody has verified. `npm run audit:content` catches the specific claims that
have gone wrong before; it cannot catch a new invention, so this is on you.

### Links

`label` is what the visitor reads. Never surface a generated hosting hostname as the
visible label — `View working prototype` and `Visit example.com`, not
`loquacious-alpaca-53c292.netlify.app`. The link still points at the real URL.

## 3. Register it

```ts
// src/content/projects/index.ts
import { exampleCo } from './example-co'

const RAW: readonly Project[] = [
  heartOfLuray,
  // …
  exampleCo,
]
```

That is the last edit. Nothing else references projects by name.

## 4. Check it

```bash
npm run typecheck     # a missing field is a type error
npm run build         # the Zod validation runs at module load and names the bad field
npm run audit:content
```

Then look at it: `/en/work/<slug>/` and `/es/work/<slug>/`, on a phone width and a desktop
one.

---

## The publication gate

Code being finished is not the same as a project being publishable. Before a project goes
to production, all of this has to be true — see
[`docs/PORTFOLIO_AND_PROOF_SYSTEM.md`](./docs/PORTFOLIO_AND_PROOF_SYSTEM.md) for where
each answer comes from.

- [ ] The business has agreed to be named publicly. Until it has,
      `publicPermission: 'pending'` with a `permissionNote` saying who has to confirm what.
- [ ] Nothing confidential is in the record: no client documents, credentials,
      registration data, contract terms, payment status, internal project state or
      private conversations.
- [ ] No commercial terms of any kind. Prices, discounts, payment splits and maintenance
      plans belong in private proposals, never in a project record, and never in a commit.
- [ ] Status and relationship match reality **today**, not when the record was written.
- [ ] Every claim in `evidence` can be pointed at something.
- [ ] Every URL has been opened, in the last month, by a person.
- [ ] Images are genuine, current, and show the product being described.
- [ ] `lastVerified` is the date somebody actually checked, not the date of the commit.

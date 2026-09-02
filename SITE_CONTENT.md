# Site content

Where every word on the site lives, and the rules it has to follow.

Project content is separate — see [`ADDING_A_PROJECT.md`](./ADDING_A_PROJECT.md).

---

## Where the words are

| What | File |
| --- | --- |
| Every interface string, English | `src/content/copy/en.ts` |
| Every interface string, Spanish | `src/content/copy/es.ts` |
| The shape both must satisfy | `src/content/copy/types.ts` |
| Project records | `src/content/projects/*.ts` |
| Origin and contact address | `src/content/site.ts` |
| Page titles, descriptions, canonical, hreflang | `src/lib/metadata.ts` |
| Structured data | `src/lib/structured-data.ts` |

There is no string literal in a component and no lookup key in a template. `en.ts` and
`es.ts` are both typed against `SiteCopy`, so a missing Spanish string is a compile error
rather than an English fragment leaking onto a Spanish page, and a raw key can never
render because there are no keys.

### Adding a new string

1. Add the field to `SiteCopy` in `types.ts`.
2. Fill it in `en.ts` **and** `es.ts` — TypeScript will not let you skip one.
3. Read it in the component through `getCopy(lang)`.

---

## The positioning

The site sells senior product judgement applied quickly, to owner-led businesses. Not a
web agency, not an AI agency, not a cheap alternative to either.

**Headline (EN):** I turn business problems into digital products that work.
**Headline (ES):** Convierto problemas de negocio en productos digitales que funcionan.

The reader is an owner or decision-maker at an established small or midsized business —
a cleaning company, a contractor, a hotel, a professional practice. Everything on the
site has to make sense to that person. If a sentence would only land with a product
manager, rewrite it.

Modern tooling, AI-assisted development included, may be mentioned naturally in process
copy. It is a means, never the proposition. What is being bought is judgement, speed,
clarity and a working result.

### Do not write

| Never | Because |
| --- | --- |
| "Starts in the hundreds", "low thousands", "far below agency prices", "cheap", "affordable" as the proposition | It contradicts a $5,000 starting point and reframes the offer as budget work |
| "Web designer and developer" as the title | Too small. Use *product strategist and digital builder* |
| Chris's current or future employer, Rocket Mortgage, FICO, compensation, equity, resignation plans, confidential mortgage or capital-markets work | None of it is public, and none of it is relevant to the buyer |
| "Chris hand-codes every implementation personally" | Not true, and not the point |
| Maintenance plans or their prices | Not approved for publication. They live in private proposals |
| Any invented revenue, conversion, lead, traffic, satisfaction, time-saving, adoption, booking, testimonial, ranking or launch figure | See **Evidence** in `ADDING_A_PROJECT.md` |
| An eyebrow that repeats the heading below it | The previous build shipped "What working together looks like" twice on one screen. `Section` takes `eyebrow` and `title` separately so the pair is written once and can be read side by side |

### The pricing paragraph

Published on the home page, in both languages, and it needs Chris's sign-off before
production:

> Focused website engagements typically begin around $5,000. Larger websites, bilingual
> platforms, booking experiences and custom business tools are scoped separately. After a
> short conversation, I'll give you a clear price and tell you whether the investment
> makes sense.

Private rates of any kind — friends-and-family pricing, client-specific discounts,
maintenance plans, payment terms — must never appear on a public page, in a project
record, in metadata, in structured data, in a screenshot, in a fixture, in this
documentation, or in a commit message. `npm run audit:content` fails the build on the
specific figures that have been at risk.

---

## Spanish

Spanish is not a translation layer. Both languages are first-class: the same routes, the
same projects, the same amount of content.

- Register: formal **usted**, consistent across the site.
- Write it as Spanish. If the English says something in an idiom that has no Spanish
  equivalent, say the same thing a different way rather than rendering it word for word.
- Proper nouns stay proper nouns. *Heart of Luray*, *BWE Construction & Engineering* and
  *Handy Danny* are not translated.
- Interface strings are never left in English. `localizedList` enforces equal list
  lengths so one language cannot quietly say less than the other.
- **If a factual claim changes in one language, change it in the other in the same
  commit.** This is the rule most likely to be broken and hardest to notice.

---

## Page by page

### Home — `src/app/[lang]/page.tsx`, copy under `home`

In order: hero → credibility strip → featured work → how Chris works → about →
selected concepts → engagement and pricing → contact.

The hero presents the lead project itself — image, name, status, relationship, link — so
the featured list starts after it. Showing the same screenshot twice inside a screen and
a half is what the previous build did.

Concepts are a separate, clearly labelled section. They must never sit in an
undifferentiated list with paid client work.

The process is **Understand → Decide → Build → Improve**. "Build" distinguishes a first
version in days from a responsible production launch. Do not let that copy drift into
promising that every project ships in a few days.

### Work — `src/app/[lang]/work/page.tsx`, copy under `work`

Two groups: *Active and owned work*, then *Selected concepts*. The intro says the
collection contains client work, an owned venture, a product collaboration and concepts,
so no reader is misled about what they are looking at.

The label legend sits in a collapsed `<details>`: available, transparent, not dominant
and not defensive.

Never head this page "Websites built for real businesses" while it also contains
uncommissioned concepts.

### Case study — `src/app/[lang]/work/[slug]/page.tsx`, copy under `project`

Fixed order: overview → status and relationship → business problem → key decisions →
what was built → gallery → evidence → current state → link → related work.

Key decisions render in the **decision margin**: a numbered margin beside the narrative,
the way notes sit beside a manuscript. It is the one visual idea specific to this
positioning — the site is about judgement, so the judgement calls get their own column.
On a phone the margin stacks above its note.

Evidence and current state are always both shown. When `evidence` is `null` the page says
nothing has been measured rather than going quiet.

### About — `src/app/[lang]/about/page.tsx`, copy under `about`

Establishes senior product experience, business and customer judgement, direct
collaboration, strategy through launch, both languages, and fast modern implementation —
without becoming a corporate biography. Named employers stay out.

### Contact — `src/app/[lang]/contact/page.tsx`, copy under `contact`

Five fields: name, business (optional), email, existing website (optional), what are you
hoping to improve. Do not add a budget field, a dropdown of services, or a discovery
questionnaire. The point is a low-friction start to a conversation.

Two honest behaviours: the server build delivers; the static export says there is no
server, keeps what was typed, and hands over a prefilled email. Neither ever claims a
message was sent when it was not.

### 404 — `src/app/not-found.tsx`

One page in both languages, because a static host serves one file for every miss and it
cannot know which tree the visitor came from.

---

## Metadata and structured data

`src/lib/metadata.ts` builds canonical URLs, all three hreflang alternates (`en`, `es`,
`x-default`) and the social cards from one input, so a new page cannot ship without them.

`src/lib/structured-data.ts` emits `Person`, `WebSite` and `ProfessionalService` on every
page, plus `CreativeWork` and `BreadcrumbList` where they apply. The `Person.jobTitle` is
*product strategist and digital builder*.

Never add `aggregateRating`, `review`, awards, certifications or an `Organization` with
credentials that do not exist. A case study is a `CreativeWork` authored by Chris — it is
not the business's own website, and it carries no outcome that has not been measured.

`sitemap.ts` and `robots.ts` are generated from the project list, so a removed project
cannot linger and a new one cannot be forgotten.

---

## Before changing published copy

- Would this sentence make sense to a cleaning-company owner reading it on a phone?
- Does it claim anything nobody has verified?
- Has the Spanish changed to match?
- Does an eyebrow now repeat its heading?
- Does `npm run audit:content` still pass?

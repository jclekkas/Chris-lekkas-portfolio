# Portfolio & Proof System

How this portfolio fits into Chris's wider Vibe Coded Sites operating system, what a
project record has to carry across that system, and the rules that move a project from
"we talked about it" to a published case study that is still true a year later.

This repository is the **proof-and-reuse stage**. It is where finished work becomes
evidence that can be pointed at in the next conversation. Everything upstream of that —
qualification, the business case, the PRD, the commercial terms — lives in the operating
system, not here.

---

## The lifecycle

```
Lead or idea
     ↓
Qualification          Is this a real business, a real problem, a real budget?
     ↓
Business case          What is it worth fixing? What would a good outcome be?
     ↓
PRD and design         What exactly gets built, and what deliberately does not
     ↓
Build and verify       A working experience, checked before anyone sees it
     ↓
Launch or present      Live under their domain, or presented as a concept
     ↓
Capture proof          Screenshots, evidence, a testimonial if one is earned
     ↓
Publish case study     Into this repository, through the publication gate
     ↓
Reuse in outreach      The case study becomes the answer to "have you done this before?"
```

Two things are worth naming about this loop.

**Capture proof is a stage, not an afterthought.** Screenshots taken at launch are the
only screenshots that are ever accurate. A month later the site has changed, and nobody
has an accurate picture of what was delivered.

**Reuse is the point.** A portfolio that nobody sends to a prospect is a vanity project.
Every published case study should be usable as a link in a specific sales conversation:
*this is the same problem you have, here is what I did about it.*

---

## The project record across the system

One project, one record, tracked through the whole lifecycle. Some fields are public,
some are private, and the boundary is not negotiable.

### Public — lives in this repository

These map onto `src/content/projects/*.ts`. See
[`ADDING_A_PROJECT.md`](../ADDING_A_PROJECT.md) for the exact shape.

| Field | Notes |
| --- | --- |
| Project name | Proper noun, same in both languages |
| Business or client | The business as it wants to be named publicly |
| Status | `live` · `in-progress` · `delivered` · `concept` |
| Relationship | `client` · `owned` · `collaboration` · `self-initiated` |
| Chris's role | What he actually did, not a job title |
| Audience | Who the work is for |
| Business problem | What was wrong before |
| Strategic decisions | The judgement calls — this is the differentiator |
| Deliverables | What exists as a result |
| Live URL | Where it runs, if it runs |
| Prototype URL | Where the working prototype is, with a clean label |
| Desktop screenshot | Real, current, with true pixel dimensions |
| Mobile screenshot | Only if a genuine phone capture exists |
| Outcome metrics | Only measured ones. Otherwise absent |
| Qualitative evidence | Including a commercial stage change, which is real evidence |
| Testimonial | Only with explicit written permission |
| Public permission | `approved` or `pending`, with a note on what is outstanding |
| Portfolio eligibility | Whether the publication gate has been cleared |
| Featured status | Homepage placement. Requires current visuals |
| English summary | |
| Spanish summary | |
| Last verified date | The day a human last checked the facts |

### Private — lives in the operating system, never here

These exist, and this document says so, but **no value from this list may appear in this
repository**: not in a page, a project record, metadata, structured data, a screenshot, a
test fixture, a documentation file that might later be published, or a commit message.

| Field | Why it stays private |
| --- | --- |
| Source of the lead | Often a named person who did not consent to being named |
| Internal commercial state | Quoted, negotiating, won, paused, at risk |
| Proposed value and price | Including friends-and-family and special-market rates |
| Discounts | Client-specific pricing is nobody else's business |
| Contract terms and dates | |
| Payment status and splits | |
| Maintenance plan and rate | Not approved for publication in any form |
| Private contact details | |
| Confidentiality restrictions | What the client has asked to be kept quiet |
| Internal relationship notes | Conversations, frustrations, judgements about people |
| Next proof action | Internal follow-up: what evidence to chase and when |

Git history counts. A private figure committed and then deleted is still in the
repository. If one is ever committed by accident, the history has to be rewritten, not
just the file.

`npm run audit:content` fails the build if the figures most at risk appear anywhere in
the source or the built output. It is a backstop, not a substitute for not writing them.

---

## Stage-change rules

The portfolio is only honest if it changes when reality does. Each of these is a trigger,
not a suggestion.

**A concept becomes an engagement.** Update `status` *and* `relationship` in the same
edit — `concept`/`self-initiated` becomes `in-progress`/`client`. Rewrite `currentState`,
and rewrite `evidence` to say the concept converted, which is genuine evidence. Remove any
"not commissioned" language from both languages. Set `publicPermission` back to `pending`
until the new client has agreed to be named.

**A project launches.** Capture desktop *and* mobile screenshots that day. Move `status`
to `live`, add the `liveUrl`, and decide whether the prototype URL is still worth showing
or is now a stale duplicate. Update `lastVerified`.

**Some time after launch, ask for evidence.** Not on launch day — nothing has happened
yet. When there is something to measure, ask the owner what changed, and ask for a
testimonial only if the answer is genuinely good. Add whatever comes back, exactly as it
is. If nothing came back, leave `evidence: null`; the page will say so.

**Evidence changes.** Update the case study, in both languages, in the same commit.
Evidence that improves is worth republishing; evidence that gets worse is worth
correcting, and correcting it is cheaper than being caught.

**A link changes or expires.** Remove or replace it. A dead link on a portfolio is worse
than no link, because the reader assumes the work is gone too.

**A project ends badly, or the client asks to be removed.** Take it out. Do not leave it
up under a softened description.

**Nothing depends on memory.** Every record carries `lastVerified`. Anything older than
six months is due a check — the URLs opened, the status confirmed, the evidence still
true. Put that review on a recurring date; the failure mode of a portfolio is not a wrong
claim written on purpose, it is a true claim that stopped being true while nobody looked.

---

## The factual-verification gate

Run this before any project is published to production. It is the same checklist as the
bottom of [`ADDING_A_PROJECT.md`](../ADDING_A_PROJECT.md), repeated here because this is
the document that governs it.

1. **Permission.** Has the business agreed, in words you could show someone, to be named?
2. **Confidentiality.** Is anything in the record covered by a restriction — documents,
   credentials, registration data, internal state, private conversations?
3. **Commercial terms.** Are there none, anywhere, in any form?
4. **Status and relationship.** Do both match reality today?
5. **Evidence.** Can every claim be pointed at? Is anything unmeasured stated as
   unmeasured?
6. **Links.** Has a person opened every URL in the last month?
7. **Images.** Are they genuine, current, and of the product being described? No
   fabricated mobile captures, no empty device frames, no old prototype standing in for a
   different product?
8. **Both languages.** Do the English and Spanish say the same things?
9. **Automated.** Does `npm run audit:content -- --built` pass?

A project that fails any of these stays at `publicPermission: 'pending'` with a
`permissionNote` naming who has to confirm what. It can still be built and reviewed; it
just does not go live.

---

## Current state of the lineup

As of 2026-09-05. Six projects, no others.

| # | Project | Status | Relationship | Homepage | Permission |
| --- | --- | --- | --- | --- | --- |
| 1 | Enlace Mental | In progress | Product collaboration | Featured | Approved |
| 2 | Heart of Luray | Live | Owned venture | Featured | Approved |
| 3 | BWE Construction & Engineering | Live | Client project | Featured | **Pending** |
| 4 | Ginny's Cleaning Services | In progress | Client project | Featured | Approved |
| 5 | Hotel Rancho Estero y Mar | Concept | Self-initiated | Featured | Approved |
| 6 | Handy Danny | Concept | Self-initiated | Selected concepts | Approved |

Notes that matter for accuracy:

- **Enlace Mental is the flagship.** It is a Spanish-first media, knowledge, education
  and personal-development platform built with Rolando López — not a therapy-practice
  website and not a podcast with a site attached. The platform is built and bilingual
  but has **not launched**, and Season 1 has not been published, so there are no
  audience, subscriber, engagement or revenue figures. The relationship is a *product
  collaboration*: governance and compensation are unsettled, so no stronger word is
  used, and Chris is never described as a cofounder, partner, investor or contractor.
  Screenshots were captured 2026-09-02 from a local production build of
  `jclekkas/enlace-mental` at commit `3ae674f`.
- **Heart of Luray is Chris's own business**, not a client project. It is live with
  direct-booking capability and has **not recorded a direct booking**. The site must not
  say it is taking direct bookings, that bookings increased, or that platform commissions
  were reduced.
- **BWE launched on 2026-09-05.** The domain came back under the firm's control and the
  revamped site is what serves at `bwe-maryland.com`. Status moved to `live`, the live
  URL replaced the Netlify prototype rather than sitting beside it, and the project moved
  onto the homepage — Chris's earlier hold was explicitly conditional on the domain being
  restored. The automated check in `scripts/audit-content.mjs` inverted with it: it used
  to fail the build if a `liveUrl` appeared, and now fails if the live URL is missing or
  the superseded prototype link comes back.
  Screenshots were recaptured from a production build of the site's own repository at
  package version 0.2.1 — the version the deployment record says is serving — because the
  live domain is unreachable from a Claude Code session under the organisation's egress
  policy.
  The case study was also rewritten against the project's own claim register. An earlier
  draft described a services list, certifications surfaced in the header and a capability
  statement as a call to action. None of those survived the client's own verification:
  thirteen service claims were removed to a backlog as unconfirmed, formal certification
  is recorded as unsupported and deliberately absent, and there is no capability
  statement. The case study now describes what the register actually shows, which is a
  better story than the one it replaced.
  Naming permission is still pending — a firm publishing its own website is not that firm
  agreeing to appear in someone else's portfolio. Nothing about traffic, bid invitations
  or enquiries is claimed, because nothing has been measured.
- **Estero y Mar was presented and declined.** The hotel replied that it was already
  redesigning. There are no discussions under way and no adoption is expected. It is
  featured on the homepage as the one selected strategic concept, carrying its concept
  and self-initiated labels wherever it appears.
- **Handy Danny is uncommissioned.** There are no discussions under way.
- **"BWE Construyo" / "BWE Construye" has been removed entirely** — from content, images,
  routes, sitemap, structured data and documentation — because it is not in production.
  Nothing was invented to replace it. `npm run audit:content` fails the build if any
  variant reappears.

### Approvals on record

Settled by Chris on 2026-09-02 and not to be reopened: Ginny's may be named publicly;
Ginny's is an in-progress client engagement; Enlace Mental may be named and featured;
Enlace Mental's label is *product collaboration*; the typical $5,000 starting investment
may be shown; there are no testimonials; there are no unverified outcome claims.

Outstanding: permission to name BWE Construction & Engineering, and whether an Enlace
Mental preview link may be shown before launch.

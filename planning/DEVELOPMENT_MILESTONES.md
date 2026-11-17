# Development Milestones

**Status:** Milestone 1 approved by the user on 2026-11-17; implementation in progress.

## M0 — Project foundation (in progress)
- [x] Repository accessible.
- [x] README and Master Project Record committed.
- [x] Commit supporting specifications and decision log.
- [x] User approved Milestone 1 scope and acceptance criteria.
**Exit:** product baseline documented and M1 approved; M0 closeout pending first vertical-slice verification.

## M1 — Safe foundation evaluation + thin vertical slice (approved)
Goal: prove one complete, auditable path from a candidate company to a reviewed prospect dossier without sending outreach.

Approved work:
1. Inspect candidate starter repositories and dependencies; compare license, maintenance, architecture, scripts, permissions, secrets, data flows and security concerns.
2. Select build foundation and runtime only after review.
3. Establish minimal application skeleton and data model.
4. Add manual company entry/import and source evidence capture.
5. Add basic research notes with fact/hypothesis/unknown status.
6. Implement first explainable ICP scoring pass.
7. Render a basic dossier and human review state.
8. Add run/change logs and tests.

Acceptance criteria:
- A company can be created with canonical domain, country and source.
- At least one evidence item can be attached to a claim.
- Facts and hypotheses render distinctly.
- Score and rationale are visible and reproducible.
- Dossier can be approved/rejected/marked incomplete.
- No outbound sending or calling capability exists.
- Browser-only prototype clearly states data is stored locally in the current browser and is not a secure shared database.
- Public repository contains no credentials or real prospect personal data.
- Secrets are not committed; tests/build pass; limitations documented.

## M2 — Company discovery and channel intelligence
Permitted-source discovery, entity resolution, deduplication and channel mapping.

## M3 — Operational intelligence
Research and evidence for inventory, catalogue, returns, repair/refurbishment, warehouses, fulfilment and procurement.

## M4 — Decision-maker and contact intelligence
People, phone/email/social routes, source provenance, verification and channel eligibility.

## M5 — Qualification and sales dossier
Full scoring, ExactFlow fit, call preparation, objection handling and multi-channel drafts.

## M6 — Manual outreach and pipeline
Activity logging, follow-up queue, suppression, demo lifecycle and operator dashboard.

## M7 — Performance intelligence
Conversion analytics and evidence-led recommendations to improve demo bookings.

## M8 — Optional integrations and scale
Only after provider terms, security, costs and measurable value are reviewed.

## Release discipline
A milestone is complete only after implementation, tests, acceptance review and documentation updates. Do not mark a feature complete from a code diff alone. Update this file and the Master Project Record after every meaningful change.

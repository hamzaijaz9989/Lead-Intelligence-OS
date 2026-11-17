# Development Milestones

**Status:** M1 and M2 core implementations deployed; responsive UI refinement in progress and final verification pending.

## M0 — Project foundation (in progress)
- [x] Repository accessible.
- [x] README and Master Project Record committed.
- [x] Commit supporting specifications and decision log.
- [x] User approved Milestone 1 scope and acceptance criteria.
**Exit:** product baseline documented and M1 approved; M0 closeout pending first vertical-slice verification.

## M1 — Safe foundation evaluation + thin vertical slice (approved)

**Goal:** prove a safe, auditable company-to-dossier workflow without sending outreach.

**Implemented**
- [x] Preliminary review of OpenProspector; no import/adoption for the MVP.
- [x] Static browser workspace at repository root.
- [x] Manual company capture and business context.
- [x] Source URL and structured FACT / HYPOTHESIS / UNKNOWN claims.
- [x] Weighted ICP criteria with unassessed categories left blank.
- [x] Normalised score, evidence coverage and grade withheld below 60% coverage.
- [x] Dossier view and human review states (approve, incomplete, reject).
- [x] Manual demo-booked flag and CSV export.
- [x] Canonicalise company website hostname and restrict rendered website/evidence links to HTTP(S).
- [x] Static validation script, core helper tests and GitHub Actions workflow added.
- [x] GitHub Pages deployment workflow added and successful deployment run verified.
- [x] Responsive sales dashboard added with KPI cards, pipeline stages, ICP grade distribution and nine-agent status preview.
- [x] Synthetic demo dataset loader added for safe UI testing.

**Pending verification**
- [ ] Confirm GitHub Actions validation workflow passes.
- [ ] Confirm GitHub Pages deployment succeeds.
- [ ] Test dashboard, synthetic demo-data loading, add/edit/delete, scoring, evidence links, review states, demo flag and CSV export in a real browser.
- [ ] Test responsive layout on desktop and mobile.
- [ ] Fix defects and record test evidence.

**Acceptance boundary**
- The prototype is local-only and uses browser localStorage; it is not a secure shared database.
- Use synthetic/test data only. Do not enter real prospect personal data or credentials.
- No outbound sending, calling, scraping or live enrichment provider is enabled.
- M1 is not complete until automated and browser verification are recorded.

## M2 — Company discovery and channel intelligence

**Implemented**
- [x] Manual candidate capture and discovery lifecycle (discovered/researching/qualified/rejected).
- [x] Discovery source type and source URL.
- [x] Multi-channel mapping with channel URL, confidence status and optional evidence source.
- [x] Canonical-domain duplicate prevention; no silent merge.
- [x] Discovery filters, dashboard counts and CSV export.
- [x] Validation run `44004131271` on `80d76d1` passed.
- [x] Pages deployment run `44004131345` on `80d76d1` passed.
- [x] Responsive stacking and expandable research/ICP sections implemented in `e9ff1dd`.
- [x] Verify final responsive refinement validation (run `44004473156`) and Pages deployment (run `44004473184`).
- [ ] Browser-test phone/desktop-mode layouts, expandable sections, duplicate handling, channel evidence, filters and CSV export.

Live automated company discovery/provider integrations are not yet implemented; research entry remains manual in this increment.

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

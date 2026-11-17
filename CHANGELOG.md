# Changelog

All meaningful project changes are recorded here. Dates use ISO format.

## 2026-11-17 — Repository foundation
- Confirmed access to private repository `hamzaijaz9989/Lead-Intelligence-OS`.
- Added initial README.
- Added Master Project Record, product requirements, proposed architecture, nine logical agent specifications, initial logical data model, workflows, security/compliance baseline, proposed milestones and decision log.
- Recorded north-star KPI: qualified ExactFlow demos booked.
- Recorded global prospecting scope and permitted multi-source discovery, including Fiverr/Upwork signals subject to platform terms.
- Recorded manual-outbound-only MVP and evidence/provenance requirements.
- No application code, dependencies, provider integrations or deployment added.
- Next: review documentation and agree Milestone 1 before implementation.

## 2026-11-17 — Documentation baseline verified
- Verified the Master Project Record and proposed milestone file after initial documentation commits.
- Updated project status to reflect that the supporting specifications are now committed.
- M0 remains in progress until the user reviews the baseline and approves M1 acceptance criteria.

## 2026-11-17 — Repository visibility check
- GitHub repository metadata reports visibility as public, contrary to the intended private configuration.
- Recorded this discrepancy in the Master Project Record. Repository owner must change visibility to private before adding credentials or prospect personal data; the connected GitHub actions do not expose a repository-visibility update operation.


## 2026-11-17 — M1 approved; starter evaluation and implementation decision
- User confirmed public repository visibility is intentional; recorded the public-repository secret/data handling rule.
- User approved Milestone 1.
- Reviewed OpenProspector's public README, package manifest, agent guide and license. It is an MIT-licensed React/Tailwind + Hono + SQLite lead-enrichment template, requires Node >=22.13, uses multiple provider APIs and Clawnify agent packages, and its own agent guide says it does not email prospects. The repository also notes that several provider mappings have not been live-verified. No code was installed or executed.
- Decision: do not import/adopt it as the initial base. Its provider/agent assumptions and enrichment-first workflow add complexity before our evidence-led ExactFlow dossier is proven.
- M1 implementation approach: static local-first prototype, no secrets/no external calls, synthetic data only; localStorage is explicitly not production-safe or shared storage.
- Next: implement company capture, evidence/claim tracking, ICP scoring, dossier and human review; then verify behaviour and Pages workflow.


## 2026-11-17 — First M1 prototype committed
- Added root `index.html`: local-first prospect dossier workspace with company capture, source URL, research summary, structured evidence claims, weighted ICP criteria, dossier details, approval/incomplete/rejected states, manual demo booking log, search/filter and CSV export.
- Added strict HTTP(S)-only link handling for user-entered source and company URLs.
- Changed ICP inputs so unresearched categories remain blank, not zero. Scores are normalised over assessed weighted criteria; evidence coverage is displayed; grade/high-priority status is withheld until at least 60% of weighted criteria are assessed.
- Added `scripts/validate.mjs` for inline JavaScript syntax and basic feature/network-boundary checks.
- Added GitHub Actions validation and GitHub Pages deployment workflows.
- No provider keys, real contact data, outbound sending, scraping or live AI calls included.
- Validation and Pages deployment have not yet been confirmed; browser-level testing remains pending.


## 2026-11-17 — Project status reconciliation
- Reconciled M1 tracking with the actual committed prototype files.
- Clarified that app implementation is committed but automated workflow results and browser-level behaviour remain unverified.
- Clarified ICP scoring semantics: blank = unassessed; numeric zero = assessed and no points; grade/high-priority requires at least 60% weighted evidence coverage.

## 2026-11-17 — Canonical company domain handling
- Normalised valid website inputs to lowercase hostnames and removed a leading `www.` for consistent company identity capture.
- Extended the static validation script to check the canonical-domain helper is present.
- Validation workflow result and browser behaviour remain unverified.

## 2026-11-17 — Core helper tests added
- Added Node assertions for ICP scoring/coverage, grade gating, safe URL handling, canonical domain normalisation and evidence claim parsing.
- Updated the validation workflow to run the helper tests after inline JavaScript syntax/feature validation.
- GitHub Actions result remains unconfirmed; no success is claimed until the run is observed.


## 2026-11-17 — GitHub Pages enablement fix
- Inspected the failed GitHub Pages deployment run (#7, commit `c691eb6`): checkout succeeded, but `actions/configure-pages@v5` failed with `Get Pages site failed: Not Found`; upload and deployment steps were skipped.
- Confirmed the repository Pages settings screen already has **GitHub Actions** selected as the source.
- Updated `.github/workflows/pages.yml` to pass `enablement: true` to `actions/configure-pages@v5`, allowing the action to enable the Pages site when it has not yet been created.
- Commit: `0e0b9d7`.
- Latest validation run #25 on `c691eb6` passed, including core helper tests. Deployment run #8 on `0e0b9d7` subsequently succeeded through Configure Pages, artifact upload and deployment. Expected site URL: https://hamzaijaz9989.github.io/Lead-Intelligence-OS/. User-side browser confirmation remains pending.


## 2026-11-17 — Responsive sales dashboard and demo dataset
- Expanded `index.html` into a dashboard-first sales workspace while preserving the existing local prospect dossier workflow.
- Added dashboard pipeline counts for needs review, approved, incomplete, rejected and demo-booked records.
- Added ICP grade distribution cards and KPI metrics.
- Added a nine-role Agent Command Centre preview. Agent cards explicitly state that the roles are not connected/running; Qualifier and Oracle are marked as manual prototype functionality.
- Added a one-click loader for five synthetic example companies across several industries/markets. Synthetic sample URLs use reserved `.example` domains and are not real businesses.
- Kept localStorage-only persistence and the synthetic-data-only warning visible. No scraping, external enrichment, live agents or outbound messaging was enabled.
- Code commit: `089c82f`. Automated workflow and browser verification are pending for this dashboard change.


## 2026-11-17 — M2 manual company discovery and channel intelligence
- Added discovery-stage tracking to prospect records: discovered, researching, qualified and rejected.
- Added discovery source type and retained the primary source URL.
- Added multi-channel mapping with channel name, optional channel URL, confirmed/likely/unverified status and optional evidence-source URL.
- Added discovery-stage filters and dashboard queue counts.
- Added discovery stage actions in the prospect dossier.
- Added canonical-domain duplicate prevention: when a different record already uses the same canonical domain, the app opens the existing dossier and blocks a second record; it does not silently merge.
- Extended CSV export with discovery stage, source type and channel summary.
- Extended static validation and core helper tests to cover discovery fields and channel parsing.
- Updated PRD, logical data model, workflows, milestone tracker and Master Project Record.
- UI feature commit: `2f0d72b`; dashboard queue commit: `022f5e7`; validation/test updates: `9374a72` and `d301980`.
- M2 automated validation and Pages deployment outcomes are pending. Live automated discovery, external provider calls and agent orchestration are not enabled.


## 2026-11-17 — M2 validation correction and passing checks
- Fixed an inline JavaScript line-break issue introduced while adding the channel parser.
- Corrected the channel parser unit test to use actual newline-separated records.
- GitHub Actions validation run `44004008781` on commit `eafa341` passed both application syntax/feature validation and core helper tests, including channel status parsing.
- - GitHub Pages deployment run `44003986328` for UI commit `47e9d3a` passed Configure Pages, Upload static site and Deploy to Pages.

- Follow-up UI refinement: added a dedicated Discovery rejected filter (separate from the dossier review rejection state) and included channel URLs plus evidence-source URLs in CSV exports. Commit: `80d76d1`.


## 2026-11-17 — Responsive workspace refinement
- Changed the discovery dashboard to a cleaner single-column flow at tablet, mobile and narrow desktop-mode widths (up to 1200px), avoiding cramped side-by-side panels on phone browsers.
- Improved mobile spacing, metric cards, agent cards, grade cards, search controls and prospect cards.
- Grouped optional channel mapping, products, source notes and evidence claims into an expandable “Research profile, channels & evidence” section.
- Grouped ICP criteria into a separate expandable “ICP scoring & qualification” section so quick company capture is less overwhelming.
- Updated the header milestone label to “Milestone 2 · Discovery Workspace”.
- Responsive layout commit: `82500b2`; expandable form sections commit: `e9ff1dd`.
- Validation and Pages deployment for the latest responsive refinement are pending; do not mark browser acceptance complete until tested on a phone.

- Responsive refinement commit `e9ff1dd` passed GitHub Actions validation run `44004473156` and GitHub Pages deployment run `44004473184`; mobile browser acceptance remains to be performed by the user.

## 2026-11-17 — M3 initial operational intelligence capture
- Added structured operational signals using `AREA | FACT/HYPOTHESIS/UNKNOWN | finding | source URL`.
- Signals can cover catalogue, inventory, returns, repair, warehouse, fulfilment, procurement, systems and growth.
- Signals are stored per prospect, restored when editing, shown in the dossier, included in search and exported to CSV.
- Added parser validation and core tests for area, status and optional evidence URL.
- Updated PRD, data model, workflows, Master Project Record and milestone tracker.
- Initial feature commit `42dd282` had an inline parser line-break defect; corrected in `906cb6a`. Validation passed on `906cb6a` (run `44004662360`). The latest helper-test run and Pages deployment are being checked separately.

- Corrected the operational signal test fixture to use actual newline-separated records (commit `dcaf40b`). Latest validation run `44004843959` passed, including application syntax, scoring/evidence, channel parsing and operational intelligence parsing. GitHub Pages deployment run `44004662398` for app commit `906cb6a` passed. Real-device browser acceptance is still outstanding.


## 2026-11-17 — UI hierarchy and responsive workspace refinement
- Reworked visual hierarchy with more consistent spacing, calmer panel surfaces, improved contrast, typography and control states.
- Reordered the desktop workspace so the prospect list and dossier are the primary area, with prospect intake in a secondary column; on narrower screens the prospect workspace appears before the intake form.
- Added clear workspace heading and live visible result count.
- Styled the research profile and ICP sections as accessible collapsible groups, reducing the form's initial visual length while retaining all fields.
- Improved mobile filter navigation, score grid, dashboard cards and form action visibility.
- Preserved existing local-first data model, scoring rules, evidence handling and manual-only workflow.
- UI commit: `0a94c88`. Automated checks and Pages deployment for this visual change are pending.

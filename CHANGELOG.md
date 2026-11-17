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

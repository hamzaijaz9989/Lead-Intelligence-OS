# System Architecture — Proposal v1.0

## Status
Proposed architecture only. No stack, framework, provider or starter repository is approved until evaluated and the first milestone is agreed.

## Architectural principles
- Start as a modular monolith / single workspace, not nine independently deployed agents.
- Keep research evidence separate from generated conclusions.
- Use provider adapters and replaceable model/data vendors.
- Make every workflow resumable, observable and idempotent.
- Human approval is a first-class system boundary.
- Store provenance and confidence with each claim.
- Default to least privilege and manual outbound.

## Logical components
1. **Workspace UI:** search, lead queues, dossier, contact coverage, outreach drafts, pipeline and settings.
2. **Workflow orchestrator:** schedules bounded research steps, retries safely, enforces quotas and records run state.
3. **Agent/task layer:** nine logical roles described in AGENT_SPECIFICATIONS.md.
4. **Source adapters:** permitted search, company websites, directories, marketplaces, public datasets and optional paid providers.
5. **Evidence service:** source records, extracted claims, timestamps, confidence and provenance.
6. **Core data store:** companies, people, channels, contacts, assessments, drafts, activities, approvals and suppression.
7. **Policy/approval service:** channel eligibility, human approvals, opt-out and action logs.
8. **Analytics:** conversion by source, segment, score band, channel and message.
9. **Provider configuration:** model and enrichment credentials stored outside source control.

## Data flow
Search request → candidate companies → identity resolution/dedupe → evidence collection → operational/channel analysis → people/contact research → ICP assessment → dossier and recommended next action → human review → manual outreach by operator → activity/outcome capture → conversion analytics and learning.

## Suggested initial deployment shape
A small web application with a relational database and server-side workflow execution. SQLite may suit a local proof of concept; a managed PostgreSQL service may be considered later if multi-user access, concurrency or hosted deployment requires it. Final choice depends on security, portability, hosting cost and the selected starter foundation.

## Agent execution contract
Every task receives a bounded input, source policy, allowed tools, time/request budget and output schema. It returns structured findings, citations/evidence IDs, confidence, unknowns, warnings and run metadata. Agents do not get unrestricted access to secrets or arbitrary outbound actions.

## Integration strategy
Use adapters for:
- discovery/search;
- page retrieval and extraction;
- company/technology signals;
- email/phone enrichment;
- social profile attribution;
- language model inference;
- CRM/calendar export (future, gated).

Never assume a provider has free access, lawful reuse rights, complete global coverage or accurate verification. Confirm pricing, terms, retention, rate limits and permitted use before integration.

## Reliability and observability
Track run ID, agent/task, input scope, start/end, provider, request counts, retries, cost estimate, status, evidence created, error category and human disposition. Use dedupe keys and idempotency guards to avoid duplicate records and repeated external actions.

## Security boundaries
- Secrets only in approved secret storage/environment configuration; never commit keys.
- Separate untrusted page content from system instructions.
- Restrict network destinations and request volume where possible.
- Avoid browser sessions/cookies unless explicitly reviewed and approved.
- Do not mount personal directories or privileged host interfaces into an untrusted execution environment.
- Redact secrets and unnecessary personal data from logs.
- Backups, deletion and retention policies must be defined before production use.


## M1 implementation choice — local-first prototype
For the first vertical slice, use a static browser application with no server, no external API calls and no secrets. Persist prototype records in browser localStorage. This is suitable only for synthetic/test data and initial UX validation: data is per browser/device, can be cleared by the user/browser, is not a secure multi-user database and is not synchronised. Do not enter real prospect personal data. A secure backend and access controls are required before real-world contact dossiers or shared team use.


## Current implementation snapshot (2026-11-17)
- `index.html`: self-contained static application (HTML/CSS/JavaScript), no third-party runtime dependencies.
- `scripts/validate.mjs`: checks inline JavaScript syntax and required MVP features; rejects basic network-call patterns in the local-first app script.
- `.github/workflows/validate.yml`: runs the static validation script on pushes, pull requests and manual dispatch.
- `.github/workflows/pages.yml`: publishes the root static site to GitHub Pages.
- Browser localStorage is used for prototype persistence only. It is device/browser-specific, can be cleared, is not a backup, is not shared, and is not appropriate for real prospect personal data.
- GitHub Actions and Pages execution results have not yet been verified. No browser-level test has been completed.

The prototype normalises valid website input to a lowercase hostname and strips a leading `www.` before storing it as the company domain.

- `scripts/test-core.mjs`: Node assertions for unknown-vs-zero scoring, weighted coverage, grade gating, safe URL protocols, canonical domain normalisation and evidence-claim parsing. The tests are configured in the validation workflow but have not yet been observed passing in GitHub Actions.

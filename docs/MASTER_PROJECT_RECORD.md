# Master Project Record — Lead Intelligence OS

**Status:** M1 prototype deployed; M2 manual discovery and channel intelligence implemented; responsive UI refinement in progress  
**Version:** 1.0  
**Last updated:** 2026-11-17  
**Repository:** https://github.com/hamzaijaz9989/Lead-Intelligence-OS  
**Visibility:** Public by deliberate user choice (confirmed 2026-11-17). Do not commit API keys, credentials or real prospect personal data; keep such data in an appropriately secured private runtime/storage.

## 1. North-star objective

Build a global, evidence-driven B2B lead intelligence and demo-generation platform for ExactFlow. Its ultimate purpose is to help the sales operator book as many **qualified ExactFlow product demos** as possible.

This is not merely a company scraper, contact list or bulk messaging tool. It must help answer:
- Which businesses are most likely to benefit from ExactFlow?
- What evidence demonstrates their operational complexity?
- Who is the best person to approach, and through which business contact routes?
- What should we say to earn a relevant conversation and secure a demo?
- Which channels, segments and messages actually produce qualified demos?

**North-star metric:** qualified demos booked. Supporting metrics: qualified prospects, decision-maker reach rate, positive response rate, demo conversion rate, demos completed/attended, and channel/segment performance.

## 2. User and business context

The primary operator is a Business Development Executive selling ExactFlow. ExactFlow is a unified platform for physical-product businesses, spanning product/catalogue and inventory, orders/invoicing/returns, repairs and refurbishment, warehouse operations, supplier purchasing, CRM, financial reconciliation and AI automation.

The operator personally handles calls and outbound communications. The system researches, prioritises, prepares and tracks; it does not autonomously send cold outreach in the MVP.

## 3. Global market scope

No fixed country restriction. Search globally and prioritise markets/segments using observed ICP fit, reachable decision-makers, lawful channel availability, data quality and demo conversion outcomes. Initial known areas of interest include the UK, USA, Germany, Canada, Europe and Australia, but these are not exclusive.

No fixed industry restriction either: a business qualifies when it sells/manages physical products and shows credible operational complexity that ExactFlow can address. Initial focus includes DTC brands, marketplace sellers, multi-brand retailers, online retailers, refurbished electronics, consumer electronics, fashion, furniture/home goods, beauty, sports/outdoor, automotive parts and wholesale-retail hybrids.

Potential sources include company websites, search engines, LinkedIn, marketplaces and their permitted public signals, industry directories, communities, social platforms, job postings, public business registries and freelance marketplaces such as Fiverr/Upwork where terms permit the proposed research and contact. Platform rules must be checked before using data or contacting users; marketplace activity is a signal, not blanket permission to solicit.

## 4. Ideal customer profile

Prioritise businesses with evidence of several of the following:
- Multiple sales channels (own store, Shopify, Amazon, eBay, other marketplaces, wholesale or physical retail).
- Large/complex catalogues, SKUs, product variants or brands.
- Inventory coordination, stock discrepancies, transfers or multiple locations.
- High returns, exchanges or reverse logistics.
- Repair, testing, grading, refurbishment or resale of returned/used products.
- Multiple warehouses, fulfilment centres or 3PL partners.
- Supplier networks, purchasing, procurement and replenishment complexity.
- Disconnected systems, manual workflows, hiring or expansion signals.

Do not assume an online seller is a good prospect. Missing public information is unknown, not proof of low complexity.

### ICP score (100 points)
- Multiple sales channels: 20
- Inventory/catalogue complexity: 15
- Returns/reverse logistics: 15
- Repair/refurbishment: 15
- Warehouse/fulfilment: 15
- Supplier/procurement: 10
- Growth/expansion signals: 5
- Overall ExactFlow fit: 5

Bands: A = 80–100; B = 65–79; C = 50–64; D = below 50. Explain every score with evidence. Unverified assumptions do not earn full points. Allow a human override with a recorded reason.

## 5. Required prospect dossier

Every qualified prospect should have:
1. Company identity, official website, country/location, sector, products, size indicators and evidenced growth context.
2. Sales-channel map with confirmed/likely/unverified states.
3. Operational intelligence covering catalogue, inventory, orders, returns, repair/refurbishment, warehouse/fulfilment, suppliers/procurement and known systems.
4. Relevant decision-makers: name, title, department, company and public professional profile.
5. Contact intelligence: published professional/business phone numbers, switchboard/department numbers, business emails, official contact forms and attributed social/business profiles, each with source, type, confidence, verification and last-checked date.
6. Evidence-backed operational challenges versus clearly labelled hypotheses.
7. ExactFlow capability mapping, recommended pitch, call opening, discovery questions, demo ask, likely objections and responses.
8. Channel-specific outreach drafts: phone, email, LinkedIn, SMS, WhatsApp Business and relevant social/contact-form channels.
9. ICP score, explanation, confidence, contact coverage and next best action.

Never invent a number, email, person, account, technology stack or pain point. Guessed email patterns must remain explicitly unverified. Never mislabel a switchboard as a direct line. If no phone is found, retain the lead and recommend the strongest permitted alternative route.

## 6. Nine logical agents

These are coordinated roles in one product/workflow, not nine independent applications:
1. **Atlas — Market Intelligence:** sectors, market signals, search strategies and opportunity hypotheses.
2. **Scout — Company Discovery:** discover businesses, resolve official domains, identify entities and deduplicate.
3. **Omni — Channel Intelligence:** map own-store, marketplace, retail, wholesale and other sales channels.
4. **Ops — Operational Complexity:** research inventory, catalogue, returns, repair, warehouses, fulfilment and procurement.
5. **Hunter — Decision-Maker & Phone Intelligence:** find relevant buyers and publicly available professional phone routes.
6. **Enrich — Multi-Channel Contact Intelligence:** email, social profiles, contact forms, attribution and channel status.
7. **Qualifier — ICP Scoring:** score, explain, rank and flag insufficient evidence.
8. **Persuader — Sales Strategy & Outreach:** map ExactFlow fit and draft channel-specific pitches/scripts.
9. **Oracle — Pipeline & Performance Intelligence:** track activity, responses, demos, outcomes and learning.

All roles share the evidence store, policy controls, run logs and human-review queue.

## 7. Human approval and outreach boundaries

Agents may research, analyse, score, prepare drafts and queue recommendations. Human approval is required for prospect approval where configured, exports, external messages, calls, follow-ups, CRM changes, deletion and credential use. MVP outreach is manual: no automatic cold calls, SMS, WhatsApp messages, emails or social DMs. Discovering a contact detail does not establish consent or lawful basis to market through that channel.

## 8. Product workflow

Discover → resolve company → collect evidence → map channels and operations → identify decision-makers → enrich contacts → qualify/score → prepare sales dossier → human review → operator conducts permitted outreach → record outcome → follow-up recommendation → demo booked/completed → performance learning.

## 9. Product views

- Complete Contact Leads (clearly state whether direct contact, switchboard, email or social only).
- Phone Number Unavailable (show alternative routes).
- Research Incomplete (show gaps and next research action).
- High-Priority Prospects (default ICP score threshold 80, adjustable).
- Review Queue.
- Active Outreach / Follow-ups.
- Demo Pipeline.
- Do Not Contact / Suppressed.

## 10. Architecture direction

Start with a small, auditable application and shared evidence model. Evaluate existing open-source foundations before adopting them; do not install or trust a repository without reviewing license, dependencies, scripts, permissions, data flows and security posture. Keep provider integrations replaceable. Separate source evidence from generated analysis. Make workflows resumable and idempotent. Do not build nine microservices/standalone agents prematurely.

Candidate foundation previously identified for further audit: OpenProspector (MIT; React/Tailwind, Hono, SQLite). It is a candidate only, not approved, installed, tested or certified safe. Other candidates require separate evaluation. Do not assume free tiers can provide complete verified direct contacts at scale.

## 11. Data and evidence principles

Every factual claim should link to one or more dated source records. Store source URL, title/provider, capture/discovery date, last-checked date, evidence excerpt/summary, claim supported, confidence and verification status. Keep raw facts, inferred hypotheses, model-generated recommendations and human corrections distinct. Track provenance and deduplicate companies, people, phone numbers, emails and profiles.

## 12. Security, privacy and compliance

Apply country- and channel-specific review for applicable privacy, electronic marketing and telemarketing rules (including, where relevant, UK GDPR/PECR, EU GDPR and national laws, Germany UWG, Canada CASL, US CAN-SPAM and telephone rules, and Australia's Spam Act/telemarketing rules). Publicly accessible information is not automatically permission to market. Respect marketplace, social-network and search-provider terms. Provide suppression/opt-out handling and audit logs. Do not bypass access controls, scrape private data or automate prohibited activity.

Use least privilege, secret management, minimal retention, access controls, safe logging, prompt-injection defences and source-content isolation. Treat web pages, uploaded files and prospect content as untrusted input. Never expose credentials in repository files.

## 13. Constraints and product principles

- Start with a $0-upfront-cost approach where feasible; disclose when paid data providers are necessary for reliable scale or verification.
- Research quality and demo conversion outrank raw lead volume.
- Global scope, evidence-first, manual outbound.
- Human-in-the-loop for consequential external actions.
- Avoid vendor lock-in; make data providers swappable.
- Never represent an untested feature as complete.
- Keep this record current after every meaningful project change.

## 14. Current project status (2026-11-17)

**Implemented**
- Public repository and project documentation established.
- Static browser prototype with manual prospect capture, evidence claims, weighted ICP scoring, dossier, review states, demo flag, search and CSV export.
- Responsive sales dashboard, synthetic demo loader and nine-role architecture preview (roles are not live agents).
- M2 manual discovery stages, source type, multi-channel records with URLs/status/evidence, discovery filters, queue counts and CSV export.
- Canonical-domain duplicate prevention; potential duplicates open the existing dossier rather than silently merging.
- Validation scripts and GitHub Actions workflows.
- Responsive refinement: dashboard and prospect workspace stack at widths up to 1200px; optional research/evidence and ICP scoring fields are expandable sections; header identifies Milestone 2.

**Verified**
- M2 validation run `44004131271` on commit `80d76d1` passed.
- M2 Pages deployment run `44004131345` on commit `80d76d1` passed.
- Responsive refinement commit `e9ff1dd` passed validation run `44004473156` and Pages deployment run `44004473184`. M3 operational capture commit `906cb6a` passed static validation run `44004662360`; the operational parser tests were corrected in commit `dcaf40b` and passed in validation run `44004843959`. GitHub Pages deployment run `44004662398` for app commit `906cb6a` also passed.

**Not implemented / not yet verified**
- Final responsive refinement CI and Pages deployment are pending.
- Real-device browser acceptance is still required.
- Live automated company discovery, external research providers, operational intelligence agents, decision-maker/contact enrichment and automated orchestration are not connected.
- No secure backend, shared database or outbound messaging integration exists. Browser localStorage is not secure or synchronised.

**Data boundary:** Repository is public and prototype records are local to the browser. Use synthetic data only; never put real prospect personal data, private notes, API keys or credentials in this prototype/repository.

## 15. Next actions

1. Confirm responsive refinement validation and Pages deployment complete successfully.
2. Test the updated dashboard on a phone and desktop-mode browser; check expandable research and ICP sections.
3. Complete M2 browser acceptance: duplicate handling, channel status/evidence, discovery filters, counts and CSV export.
4. Proceed to M3 operational intelligence and permitted-source research design.
5. Only describe agents as active after their actual workflows, integrations, logs and tests are implemented.

## 16. Change-control rule

After every meaningful change, update:
- this Master Project Record (status, decisions, progress, next steps);
- the affected specification/architecture/data/workflow document;
- `CHANGELOG.md`;
- milestone status and test evidence.

A task is complete only when the result is implemented and verified. Record test commands/results, limitations and unverified items honestly.

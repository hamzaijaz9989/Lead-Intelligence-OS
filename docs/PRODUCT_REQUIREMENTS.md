# Product Requirements — v1.0

## Product outcome
Maximise qualified ExactFlow demos booked by helping a human B2B sales operator find, understand, prioritise and approach high-fit businesses worldwide.

## Users
- Primary: Business Development Executive / sales operator.
- Secondary: project administrator configuring sources, providers, policies and team access (future).

## Core capabilities
1. Global company discovery from lawful, permitted sources.
2. Company identity resolution, canonical domain and deduplication.
3. Sales-channel mapping with evidence and confidence.
4. Operational research: catalogue/SKUs, inventory, orders, returns, repair/refurbishment, warehouses/3PL, suppliers/procurement, growth and systems.
5. Decision-maker identification by role and relevance.
6. Business contact enrichment: direct professional numbers when publicly available, switchboards, department numbers, professional email, official forms and attributed social profiles.
7. Contact verification, provenance, freshness and channel eligibility.
8. Explainable ICP scoring.
9. ExactFlow capability-to-evidence mapping.
10. Personalised sales dossiers, call preparation, discovery questions, objection handling and demo ask.
11. Channel-specific draft generation.
12. Human review, approval, suppression and audit trail.
13. Manual outreach activity and pipeline tracking.
14. Analytics connecting sources, segments, messages and channels to qualified demos.

## Functional requirements

### Discovery and identity
- Search by geography, industry, business model, product category, marketplace and operational signals.
- Store source and discovery timestamp for every candidate.
- Resolve official website and distinguish similarly named entities.
- Deduplicate on domain, legal/company identity and aliases; permit human merge/split.

### Research and evidence
- Record each claim as confirmed, likely, hypothesis, unknown or contradicted.
- Attach source URL, source type, observed date, supporting excerpt/summary and confidence.
- Preserve conflicting evidence rather than silently choosing one.
- Do not infer that absence of evidence means absence of complexity.

### Contact intelligence
- Model people and company-level contacts separately.
- Phone types: direct professional, business mobile, company switchboard, department/office, published business WhatsApp, unverified and unavailable.
- Store international format, country code, owner/company association, source, discovery date, last checked, verification status, confidence and notes.
- Email types: direct professional, role-based/department, general, sales, contact-form route, guessed/unverified.
- Social profiles must be classified as official, reliably attributed, possible or unverified.
- Record channel permission/eligibility separately from contact discovery and technical verification.
- Never invent or silently validate guessed data.

### Qualification
- Use the 100-point rubric in the Master Project Record.
- Explain points and evidence; label gaps.
- Default A-priority view: score >=80.
- Support human override with reason and timestamp.

### Sales preparation
- Recommend ExactFlow capabilities only when matched to evidenced or clearly labelled hypothesised needs.
- Generate distinct drafts for phone, email, LinkedIn, SMS, WhatsApp Business, relevant social channels and contact forms.
- Include business context, relevant trigger, concise value proposition, discovery questions, demo ask and likely objections.
- Do not claim an operational problem as fact without evidence.

### Pipeline
- Record attempts, channel, date, operator, outcome, notes and next action.
- Outcomes include no answer, connected, wrong contact, not interested, interested, follow-up requested, opt-out, referral, demo booked, demo completed, no-show and disqualified.
- Capture demo date/status and source campaign.
- Suppression/opt-out must override future outreach recommendations.

### Governance
- Manual outbound only in MVP.
- Require human review before external communication, exports, CRM changes, deletion or credential use.
- Log approval decisions and consequential actions.

## Non-functional requirements
- Evidence provenance and auditability.
- Secure handling of credentials and personal data.
- Resumable, idempotent research runs.
- Provider-independent interfaces.
- Clear freshness and confidence labels.
- Responsive, usable lead-review workflow.
- Transparent cost and rate-limit tracking.
- No unsupported claims of completeness or verification.

## Initial acceptance criteria
- A user can save a company with canonical domain and source.
- A dossier displays facts, hypotheses and unknowns separately.
- Each qualified claim has source evidence.
- ICP score is explainable and reproducible.
- Contacts distinguish direct vs switchboard vs other routes.
- No phone/email/social value can be labelled verified without evidence.
- Outreach drafts are channel-specific and remain unsent.
- A suppression record blocks outreach recommendations.
- User can record an outreach attempt and demo outcome.
- Dashboard can report qualified demos booked by source/segment/channel.

## Out of scope for MVP
- Autonomous cold outreach or automated calling.
- Bulk WhatsApp/SMS sending.
- Circumvention of platform controls or paid access.
- Guaranteed personal mobile/email discovery.
- Autonomous CRM write access.
- Complex multi-agent microservice infrastructure.

# Security, Privacy & Outreach Compliance

## Status
This is a product control baseline, not legal advice. Before operating campaigns, review the current law and platform terms for each target country, channel, audience and data source with qualified counsel where needed.

## Core principles
- Publicly accessible does not mean unrestricted for reuse or marketing.
- Contact discovery, identity attribution, technical verification and marketing permission are separate fields.
- No guessed personal numbers, private personal data hunting or fabricated contact details.
- Respect opt-outs, suppression requests, platform terms, access controls, rate limits and robots/usage policies where applicable.
- Collect only data needed for a legitimate B2B purpose; define retention, access and deletion.
- Do not send messages or place calls automatically in MVP.

## Geographic considerations
Evaluate applicable privacy, electronic marketing and telemarketing requirements, including as relevant:
- UK GDPR and PECR;
- EU GDPR and member-state electronic marketing rules;
- Germany UWG and applicable privacy/telecommunications rules;
- Canada CASL and applicable privacy/telemarketing rules;
- US CAN-SPAM, TCPA and applicable federal/state calling rules;
- Australia's Spam Act and telemarketing rules.

Rules differ by recipient type, channel, jurisdiction, consent/other lawful basis, exemptions and business context. The system must not make a blanket global legal-eligibility claim.

## Channel controls
- **Phone:** classify direct professional line, business mobile, switchboard, department line or unknown; check relevant do-not-call and telemarketing rules before use.
- **Email:** distinguish direct professional, role-based, general, guessed and unverified; include required sender identity/opt-out controls where applicable.
- **SMS/WhatsApp:** no bulk or automated unsolicited messaging in MVP; use only when permitted and appropriately authorised. A published WhatsApp Business number is not automatic consent.
- **Social/marketplaces:** respect platform rules; do not scrape private profiles, evade restrictions or move marketplace relationships off-platform where prohibited.
- **Contact forms:** check purpose and terms; avoid repeated or bulk form submissions.

## Security requirements
- Store API keys only in approved secret storage/environment configuration, never Git.
- Least-privilege credentials and role-based access.
- Treat web pages, emails, profiles, documents and marketplace content as untrusted; defend against prompt injection and data exfiltration.
- Do not execute source-repository install scripts or dependencies before audit.
- Isolate experiments; no host admin access, Docker socket or personal file mounts for untrusted code.
- Restrict network access and provider destinations where feasible.
- Redact secrets and unnecessary personal data from logs.
- Encrypt data in transit and at rest where supported.
- Define backups, retention and deletion before production use.
- Log approvals, exports and external actions.

## Mandatory suppression behaviour
A recorded opt-out or do-not-contact instruction must suppress recommendations and future outreach for the relevant person, destination, channel or company scope. Ambiguous scope should be reviewed conservatively. Never remove suppression just because a contact record is refreshed.

## Review gates
Before integrating any data source/provider, record its terms, permitted purposes, data origin, geographic coverage, retention, cost, rate limits and security posture. Before enabling any outbound capability, require a separate product and legal review; it is outside MVP.

# Workflows — Prospect to Demo

## 1. Segment planning
Atlas analyses existing outcomes and market signals, proposes target segments, countries, source channels and search queries. Human selects or adjusts a research campaign.

## 2. Company discovery
Scout searches permitted sources and creates candidate records with source URL, date and identity confidence. Duplicate resolution runs before enrichment.

## 3. Company intelligence
Omni maps sales channels. Ops researches operational complexity. Each finding is stored as a sourced claim with confirmed/likely/hypothesis/unknown status and confidence.

## 4. Decision-maker and contact research
Hunter identifies relevant roles and public professional phone routes. Enrich finds professional email, official forms and attributed business/social profiles. Store direct lines separately from switchboards and department numbers. Record channel eligibility independently.

## 5. Qualification
Qualifier applies the 100-point rubric and explains each category. Low-evidence records go to Research Incomplete, not silently rejected. Human can override with a reason.

## 6. Sales dossier
Persuader prepares:
- business understanding and why it may fit;
- evidenced operational signals and hypotheses;
- ExactFlow capability mapping;
- target contact and alternative route;
- tailored opening, call plan and discovery questions;
- likely objections and responses;
- concise demo ask;
- separate drafts for each suitable channel;
- permission and compliance warnings.

## 7. Human review
Operator approves, edits, rejects or marks do-not-contact. External messages are never sent by the MVP. Approval decision and reason are logged where applicable.

## 8. Manual outreach and follow-up
Operator contacts prospects through channels that are appropriate and permitted. Record date, channel, contact, outcome, notes, opt-out and next action. Respect local time, platform terms and frequency restrictions.

## 9. Demo pipeline
Track demo requested, booked, confirmed, completed, no-show, rescheduled and disqualified. Capture source campaign and ICP assessment at time of booking.

## 10. Learning loop
Oracle analyses conversion by source, segment, geography, score band, persona, channel and message. Recommendations should be framed as hypotheses and tested rather than assumed causal.

## Lead views\nThe prototype includes discovery-stage filters and dashboard counts for discovered, researching, qualified and rejected candidates.
- Complete Contact Leads: show actual available routes and distinguish direct contact from switchboard.
- Phone Number Unavailable: show email, professional social and official form alternatives.
- Research Incomplete: show missing evidence and next research action.
- High-Priority Prospects: default score >=80.
- Review Queue: awaiting human decision.
- Active Outreach / Follow-ups.
- Demo Pipeline.
- Do Not Contact / Suppressed.

## Failure and retry handling
A provider failure should not erase partial evidence. Record run status and error, preserve completed findings, retry only idempotent steps, and expose unresolved gaps. If data cannot be verified, show unavailable/unknown rather than guessing.

## M3 — Operational intelligence capture (prototype)
The operator records one signal per line using `AREA | FACT/HYPOTHESIS/UNKNOWN | finding | source URL`. The dossier renders each signal with its area, status and safe source link. Signals are searchable and included in CSV export. This is manual evidence capture, not automated research. Missing fields remain unknown; hypotheses must not be presented as company-confirmed facts.


## M3 — Assisted company research pack (prototype)
When a prospect dossier is opened, generate targeted public-web search links for official company profile, sales channels, catalogue/inventory, returns/reverse logistics, repair/refurbishment, warehouses/fulfilment, suppliers/procurement, growth/hiring and systems/technology. If a canonical company domain is known, include an official-domain-restricted search. The operator opens the links, inspects original sources, then records evidence in the existing operational signal and evidence-claim fields. Search results are discovery leads, not evidence by themselves. No search API, automatic page retrieval, scraping or AI analysis is connected in this slice.

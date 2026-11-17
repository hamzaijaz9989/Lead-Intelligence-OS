# Data Model — Initial Logical Schema

This is a logical model, not a committed database migration. IDs should be stable UUIDs; timestamps stored in UTC; country and phone formatting normalised; source evidence retained independently of generated summaries.

## Core entities
- **companies:** company_id, legal_name, trading_name, canonical_domain, website_url, country, location, sector, business_model, description, identity_status, discovery_status, discovery_source_type, created_at, updated_at.
- **company_aliases:** alias_id, company_id, alias, alias_type, source_id.
- **sales_channels:** channel_id, company_id, channel_type, channel_url, identifier, status (confirmed/likely/unverified), evidence_id, confidence, last_checked.
- **operational_signals:** signal_id, company_id, category, claim, status (fact/hypothesis/unknown/contradicted), confidence, evidence_id, observed_at.
- **people:** person_id, company_id, full_name, job_title, department, seniority, professional_profile_url, relevance_reason, attribution_status, last_checked.
- **contact_details:** contact_id, company_id, person_id nullable, channel_type, destination, contact_type, verification_status, permission_status, source_id, confidence, discovered_at, last_checked, notes.
- **phone_numbers:** phone_id, company_id, person_id nullable, raw_number, international_format, country_code, phone_type, source_id, verification_status, confidence, discovered_at, last_checked, channel_eligibility, notes.
- **social_profiles:** profile_id, company_id, person_id nullable, platform, profile_url, profile_type, attribution_status, source_id, confidence, last_checked, channel_eligibility.
- **communication_channels:** channel_id, company_id, person_id nullable, channel_type, destination, source_id, verification_status, permission_status, restriction_reason, recommended_action, last_checked.
- **evidence_sources:** source_id, company_id nullable, person_id nullable, url, title, source_type, publisher, retrieved_at, published_at nullable, excerpt_or_summary, content_hash, reliability, terms_review_status.
- **evidence_claims:** claim_id, company_id, person_id nullable, subject_type, claim_type, claim_text, epistemic_status, confidence, evidence_source_id, observed_at, contradicted_by nullable.
- **icp_assessments:** assessment_id, company_id, score_total, grade, category_scores_json, rationale_json, confidence, assessed_at, assessor_version, human_override, override_reason.
- **outreach_drafts:** draft_id, company_id, person_id nullable, channel, purpose, draft_text, evidence_refs, permission_warning, status, created_at, reviewed_by nullable.
- **call_preparation:** call_prep_id, company_id, person_id nullable, research_summary, recommended_pitch, opening_script, discovery_questions_json, objections_json, desired_outcome, created_at.
- **contact_attempts:** attempt_id, company_id, person_id nullable, channel, attempted_at, outcome, notes, next_action, recorded_by, draft_id nullable.
- **pipeline_events:** event_id, company_id, person_id nullable, event_type, occurred_at, source_campaign, details_json, recorded_by. Include demo booked, demo completed, no-show and disqualified.
- **agent_runs:** run_id, agent_name, workflow_id, status, started_at, finished_at, provider, request_count, cost_estimate, error_summary, output_refs.
- **approval_logs:** approval_id, action_type, record_type, record_id, decision, reason, decided_by, decided_at.
- **suppression_list:** suppression_id, company_id nullable, person_id nullable, destination nullable, channel nullable, reason, source, effective_at, review_at nullable.
- **consent_records:** consent_id, person_id nullable, company_id nullable, channel, permission_status, legal_basis_or_source, evidence_id, recorded_at, expiry_or_review_date, opt_out_status, notes.
- **users:** user_id, display_name, role, created_at (future multi-user support).

## Relationships
Company 1:N aliases, channels, operational signals, people, contacts, evidence, assessments, drafts, attempts and pipeline events. Person 1:N contacts, phone numbers, social profiles, attempts and consent records. Evidence source 1:N claims and can support multiple assessments/drafts. Agent runs may create many evidence records and assessments. Approval logs reference consequential actions.

## Data integrity rules
- Canonicalise domains and phone numbers; preserve raw source representation.\n- Discovery status is one of discovered/researching/qualified/rejected; channel status is confirmed/likely/unverified and must remain distinct from legal permission to contact.\n- Detect exact canonical-domain duplicates before creating a second company; do not silently merge records. Human review is required for possible duplicates or shared domains.
- A phone/email/profile cannot be marked verified without a recorded basis and source.
- Distinguish contact discovery, technical verification and marketing permission.
- Never overwrite historical evidence silently; record new observations and freshness.
- Enforce suppression at recommendation and action time.
- Use unique constraints/dedupe keys where safe, with human merge support.
- Minimise retained personal data and define retention/deletion rules before production.

## Operational intelligence records (prototype)
Each company may hold an array of operational signal records: `area`, `status` (FACT/HYPOTHESIS/UNKNOWN), `finding`, and optional `url`. Signals are stored inside the local browser company record as an `operations` array. A future backend should normalise these into an OperationalSignals table with source IDs, capture dates, confidence and last-checked timestamps. Do not treat hypotheses as verified facts.

/*
# Add mobile_detailing column to quote_leads

1. Modified Tables
- `quote_leads`: add `mobile_detailing` text column (nullable) to store
  whether the customer requested mobile detailing service (Yes / No).

2. Security
- No RLS policy changes. Existing anon/authenticated CRUD policies
  continue to apply.
*/

ALTER TABLE quote_leads
  ADD COLUMN IF NOT EXISTS mobile_detailing text;

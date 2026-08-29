/*
# Create quote_leads table (single-tenant, no auth)

1. New Tables
- `quote_leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer's name
  - `phone` (text, not null) — customer's phone number
  - `zip` (text, not null) — customer's ZIP code
  - `service` (text, not null) — requested service category
  - `notes` (text, nullable) — optional notes from customer
  - `photo_url` (text, nullable) — optional uploaded photo reference
  - `status` (text, default 'new') — lead status for tracking
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `quote_leads`.
- Allow anon + authenticated INSERT only (public can submit leads, cannot read them back).
- No SELECT/UPDATE/DELETE for anon — leads are private to the business owner.
*/

CREATE TABLE IF NOT EXISTS quote_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  zip text NOT NULL,
  service text NOT NULL,
  notes text,
  photo_url text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a new lead
DROP POLICY IF EXISTS "anon_insert_quote_leads" ON quote_leads;
CREATE POLICY "anon_insert_quote_leads" ON quote_leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE for anon — leads are private business data

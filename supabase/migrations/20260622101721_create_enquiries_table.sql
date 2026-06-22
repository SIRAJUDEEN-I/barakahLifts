CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  building_name text NOT NULL,
  location text NOT NULL,
  number_of_elevators integer NOT NULL DEFAULT 1,
  service_required text NOT NULL CHECK (service_required IN ('AMC', 'Repair', 'Modernization', 'Installation', 'Other')),
  message text,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_enquiries_public"
  ON enquiries FOR INSERT
  TO anon WITH CHECK (true);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

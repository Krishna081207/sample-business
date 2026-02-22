
CREATE TABLE tables (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  table_number TEXT NOT NULL UNIQUE,
  capacity INTEGER NOT NULL,
  location TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE reservations ADD COLUMN table_id INTEGER;

INSERT INTO tables (table_number, capacity, location) VALUES 
  ('T1', 2, 'Window'),
  ('T2', 2, 'Window'),
  ('T3', 4, 'Main Hall'),
  ('T4', 4, 'Main Hall'),
  ('T5', 4, 'Main Hall'),
  ('T6', 6, 'Garden Terrace'),
  ('T7', 6, 'Garden Terrace'),
  ('T8', 8, 'Private Corner'),
  ('T9', 10, 'Wine Cellar'),
  ('T10', 12, 'Chef''s Table');

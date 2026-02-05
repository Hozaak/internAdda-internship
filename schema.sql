
-- SQL Schema for Internadda Database
-- Run this in your Supabase SQL Editor

-- 1. Table for Internships
CREATE TABLE internships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  company_name TEXT NOT NULL,
  company_logo TEXT,
  location TEXT NOT NULL,
  domain TEXT NOT NULL,
  type TEXT CHECK (type IN ('Remote', 'On-site', 'Hybrid')) NOT NULL,
  duration TEXT NOT NULL,
  stipend TEXT NOT NULL,
  posted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  deadline DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Table for Platform Stats (Singular row or key-value pairs)
CREATE TABLE platform_stats (
  id SERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value INTEGER NOT NULL,
  label TEXT NOT NULL
);

-- Initial Stat Data
INSERT INTO platform_stats (key, value, label) VALUES
('students_placed', 12500, 'Students Placed'),
('active_internships', 450, 'Active Internships'),
('partner_companies', 850, 'Partner Companies');

-- Sample Internship Data
INSERT INTO internships (title, company_name, company_logo, location, domain, type, duration, stipend, deadline) VALUES
('Frontend Developer Intern', 'TechNova', 'https://picsum.photos/seed/tech/100/100', 'Bangalore, IN', 'Engineering', 'Remote', '6 Months', '₹15,000 / month', '2024-12-30'),
('UI/UX Design Intern', 'CreativePixel', 'https://picsum.photos/seed/design/100/100', 'Mumbai, IN', 'Design', 'Hybrid', '3 Months', '₹10,000 / month', '2024-12-25'),
('Marketing Associate', 'GrowthPulse', 'https://picsum.photos/seed/market/100/100', 'Delhi, IN', 'Marketing', 'On-site', '4 Months', '₹12,000 / month', '2024-12-28'),
('Backend (Node.js) Intern', 'CloudSystems', 'https://picsum.photos/seed/cloud/100/100', 'Hyderabad, IN', 'Engineering', 'Remote', '6 Months', '₹20,000 / month', '2025-01-15');

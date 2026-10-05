-- ==============================================================================
-- ASK INVENTORS — Phase 0 Database Migration Scaffold
-- Migration ID: 20260924000000_init_schema.sql
-- Description: Sets up standard PostgreSQL extensions and utilities.
-- Note: Business tables and RLS policies will be migrated in Sprint 1.
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;

-- Enable PGCrypto extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA extensions;

-- Standard updated_at timestamp trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Verification comment
COMMENT ON FUNCTION public.handle_updated_at() IS 'Reusable trigger function to automatically update updated_at timestamps on record changes.';

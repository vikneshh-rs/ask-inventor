import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Creates a privileged Supabase client using the Service Role key.
 * 
 * SECURITY RULES:
 * 1. NEVER import or call this function from client components.
 * 2. Only use for administrative tasks (e.g., webhook verification, system tasks)
 *    where Row Level Security (RLS) bypass is explicitly authorized.
 */
export function createAdminClient() {
  if (typeof window !== "undefined") {
    throw new Error(
      "SECURITY VIOLATION: createAdminClient() was called in a client-side environment. This is forbidden."
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase admin environment variables: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY"
    );
  }

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

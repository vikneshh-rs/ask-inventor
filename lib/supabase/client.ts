import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types";

let client: ReturnType<typeof createBrowserClient<Database>> | null = null;

/**
 * Creates or returns an existing browser-side Supabase client instance.
 * Uses public environment variables safe for browser execution.
 */
export function createClient() {
  if (client) {
    return client;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // In build or unconfigured dev environments, warn or throw if invoked
    console.warn(
      "[Supabase Client] Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  client = createBrowserClient<Database>(
    supabaseUrl || "",
    supabaseAnonKey || ""
  );

  return client;
}

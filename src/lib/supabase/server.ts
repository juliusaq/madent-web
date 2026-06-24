import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Returns a Supabase client configured with the service role key for secure, 
 * server-side database insertions that bypass RLS.
 * 
 * Returns null if environment variables are missing to prevent application crashes
 * at build or runtime, allowing the caller to handle the error gracefully.
 */
export function getSupabaseServer() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Supabase server client configuration error: Missing env variables.');
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
    },
  });
}

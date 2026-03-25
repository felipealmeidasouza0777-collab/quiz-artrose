import { createClient } from '@supabase/supabase-js';

const getValidUrl = (url: string | undefined, fallback: string) => {
  try {
    new URL(url || '');
    return url || fallback;
  } catch {
    return fallback;
  }
};

const supabaseUrl = getValidUrl(import.meta.env.VITE_SUPABASE_URL, 'https://placeholder.supabase.co');
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

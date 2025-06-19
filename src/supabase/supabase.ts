
import { createClient } from '@supabase/supabase-js'

const supabase_URL = import.meta.env.VITE_SUPABASE_URL;
const supabase_key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const client = createClient(supabase_URL, supabase_key)

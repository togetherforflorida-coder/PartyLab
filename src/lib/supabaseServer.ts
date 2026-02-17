// src/lib/supabaseServer.ts
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and anon key must be set')
}

export function createSupabaseServerClient() {
  const cookieStore = cookies()

  return createClient(supabaseUrl as string, supabaseAnonKey as string, {
    global: {
      headers: {
        // Forward cookies so Supabase can read the auth session
        Cookie: cookieStore.toString(),
      },
    },
  })
}

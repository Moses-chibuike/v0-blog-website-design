import { createClient } from "@supabase/supabase-js"

// Define the structure of your blog post data
export interface BlogPost {
  id: number
  created_at: string
  updated_at: string
  title: string
  excerpt: string
  content: string
  author: string
  image: string | null
  category: string
  read_time: string
  date: string
  featured: boolean
  status: "draft" | "published"
  views: number
}

// Create a single Supabase client for interacting with your database
// Note: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are environment variables
// that should be configured in your Vercel project settings.
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: {
    persistSession: false, // Set to true if you want to persist sessions (e.g., for client-side auth)
  },
})

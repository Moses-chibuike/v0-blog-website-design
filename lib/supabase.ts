import { createClient } from "@supabase/supabase-js"

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  read_time: string
  author: string
  category: string
  tags: string[]
  status: "draft" | "published"
  featured: boolean
  views: number
  created_at: string
  updated_at: string
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test connection function
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("blog_posts").select("count", { count: "exact" })
    if (error) throw error
    return { success: true, message: "Connected to Supabase successfully" }
  } catch (error) {
    return { success: false, message: `Supabase connection failed: ${error}` }
  }
}

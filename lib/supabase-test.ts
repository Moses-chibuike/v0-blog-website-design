import { createClient } from "@supabase/supabase-js"

// This is a separate client for testing purposes, if needed.
// It uses the public anon key for read-only access.
export const supabaseTest = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

async function testSupabaseConnection() {
  try {
    const { data, error } = await supabaseTest.from("blog_posts").select("id").limit(1)

    if (error) {
      console.error("Supabase connection test failed:", error)
      return false
    }

    if (data) {
      console.log("Supabase connection successful! Found at least one blog post.")
      return true
    }
  } catch (e) {
    console.error("An unexpected error occurred during Supabase connection test:", e)
    return false
  }
  return false
}

// You can call this function to test your connection, e.g., in a script or a server action
// testSupabaseConnection();

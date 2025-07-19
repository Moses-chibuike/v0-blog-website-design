import { supabase } from "./supabase"

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("blog_posts").select("id").limit(1)
    if (error) {
      console.error("Supabase connection test failed:", error)
      return { success: false, message: `Supabase connection failed: ${error.message}` }
    }
    console.log("Supabase connection successful. Fetched data:", data)
    return { success: true, message: "Supabase connection successful!" }
  } catch (e: any) {
    console.error("Supabase connection test failed with exception:", e)
    return { success: false, message: `Supabase connection failed with exception: ${e.message}` }
  }
}

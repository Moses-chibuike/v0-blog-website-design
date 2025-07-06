import { supabase } from "./supabase"

export async function testSupabaseConnection() {
  try {
    // Test basic connection
    const { data, error } = await supabase.from("blog_posts").select("count", { count: "exact" }).limit(1)

    if (error) {
      throw error
    }

    return {
      success: true,
      message: "Successfully connected to Supabase",
      count: data?.length || 0,
    }
  } catch (error: any) {
    return {
      success: false,
      message: `Supabase connection failed: ${error.message}`,
      error: error,
    }
  }
}

export async function testSupabaseOperations() {
  try {
    // Test read operation
    const { data: posts, error: readError } = await supabase.from("blog_posts").select("*").limit(5)

    if (readError) {
      throw new Error(`Read test failed: ${readError.message}`)
    }

    // Test write operation (create a test post)
    const testPost = {
      title: "Test Post - Please Delete",
      excerpt: "This is a test post created to verify database operations.",
      content: "<p>This is a test post. It can be safely deleted.</p>",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
      date: new Date().toISOString().split("T")[0],
      read_time: "1 min read",
      author: "System Test",
      category: "Test",
      tags: ["test"],
      status: "draft" as const,
      featured: false,
    }

    const { data: newPost, error: createError } = await supabase.from("blog_posts").insert([testPost]).select().single()

    if (createError) {
      throw new Error(`Create test failed: ${createError.message}`)
    }

    // Test update operation
    const { error: updateError } = await supabase
      .from("blog_posts")
      .update({ title: "Test Post - Updated" })
      .eq("id", newPost.id)

    if (updateError) {
      throw new Error(`Update test failed: ${updateError.message}`)
    }

    // Test delete operation (cleanup)
    const { error: deleteError } = await supabase.from("blog_posts").delete().eq("id", newPost.id)

    if (deleteError) {
      throw new Error(`Delete test failed: ${deleteError.message}`)
    }

    return {
      success: true,
      message: "All Supabase operations completed successfully",
      operations: {
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      postsCount: posts?.length || 0,
    }
  } catch (error: any) {
    return {
      success: false,
      message: `Supabase operations test failed: ${error.message}`,
      error: error,
    }
  }
}

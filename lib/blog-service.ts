import { supabase, type BlogPost } from "./supabase"

export class BlogService {
  // Get all posts (for admin)
  async getAllPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching posts:", error)
      throw error
    }

    return data || []
  }

  // Get published posts only (for public blog)
  async getPublishedPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching published posts:", error)
      throw error
    }

    return data || []
  }

  // Get featured posts
  async getFeaturedPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .eq("featured", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching featured posts:", error)
      throw error
    }

    return data || []
  }

  // Get single post by ID
  async getPostById(id: number): Promise<BlogPost | null> {
    const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single()

    if (error) {
      if (error.code === "PGRST116") {
        // Post not found
        return null
      }
      console.error("Error fetching post:", error)
      throw error
    }

    return data
  }

  // Create new post
  async createPost(postData: Omit<BlogPost, "id" | "views" | "created_at" | "updated_at">): Promise<BlogPost> {
    const { data, error } = await supabase
      .from("blog_posts")
      .insert([
        {
          ...postData,
          views: 0,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Error creating post:", error)
      throw error
    }

    return data
  }

  // Update post
  async updatePost(id: number, postData: Partial<BlogPost>): Promise<BlogPost> {
    const { data, error } = await supabase
      .from("blog_posts")
      .update({
        ...postData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Error updating post:", error)
      throw error
    }

    return data
  }

  // Delete post
  async deletePost(id: number): Promise<boolean> {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id)

    if (error) {
      console.error("Error deleting post:", error)
      throw error
    }

    return true
  }

  // Get blog statistics
  async getStats() {
    const { data: allPosts, error: allError } = await supabase.from("blog_posts").select("status, views")

    if (allError) {
      console.error("Error fetching stats:", allError)
      throw allError
    }

    const posts = allPosts || []

    return {
      totalPosts: posts.length,
      publishedPosts: posts.filter((p) => p.status === "published").length,
      draftPosts: posts.filter((p) => p.status === "draft").length,
      totalViews: posts.reduce((sum, post) => sum + (post.views || 0), 0),
    }
  }

  // Increment post views
  async incrementViews(id: number): Promise<void> {
    const { error } = await supabase.rpc("increment_post_views", { post_id: id })

    if (error) {
      console.error("Error incrementing views:", error)
    }
  }
}

export const blogService = new BlogService()

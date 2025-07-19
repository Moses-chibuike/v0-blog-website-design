"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Edit, Trash2, Eye, Calendar, RefreshCw, AlertTriangle, CheckCircle } from "lucide-react"
import { testSupabaseConnection } from "@/lib/supabase-test"

// Fallback to localStorage if Supabase isn't available
interface BlogPost {
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
  status: "published" | "draft"
  featured: boolean
  views: number
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [connectionStatus, setConnectionStatus] = useState<{
    success: boolean
    error?: string
    usingFallback: boolean
  }>({ success: false, usingFallback: false })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setIsLoading(true)

      // Test Supabase connection first
      const connectionTest = await testSupabaseConnection()

      if (connectionTest.success) {
        // Use Supabase
        setConnectionStatus({ success: true, usingFallback: false })
        await loadFromSupabase()
      } else {
        // Fall back to localStorage
        setConnectionStatus({
          success: false,
          error: connectionTest.error,
          usingFallback: true,
        })
        loadFromLocalStorage()
      }
    } catch (error) {
      console.error("Error loading data:", error)
      setConnectionStatus({
        success: false,
        error: "Failed to load data",
        usingFallback: true,
      })
      loadFromLocalStorage()
    } finally {
      setIsLoading(false)
    }
  }

  const loadFromSupabase = async () => {
    try {
      // Import and use Supabase service
      const { blogService } = await import("@/lib/blog-service")
      const [postsData, statsData] = await Promise.all([blogService.getAllPosts(), blogService.getStats()])
      setPosts(postsData)
      setStats(statsData)
    } catch (error) {
      console.error("Supabase load failed:", error)
      throw error
    }
  }

  const loadFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const savedPosts = localStorage.getItem("blog-posts")
      if (savedPosts) {
        const localPosts = JSON.parse(savedPosts)
        setPosts(localPosts)
        setStats({
          totalPosts: localPosts.length,
          publishedPosts: localPosts.filter((p: BlogPost) => p.status === "published").length,
          draftPosts: localPosts.filter((p: BlogPost) => p.status === "draft").length,
          totalViews: localPosts.reduce((sum: number, post: BlogPost) => sum + post.views, 0),
        })
      }
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        if (connectionStatus.success) {
          const { blogService } = await import("@/lib/blog-service")
          await blogService.deletePost(id)
        } else {
          // Delete from localStorage
          const savedPosts = localStorage.getItem("blog-posts")
          if (savedPosts) {
            const localPosts = JSON.parse(savedPosts)
            const updatedPosts = localPosts.filter((p: BlogPost) => p.id !== id)
            localStorage.setItem("blog-posts", JSON.stringify(updatedPosts))
          }
        }
        await loadData()
        alert("Post deleted successfully!")
      } catch (error) {
        console.error("Error deleting post:", error)
        alert("Error deleting post. Please try again.")
      }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container spacing-responsive-sm">
        {/* Connection Status Alert */}
        {connectionStatus.usingFallback && (
          <Alert className="mb-6 border-orange-200 bg-orange-50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>Warning:</strong> Using local storage fallback. Posts won't be visible to other users.{" "}
              {connectionStatus.error && <span className="block mt-1 text-sm">Error: {connectionStatus.error}</span>}
              <Link href="/admin/setup" className="underline font-medium">
                Fix database connection →
              </Link>
            </AlertDescription>
          </Alert>
        )}

        {connectionStatus.success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Connected:</strong> Using Supabase database. Posts are visible to all users.
            </AlertDescription>
          </Alert>
        )}

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h1 className="text-responsive-2xl font-bold">Admin Dashboard</h1>
            <p className="text-slate-600">
              Manage your blog posts and content
              {connectionStatus.usingFallback && <span className="text-orange-600 ml-2">(Local Mode)</span>}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <Button variant="outline" onClick={loadData} className="w-full sm:w-auto bg-transparent">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
              <Link href="/admin/new-post">
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid-responsive-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-responsive-xs">Total Posts</CardDescription>
              <CardTitle className="text-responsive-xl">{stats.totalPosts}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-responsive-xs">Published</CardDescription>
              <CardTitle className="text-responsive-xl text-green-600">{stats.publishedPosts}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-responsive-xs">Drafts</CardDescription>
              <CardTitle className="text-responsive-xl text-orange-600">{stats.draftPosts}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="text-responsive-xs">Total Views</CardDescription>
              <CardTitle className="text-responsive-xl">{stats.totalViews.toLocaleString()}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-responsive-lg">All Posts</CardTitle>
            <CardDescription>Manage your blog posts, edit content, and track performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-slate-500 mb-4">No posts yet. Create your first post!</p>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/admin/new-post">
                      <Plus className="mr-2 h-4 w-4" />
                      Create First Post
                    </Link>
                  </Button>
                </div>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 border rounded-lg gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-semibold text-responsive-sm line-clamp-1">{post.title}</h3>
                        <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
                        {post.featured && <Badge variant="outline">Featured</Badge>}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-responsive-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views} views</span>
                        </div>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${post.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/admin/edit/${post.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700 bg-transparent"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

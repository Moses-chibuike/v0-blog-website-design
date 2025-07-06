"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye, Settings, BarChart3, FileText, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { blogService, type BlogPost } from "@/lib/blog-service"

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [postsData, statsData] = await Promise.all([blogService.getAllPosts(), blogService.getStats()])
      setPosts(postsData)
      setStats(statsData)
    } catch (error) {
      console.error("Error loading data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await blogService.deletePost(id)
        await loadData() // Reload data after deletion
      } catch (error) {
        console.error("Error deleting post:", error)
        alert("Error deleting post. Please try again.")
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your Adesuwa blog content</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin/setup">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Setup
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Blog
                </Button>
              </Link>
              <Link href="/admin/new-post">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Posts</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalPosts}</p>
                  </div>
                  <FileText className="w-8 h-8 text-amber-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Published</p>
                    <p className="text-2xl font-bold text-green-600">{stats.publishedPosts}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Drafts</p>
                    <p className="text-2xl font-bold text-orange-600">{stats.draftPosts}</p>
                  </div>
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Views</p>
                    <p className="text-2xl font-bold text-blue-600">{stats.totalViews.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Posts Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
            </CardHeader>
            <CardContent>
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                  <p className="text-gray-600 mb-4">Get started by creating your first blog post.</p>
                  <Link href="/admin/new-post">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Create First Post
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Title</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Author</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Views</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-right py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div>
                                <p className="font-medium text-gray-900 line-clamp-1">{post.title}</p>
                                <p className="text-sm text-gray-600 line-clamp-1">{post.excerpt}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{post.author}</td>
                          <td className="py-3 px-4">
                            <Badge variant="secondary">{post.category}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={post.status === "published" ? "default" : "secondary"}
                              className={post.status === "published" ? "bg-green-100 text-green-800" : ""}
                            >
                              {post.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{post.views}</td>
                          <td className="py-3 px-4 text-gray-600">{new Date(post.created_at).toLocaleDateString()}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-end space-x-2">
                              <Link href={`/blog/${post.id}`}>
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </Link>
                              <Link href={`/admin/edit/${post.id}`}>
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </Link>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(post.id)}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

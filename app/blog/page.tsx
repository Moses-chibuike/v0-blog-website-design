"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, RefreshCw, AlertCircle } from "lucide-react"
import { getBlogPosts } from "@/lib/blog-service"
import type { BlogPost } from "@/lib/supabase"

// Sample posts for fallback
const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Empowering African Women in Leadership",
    excerpt:
      "Celebrating the remarkable achievements of African women who are breaking barriers and leading change across various industries and communities.",
    content: "",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop",
    date: "2024-01-15",
    read_time: "5 min read",
    author: "Amara Okafor",
    category: "Leadership",
    tags: ["Leadership", "Empowerment", "Success"],
    status: "published" as const,
    featured: true,
    views: 1250,
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Traditional African Fashion Meets Modern Style",
    excerpt:
      "Exploring how contemporary African designers are revolutionizing fashion by blending traditional elements with modern aesthetics.",
    content: "",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop",
    date: "2024-01-12",
    read_time: "7 min read",
    author: "Kemi Adebayo",
    category: "Fashion & Culture",
    tags: ["Fashion", "Culture", "Design"],
    status: "published" as const,
    featured: true,
    views: 890,
    created_at: "2024-01-12T10:00:00Z",
    updated_at: "2024-01-12T10:00:00Z",
  },
  {
    id: 3,
    title: "Building Successful Businesses in Africa",
    excerpt:
      "Stories of African women entrepreneurs who are creating innovative solutions and building thriving businesses across the continent.",
    content: "",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
    date: "2024-01-10",
    read_time: "6 min read",
    author: "Fatima Hassan",
    category: "Entrepreneurship",
    tags: ["Business", "Entrepreneurship", "Innovation"],
    status: "published" as const,
    featured: false,
    views: 654,
    created_at: "2024-01-10T10:00:00Z",
    updated_at: "2024-01-10T10:00:00Z",
  },
  {
    id: 4,
    title: "The Power of Motherhood in African Culture",
    excerpt:
      "Honoring the sacred role of mothers in African societies and how they shape the future through wisdom, love, and strength.",
    content: "",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    date: "2024-01-08",
    read_time: "4 min read",
    author: "Asha Mwangi",
    category: "Motherhood",
    tags: ["Motherhood", "Culture", "Family"],
    status: "published" as const,
    featured: false,
    views: 432,
    created_at: "2024-01-08T10:00:00Z",
    updated_at: "2024-01-08T10:00:00Z",
  },
  {
    id: 5,
    title: "Education and Empowerment: Breaking Barriers",
    excerpt:
      "How education is transforming the lives of African women and creating pathways to economic independence and social change.",
    content: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    date: "2024-01-05",
    read_time: "8 min read",
    author: "Grace Nyong",
    category: "Education",
    tags: ["Education", "Empowerment", "Change"],
    status: "published" as const,
    featured: false,
    views: 789,
    created_at: "2024-01-05T10:00:00Z",
    updated_at: "2024-01-05T10:00:00Z",
  },
  {
    id: 6,
    title: "Health and Wellness in African Communities",
    excerpt:
      "Promoting holistic health approaches that combine traditional African healing practices with modern healthcare solutions.",
    content: "",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
    date: "2024-01-03",
    read_time: "5 min read",
    author: "Dr. Zara Osei",
    category: "Health & Wellness",
    tags: ["Health", "Wellness", "Traditional Medicine"],
    status: "published" as const,
    featured: false,
    views: 567,
    created_at: "2024-01-03T10:00:00Z",
    updated_at: "2024-01-03T10:00:00Z",
  },
  {
    id: 7,
    title: "Technology Innovation by African Women",
    excerpt:
      "Showcasing groundbreaking technological innovations and digital solutions created by brilliant African women in tech.",
    content: "",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
    date: "2024-01-01",
    read_time: "6 min read",
    author: "Nkem Okoro",
    category: "Technology",
    tags: ["Technology", "Innovation", "Digital"],
    status: "published" as const,
    featured: false,
    views: 345,
    created_at: "2024-01-01T10:00:00Z",
    updated_at: "2024-01-01T10:00:00Z",
  },
  {
    id: 8,
    title: "Preserving African Heritage for Future Generations",
    excerpt:
      "The importance of maintaining cultural traditions, languages, and customs while embracing progress and modernity.",
    content: "",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    date: "2023-12-28",
    read_time: "7 min read",
    author: "Adunni Bakare",
    category: "Heritage",
    tags: ["Heritage", "Culture", "Tradition"],
    status: "published" as const,
    featured: false,
    views: 678,
    created_at: "2023-12-28T10:00:00Z",
    updated_at: "2023-12-28T10:00:00Z",
  },
]

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState<"supabase" | "localStorage" | "demo">("demo")
  const [refreshing, setRefreshing] = useState(false)

  const loadPosts = async () => {
    try {
      const result = await getBlogPosts()
      setPosts(result.posts)
      setDataSource(result.source)
    } catch (error) {
      console.error("Error loading posts:", error)
      setPosts(samplePosts)
      setDataSource("demo")
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadPosts()
    setRefreshing(false)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const publishedPosts = posts.filter((post) => post.status === "published")
  const featuredPosts = publishedPosts.filter((post) => post.featured)
  const regularPosts = publishedPosts.filter((post) => !post.featured)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-orange-200 rounded-lg w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 space-y-4">
                  <div className="h-48 bg-gray-200 rounded-lg"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">Stories of Strength & Grace</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Discover inspiring stories, cultural insights, and empowering content celebrating the beauty, wisdom, and
            strength of African women across the globe.
          </p>

          {/* Data Source Indicator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm">
              {dataSource === "supabase" && (
                <Badge variant="default" className="bg-green-100 text-green-800">
                  Live Data
                </Badge>
              )}
              {dataSource === "localStorage" && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Local Storage
                </Badge>
              )}
              {dataSource === "demo" && (
                <Badge variant="outline" className="bg-orange-100 text-orange-800">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Demo Data
                </Badge>
              )}
            </div>
            <Button
              onClick={handleRefresh}
              disabled={refreshing}
              variant="outline"
              size="sm"
              className="text-secondary-600 hover:text-secondary-800 bg-transparent"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>

          {dataSource === "demo" && (
            <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <p className="text-orange-800 text-sm">
                You're viewing demo content. To manage posts, visit the{" "}
                <Link href="/admin" className="font-semibold underline hover:no-underline">
                  admin dashboard
                </Link>{" "}
                and set up your database connection.
              </p>
            </div>
          )}
        </div>

        {publishedPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">No Posts Yet</h3>
              <p className="text-secondary-600 mb-8">
                Start creating inspiring content by adding your first blog post.
              </p>
              <Button asChild className="bg-primary-500 hover:bg-primary-600">
                <Link href="/admin/new-post">Create Your First Post</Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">Featured Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-500 text-white">Featured</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-secondary-800">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.read_time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-secondary-800 mb-3 group-hover:text-primary-600 transition-colors">
                          <Link href={`/blog/${post.id}`} className="hover:underline">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-secondary-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-secondary-500">
                            By {post.author} • {new Date(post.date).toLocaleDateString()}
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                          >
                            Read More →
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Regular Posts */}
            {regularPosts.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">Latest Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-secondary-800">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.read_time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-secondary-800 mb-3 group-hover:text-primary-600 transition-colors">
                          <Link href={`/blog/${post.id}`} className="hover:underline">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-secondary-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-secondary-500">
                            By {post.author} • {new Date(post.date).toLocaleDateString()}
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                          >
                            Read More →
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}

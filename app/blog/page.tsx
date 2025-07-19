"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, User, Search } from "lucide-react"
import { blogService } from "@/lib/blog-service"
import type { BlogPost } from "@/lib/supabase"
import { Suspense } from "react"
import BlogLoadingPage from "./loading"

export default async function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const posts = await blogService.getPublishedPosts()

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const [allPosts, featured] = await Promise.all([blogService.getPublishedPosts(), blogService.getFeaturedPosts()])
      setBlogPosts(allPosts)
      setFeaturedPosts(featured)
    } catch (error) {
      console.error("Error loading posts:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const categories = [
    "All",
    "Personal Growth",
    "Professional Development",
    "Spirituality & Purpose",
    "Transformation Stories",
    "Mindset",
    "Success Stories",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-6"></div>
          <p className="text-body text-slate-600">Loading articles...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header with Charity Background Image */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-header-bg.jpg"
            alt="Volunteers working together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Our Blog</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Dive into our articles on personal growth, professional development, and purpose-driven living.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b shadow-sm">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-body border-slate-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    category === selectedCategory
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "border-slate-200 text-slate-600 hover:border-green-500 hover:text-green-600 bg-white"
                  } px-4 py-2 font-medium transition-colors`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && selectedCategory === "All" && !searchQuery && (
        <section className="bg-white section-padding-xs">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-heading font-bold mb-2">Featured Articles</h2>
                <p className="text-body text-slate-600">Our most popular and impactful content</p>
              </div>
              <Badge variant="secondary" className="px-3 py-1 text-caption">
                {featuredPosts.length} Featured
              </Badge>
            </div>

            <div className="grid-responsive-2 mb-16">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-green-600 text-white px-3 py-1 text-caption font-medium">Featured</Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge variant="secondary" className="mb-3 bg-white/90 text-slate-800">
                        {post.category}
                      </Badge>
                      <h3 className="text-subheading font-bold text-white mb-2 line-clamp-2 group-hover:text-green-300 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <div className="flex items-center text-caption text-white/80 gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.read_time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-heading font-bold mb-2">
                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-body text-slate-600">
                {searchQuery
                  ? `${filteredPosts.length} articles found for "${searchQuery}"`
                  : `${filteredPosts.length} articles available`}
              </p>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-slate-400" />
              </div>
              <h3 className="text-subheading font-semibold text-slate-900 mb-2">No articles found</h3>
              <p className="text-body text-slate-600 mb-6">
                {searchQuery
                  ? `No articles match your search for "${searchQuery}"`
                  : "No published articles in this category yet."}
              </p>
              {searchQuery && (
                <Button variant="outline" onClick={() => setSearchQuery("")} className="bg-white">
                  Clear Search
                </Button>
              )}
            </div>
          ) : (
            <div className="grid-auto-fit">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-md bg-white"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-800 px-3 py-1 text-caption font-medium">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="card-padding">
                    <div className="flex items-center text-caption text-slate-500 mb-3 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.read_time}</span>
                      </div>
                    </div>
                    <CardTitle className="text-subheading line-clamp-2 hover:text-green-600 transition-colors group-hover:text-green-600 leading-tight">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="card-padding pt-0">
                    <CardDescription className="text-body line-clamp-3 mb-6 leading-relaxed text-slate-600">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-caption text-slate-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button asChild variant="link" className="p-0 h-auto text-green-600 font-semibold">
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <Suspense fallback={<BlogLoadingPage />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.length === 0 ? (
                <div className="col-span-full text-center text-slate-600 text-lg">
                  No blog posts found. Check back later!
                </div>
              ) : (
                posts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-green-600 text-white text-caption rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="card-padding">
                      <div className="flex items-center text-caption text-slate-500 mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.read_time}</span>
                      </div>
                      <CardTitle className="text-subheading line-clamp-2 hover:text-green-600 transition-colors group-hover:text-green-600">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="card-padding pt-0">
                      <CardDescription className="text-body line-clamp-3 mb-6 leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                      <Button asChild variant="link" className="p-0 h-auto text-green-600 font-semibold">
                        <Link href={`/blog/${post.id}`}>
                          Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding-sm bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <div className="content-center">
            <h2 className="text-heading font-bold mb-4">Transform Your Life Today</h2>
            <p className="text-body-lg text-slate-300 mb-8 leading-relaxed">
              Get weekly transformation insights, success stories, and practical strategies delivered to your inbox.
              Join thousands on their journey to extraordinary change.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-body"
              />
              <Button className="bg-green-500 hover:bg-green-600 px-6 py-3 font-medium">Start Transforming</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { CardDescription } from "@/components/ui/card"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, User, Search, Star } from "lucide-react"

// Blog posts data
const fallbackPosts = [
  {
    id: 1,
    title: "Breaking Free from Limitations: Your Journey to Transformation",
    excerpt:
      "Discover how to overcome the barriers that hold you back and unlock your true potential through purpose-driven transformation. Learn the key principles that separate those who dream from those who achieve.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-15",
    read_time: "7 min read",
    author: "Oluseyi Alao",
    category: "Personal Growth",
    tags: ["Transformation", "Personal Growth", "Mindset", "Limitations"],
    status: "published" as const,
    featured: true,
    views: 1450,
  },
  {
    id: 2,
    title: "From Struggle to Success: The Power of Mindset Transformation",
    excerpt:
      "Learn how shifting your mindset can turn your greatest challenges into your most powerful stepping stones. Discover the mental frameworks that successful people use to overcome adversity.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-12",
    read_time: "8 min read",
    author: "Oluseyi Alao",
    category: "Mindset",
    tags: ["Mindset", "Success", "Growth", "Resilience"],
    status: "published" as const,
    featured: true,
    views: 1230,
  },
  {
    id: 3,
    title: "Living with Purpose: Aligning Your Life with Your Higher Calling",
    excerpt:
      "Explore how to discover and live according to your deeper purpose, creating impact that extends beyond yourself. Learn to align your daily actions with your spiritual calling.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-10",
    read_time: "9 min read",
    author: "Oluseyi Alao",
    category: "Spirituality & Purpose",
    tags: ["Purpose", "Spirituality", "Calling", "Impact"],
    status: "published" as const,
    featured: true,
    views: 980,
  },
  {
    id: 4,
    title: "The Courage to Start Over: Embracing New Beginnings",
    excerpt:
      "Sometimes the greatest act of courage is starting over. Learn how to embrace new beginnings and turn life transitions into transformation opportunities.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-08",
    read_time: "6 min read",
    author: "Oluseyi Alao",
    category: "Transformation Stories",
    tags: ["New Beginnings", "Courage", "Change", "Growth"],
    status: "published" as const,
    featured: false,
    views: 756,
  },
  {
    id: 5,
    title: "Building Unshakeable Self-Confidence",
    excerpt:
      "Discover the difference between confidence and arrogance, and learn practical strategies to build genuine self-confidence that serves both you and others.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-05",
    read_time: "7 min read",
    author: "Oluseyi Alao",
    category: "Personal Growth",
    tags: ["Confidence", "Self-Worth", "Personal Development", "Character"],
    status: "published" as const,
    featured: false,
    views: 623,
  },
  {
    id: 6,
    title: "Mastering Emotional Intelligence for Better Relationships",
    excerpt:
      "Learn how to develop emotional intelligence to build stronger, more meaningful relationships in both personal and professional settings.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-03",
    read_time: "8 min read",
    author: "Oluseyi Alao",
    category: "Professional Development",
    tags: ["Emotional Intelligence", "Relationships", "Communication", "Leadership"],
    status: "published" as const,
    featured: false,
    views: 892,
  },
]

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState(fallbackPosts)
  const [featuredPosts, setFeaturedPosts] = useState(fallbackPosts.filter((post) => post.featured))
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "All",
    "Personal Growth",
    "Professional Development",
    "Spirituality & Purpose",
    "Transformation Stories",
    "Mindset",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const posts = [
    {
      id: 1,
      title: "Breaking Free from Limitations: Your Journey to Transformation",
      excerpt: "Discover how to overcome the barriers that hold you back and unlock your true potential.",
      date: "2024-01-15",
      category: "Personal Growth",
    },
    {
      id: 2,
      title: "From Struggle to Success: The Power of Mindset Transformation",
      excerpt: "Learn how shifting your mindset can turn challenges into stepping stones.",
      date: "2024-01-12",
      category: "Mindset",
    },
    {
      id: 3,
      title: "Living with Purpose: Aligning Your Life with Your Higher Calling",
      excerpt: "Explore how to discover and live according to your deeper purpose.",
      date: "2024-01-10",
      category: "Purpose",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl py-12 sm:py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full uppercase tracking-wide mb-8">
              TRANSFORMATION BLOG
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Transformational Articles</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Discover life-changing insights, success stories, and practical strategies for personal and professional
              growth. Join thousands on their journey to unlock their true potential and live with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 border-gray-200 focus:border-green-600 focus:ring-green-600"
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
                      : "border-gray-200 text-gray-600 hover:border-green-600 hover:text-green-600 bg-white"
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
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full uppercase tracking-wide mb-4">
                  FEATURED ARTICLES
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Most Impactful Content</h2>
                <p className="text-gray-600">Our most popular and transformational articles</p>
              </div>
              <Badge className="bg-green-600 text-white px-3 py-1">{featuredPosts.length} Featured</Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <Card
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden group"
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
                      <Badge className="bg-green-600 text-white px-3 py-1 font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge variant="secondary" className="mb-3 bg-white/90 text-gray-800">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <div className="flex items-center text-sm text-white/80 gap-4">
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
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full uppercase tracking-wide mb-4">
                ALL ARTICLES
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {selectedCategory === "All" ? "Complete Collection" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-gray-600">
                {searchQuery
                  ? `${filteredPosts.length} articles found for "${searchQuery}"`
                  : `${filteredPosts.length} transformational articles available`}
              </p>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden group"
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
                      <Badge className="bg-green-600 text-white px-3 py-1 font-medium">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.read_time}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 hover:text-green-600 transition-colors leading-tight">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="line-clamp-3 mb-6 leading-relaxed text-gray-600">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
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

      {/* Updated Posts Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Transformation Blog</h1>
            <p className="text-xl text-gray-600">
              Discover life-changing insights and practical strategies for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl">
                    <Link href={`/blog/${post.id}`} className="hover:text-green-600">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-green-600 hover:text-green-700 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl text-center">
          <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full uppercase tracking-wide mb-8">
            JOIN THE TRANSFORMATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Transform Your Life Today</h2>
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
            Get weekly transformation insights, success stories, and practical strategies delivered to your inbox. Join
            thousands on their journey to extraordinary change.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-medium">
              Start Transforming
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

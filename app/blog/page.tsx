"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp } from "lucide-react"

// Updated sample African women blog data with dark-skinned African women images
const samplePosts = [
  {
    id: 1,
    title: "The Power of African Women in Leadership",
    excerpt:
      "Exploring how African women are breaking barriers and leading change across the continent and diaspora, from boardrooms to grassroots movements that are reshaping communities.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-15",
    read_time: "7 min read",
    author: "Amara Okafor",
    category: "Leadership",
    tags: ["Leadership", "African Women", "Empowerment", "Breaking Barriers"],
    status: "published",
    featured: true,
    views: 1650,
  },
  {
    id: 2,
    title: "Celebrating African Fashion and Cultural Heritage",
    excerpt:
      "From traditional textiles to modern runway shows, discover how African women are preserving and innovating cultural fashion traditions while making global impact.",
    image:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-12",
    read_time: "8 min read",
    author: "Kemi Adebayo",
    category: "Culture & Fashion",
    tags: ["Fashion", "Culture", "Heritage", "African Design", "Textiles"],
    status: "published",
    featured: true,
    views: 1420,
  },
  {
    id: 3,
    title: "Entrepreneurship: African Women Building Empires",
    excerpt:
      "Meet the inspiring African women entrepreneurs who are creating businesses, jobs, and opportunities across various industries while transforming their communities.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-10",
    read_time: "9 min read",
    author: "Fatima Hassan",
    category: "Entrepreneurship",
    tags: ["Entrepreneurship", "Business", "Innovation", "Economic Empowerment"],
    status: "published",
    featured: true,
    views: 1180,
  },
  {
    id: 4,
    title: "Motherhood and Career: Balancing Dreams in Africa",
    excerpt:
      "Exploring how African women navigate the beautiful complexity of motherhood while pursuing their professional and personal aspirations.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-08",
    read_time: "6 min read",
    author: "Aisha Mwangi",
    category: "Motherhood & Career",
    tags: ["Motherhood", "Career", "Work-Life Balance", "Family"],
    status: "published",
    featured: false,
    views: 890,
  },
  {
    id: 5,
    title: "Education Champions: African Women Transforming Learning",
    excerpt:
      "Highlighting African women educators, researchers, and advocates who are revolutionizing education across the continent and beyond.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-05",
    read_time: "7 min read",
    author: "Dr. Nomsa Mbeki",
    category: "Education",
    tags: ["Education", "Learning", "Teaching", "Academic Excellence"],
    status: "published",
    featured: false,
    views: 720,
  },
  {
    id: 6,
    title: "Health and Wellness: African Women Leading Change",
    excerpt:
      "Discover how African women are revolutionizing healthcare, promoting wellness, and addressing health challenges in their communities.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-03",
    read_time: "8 min read",
    author: "Dr. Adanna Okwu",
    category: "Health & Wellness",
    tags: ["Health", "Wellness", "Healthcare", "Medical Innovation"],
    status: "published",
    featured: false,
    views: 650,
  },
  {
    id: 7,
    title: "Breaking Barriers in Technology",
    excerpt:
      "Meet the African women who are coding the future, leading tech companies, and creating innovative solutions for African challenges.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-01",
    read_time: "9 min read",
    author: "Zara Okonkwo",
    category: "Technology",
    tags: ["Technology", "Innovation", "STEM", "Digital Transformation"],
    status: "published",
    featured: false,
    views: 580,
  },
  {
    id: 8,
    title: "Preserving African Languages and Stories",
    excerpt:
      "How African women are keeping indigenous languages alive and passing down oral traditions to future generations.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2023-12-28",
    read_time: "6 min read",
    author: "Ama Asante",
    category: "Culture & Heritage",
    tags: ["Language", "Culture", "Oral Tradition", "Heritage"],
    status: "published",
    featured: false,
    views: 420,
  },
]

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState(samplePosts)
  const [featuredPosts, setFeaturedPosts] = useState(samplePosts.filter((post) => post.featured))
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "All",
    "Leadership",
    "Culture & Fashion",
    "Entrepreneurship",
    "Motherhood & Career",
    "Education",
    "Health & Wellness",
    "Technology",
    "Culture & Heritage",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white">
        <div className="container section-padding-sm">
          <div className="content-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 text-caption mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              {blogPosts.length}+ Inspiring Stories
            </div>
            <h1 className="text-display font-bold mb-6">African Women's Stories</h1>
            <p className="text-body-lg text-secondary-300 leading-relaxed content-narrow">
              Discover inspiring stories of African women who are breaking barriers, preserving culture, and creating
              change across the continent and diaspora. Celebrate strength, wisdom, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b shadow-sm">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400 h-5 w-5" />
              <Input
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-body border-secondary-200 focus:border-primary-500 focus:ring-primary-500"
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
                      ? "bg-primary-600 hover:bg-primary-700 text-white"
                      : "border-secondary-200 text-secondary-600 hover:border-primary-500 hover:text-primary-600 bg-white"
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
                <h2 className="text-heading font-bold mb-2">Featured Stories</h2>
                <p className="text-body text-secondary-600">Our most inspiring and impactful content</p>
              </div>
              <Badge variant="secondary" className="px-3 py-1 text-caption bg-primary-100 text-primary-700">
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
                      <Badge className="bg-primary-600 text-white px-3 py-1 text-caption font-medium">Featured</Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge variant="secondary" className="mb-3 bg-white/90 text-secondary-800">
                        {post.category}
                      </Badge>
                      <h3 className="text-subheading font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-300 transition-colors">
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
      <section className="section-padding bg-secondary-50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-heading font-bold mb-2">
                {selectedCategory === "All" ? "All Stories" : `${selectedCategory} Stories`}
              </h2>
              <p className="text-body text-secondary-600">
                {searchQuery
                  ? `${filteredPosts.length} stories found for "${searchQuery}"`
                  : `${filteredPosts.length} inspiring stories available`}
              </p>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-secondary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-secondary-400" />
              </div>
              <h3 className="text-subheading font-semibold text-secondary-900 mb-2">No stories found</h3>
              <p className="text-body text-secondary-600 mb-6">
                {searchQuery
                  ? `No stories match your search for "${searchQuery}"`
                  : "No published stories in this category yet."}
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
                      <Badge className="bg-white/90 text-secondary-800 px-3 py-1 text-caption font-medium">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="card-padding">
                    <div className="flex items-center text-caption text-secondary-500 mb-3 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.read_time}</span>
                      </div>
                    </div>
                    <CardTitle className="text-subheading line-clamp-2 hover:text-primary-600 transition-colors group-hover:text-primary-600 leading-tight">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="card-padding pt-0">
                    <CardDescription className="text-body line-clamp-3 mb-6 leading-relaxed text-secondary-600">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-caption text-secondary-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button asChild variant="link" className="p-0 h-auto text-primary-600 font-semibold">
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

      {/* Newsletter CTA */}
      <section className="section-padding-sm bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
        <div className="container">
          <div className="content-center">
            <h2 className="text-heading font-bold mb-4">Join Our Sisterhood</h2>
            <p className="text-body-lg text-secondary-300 mb-8 leading-relaxed">
              Get weekly inspiration, cultural insights, and empowering stories of African women delivered to your
              inbox. Connect with our global community of strong, ambitious women.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-body"
              />
              <Button className="bg-primary-500 hover:bg-primary-600 px-6 py-3 font-medium">Join Community</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

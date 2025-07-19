"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { blogService } from "@/lib/blog-service"

export default async function BlogPage() {
  const posts = await blogService.getAllPosts()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "All",
    "Personal Growth",
    "Professional Development",
    "Spirituality & Purpose",
    "Transformation Stories",
    "Mindset",
    "Success Stories",
  ]

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Blog Header Section with Background Image */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532629391090-a4d149236ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Volunteers working together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container px-4 text-center text-white z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Our Blog</h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Dive into our latest articles on personal growth, professional development, and purpose-driven living.
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
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-body border-slate-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${
                    category === selectedCategory
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "border-slate-200 text-slate-600 hover:border-green-500 hover:text-green-600 bg-white"
                  } px-4 py-2 font-medium transition-colors`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-responsive">
            {filteredPosts.map((post) => (
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
                  <button asChild variant="link" className="p-0 h-auto text-green-600 font-semibold">
                    <Link href={`/blog/${post.id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

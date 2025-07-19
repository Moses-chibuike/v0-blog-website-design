"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { blogService } from "@/lib/blog-service"
import type { BlogPost } from "@/lib/supabase"

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedPosts = async () => {
      try {
        const posts = await blogService.getFeaturedPosts()
        setFeaturedPosts(posts)
      } catch (error) {
        console.error("Error loading featured posts:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadFeaturedPosts()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="h-48 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Unlock Your True Potential</h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            Discover life-changing insights, success stories, and practical strategies for personal and professional
            growth. Start your transformation journey today.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <Link href="/blog">Explore Blog</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most impactful content that's transforming lives around the world
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=300&width=400"}
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
                  <CardHeader className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.read_time}</span>
                      <span className="mx-2">•</span>
                      <span>{post.views || 0} views</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 hover:text-green-600 transition-colors group-hover:text-green-600">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="line-clamp-3 mb-6 leading-relaxed">{post.excerpt}</CardDescription>
                    <Button asChild variant="link" className="p-0 h-auto text-green-600 font-semibold">
                      <Link href={`/blog/${post.id}`}>
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AlaoMeBlog is dedicated to empowering individuals on their journey of personal and professional
              transformation. We believe in the power of knowledge and practical strategies to unlock your full
              potential and live a life of purpose.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our team of experts and passionate writers curate insightful articles, success stories, and actionable
              advice to guide you every step of the way.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=500&width=700&text=About+Us+Image"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Join our community of like-minded individuals committed to growth. Subscribe to our newsletter for exclusive
            content and never miss an update.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
            <Link href="/subscribe">Subscribe Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

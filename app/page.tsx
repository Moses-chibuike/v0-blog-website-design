"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Target, Award, BookOpen } from "lucide-react"

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadFeaturedPosts()
  }, [])

  const loadFeaturedPosts = async () => {
    try {
      setIsLoading(true)

      // Force reload from localStorage to get latest data
      if (typeof window !== "undefined") {
        const savedPosts = localStorage.getItem("blog-posts")
        if (savedPosts) {
          const allPosts = JSON.parse(savedPosts)
          const publishedPosts = allPosts.filter((post: any) => post.status === "published")
          const featured = publishedPosts.filter((post: any) => post.featured)
          setFeaturedPosts(featured.slice(0, 3))
        } else {
          setFeaturedPosts([])
        }
      }
    } catch (error) {
      console.error("Error loading featured posts:", error)
      setFeaturedPosts([])
    } finally {
      setIsLoading(false)
    }
  }

  // Add window focus event listener to refresh data when user returns to tab
  useEffect(() => {
    const handleFocus = () => {
      loadFeaturedPosts()
    }

    window.addEventListener("focus", handleFocus)
    return () => window.removeEventListener("focus", handleFocus)
  }, [])

  const stats = [
    { label: "Lives Transformed", value: "1000+", icon: Heart },
    { label: "Monthly Readers", value: "25K+", icon: Users },
    { label: "Success Stories", value: "500+", icon: Award },
    { label: "Countries Reached", value: "15+", icon: Target },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Transformation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative container text-center text-white z-10">
          <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full uppercase tracking-wide mb-8">
            MAKE IT HAPPEN
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Transforming Lives,
            <br />
            One <span className="text-green-400">Story</span> at a <span className="text-green-400">Time</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
            AlaoMe Transformation is creating hope and changing lives, one story at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              <Link href="/blog">Explore Stories</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent text-lg px-8 py-4"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full uppercase tracking-wide mb-6">
              MAKE A DIFFERENCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Large Pool Potential Impact</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              With our transformation platform, you can support the growth and development of individuals who are ready
              to change their lives
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <p className="text-gray-500 text-sm mt-2">
                  {index === 0 &&
                    "We have transformed an impressive number of lives. Help us continue to grow and reach our ultimate goal."}
                  {index === 1 && "Over 25K readers are engaged. Join us and be a part of our success story."}
                  {index === 2 &&
                    "We have more than 500 success stories. Help us continue to make vision into reality."}
                  {index === 3 && "Reaching individuals across 15+ countries worldwide."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-amber-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full uppercase tracking-wide mb-8">
                MAKE YOUR IMPACT
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">AlaoMe Gives You More</h2>
              <p className="text-lg sm:text-xl mb-8 text-gray-200">
                AlaoMe bridges the gap between generosity and transformation. Our mission is to empower lives, rewrite
                stories, and create opportunities for brighter futures.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Yourself",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  title: "Friends & Family",
                  image:
                    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  title: "Community",
                  image:
                    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full uppercase tracking-wide mb-6">
              FEATURED CONTENT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Transformational Articles</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most impactful content covering personal growth, professional development, and
              transformational stories that inspire change.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-[4/3] bg-gray-200"></div>
                  <CardHeader className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : featuredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No featured articles available yet.</p>
              <Button asChild variant="outline">
                <Link href="/admin/new-post">Create Your First Post</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=300&width=400"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 hover:text-green-600 transition-colors">
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
          )}

          <div className="text-center mt-16">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              <Link href="/blog">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl text-center">
          <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full uppercase tracking-wide mb-8">
            JOIN THE TRANSFORMATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Transform Your Life Today</h2>
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
            Join thousands of individuals on their transformation journey. Get weekly insights, success stories, and
            practical strategies delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 whitespace-nowrap">
                Start Transforming
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">Join our community of transformation. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

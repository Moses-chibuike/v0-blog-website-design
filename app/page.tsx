"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Zap, Star, Award, Target } from "lucide-react"
import { blogDataManager } from "@/lib/blog-data"

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedPosts = () => {
      try {
        // Get featured posts from blog data manager
        const posts = blogDataManager.getFeaturedPosts()
        setFeaturedPosts(posts.slice(0, 3)) // Show only first 3 on homepage
      } catch (error) {
        console.error("Error loading featured posts:", error)
        setFeaturedPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    loadFeaturedPosts()
  }, [])

  const stats = [
    { label: "Lives Transformed", value: "1000+", icon: Heart },
    { label: "Monthly Readers", value: "25K+", icon: Users },
    { label: "Success Stories", value: "500+", icon: Award },
    { label: "Countries Reached", value: "15+", icon: Target },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-green-500/20 rounded-full text-green-300 text-sm mb-12 border border-green-500/30">
              <Star className="w-4 h-4 mr-2" />
              Transforming Lives, Differently
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Welcome to <span className="text-green-400">AlaoMeBlog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Discover profound insights on personal and professional growth, transformation stories, and purpose-driven
              content that empowers you to break free from limitations and unlock your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
              >
                <Link href="/blog">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 bg-transparent px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-xs bg-white border-b">
        <div className="container">
          <div className="grid-responsive-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-heading font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-body text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed">
              At AlaoMe Transformation, we go beyond conventional methods to facilitate deep, meaningful change. We
              believe that true transformation isn't just about improvement—it's about reimagining what's possible.
            </p>
          </div>
          <div className="grid-responsive">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Personalized Mentorship</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  Our unique approach combines personalized mentorship with innovative strategies, ensuring that each
                  journey is tailored to your unique needs and aspirations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Holistic Growth</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  We focus on growth that empowers you to break free from limitations and unlock your full potential
                  through wisdom, creativity, and purpose-driven strategies.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Partners in Journey</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  We are not just mentors, we are partners in your journey, dedicated to fostering lasting change that
                  leaves an enduring impact for His glory.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">Featured Articles</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed">
              Discover our most impactful content covering personal growth, professional development, and
              transformational stories that inspire change.
            </p>
          </div>

          {isLoading ? (
            <div className="grid-responsive">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-[4/3] bg-slate-200"></div>
                  <CardHeader className="card-padding">
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-6 bg-slate-200 rounded"></div>
                  </CardHeader>
                  <CardContent className="card-padding pt-0">
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : featuredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 mb-4">No featured articles available yet.</p>
              <Button asChild variant="outline">
                <Link href="/admin/new-post">Create Your First Post</Link>
              </Button>
            </div>
          ) : (
            <div className="grid-responsive">
              {featuredPosts.map((post) => (
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
                  <CardHeader className="card-padding">
                    <div className="flex items-center text-caption text-slate-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
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
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="btn-lg bg-transparent">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <div className="content-center">
            <h2 className="text-display font-bold mb-6">Transform Your Life Today</h2>
            <p className="text-body-lg text-slate-300 mb-12 leading-relaxed">
              Join thousands of individuals on their transformation journey. Get weekly insights, success stories, and
              practical strategies delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-body"
                />
                <Button className="bg-green-500 hover:bg-green-600 btn-lg whitespace-nowrap shadow-lg">
                  Start Transforming
                </Button>
              </div>
              <p className="text-caption text-slate-400 mt-4">
                Join our community of transformation. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

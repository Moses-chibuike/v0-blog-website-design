"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Eye, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { blogDataManager, type BlogPost } from "@/lib/blog-data"

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (params.id) {
      loadPost(Number.parseInt(params.id as string))
    }
  }, [params.id])

  const loadPost = async (id: number) => {
    try {
      setIsLoading(true)
      setNotFound(false)

      // Get post from the same data source as admin
      const foundPost = blogDataManager.getPostById(id)

      if (!foundPost) {
        setNotFound(true)
        return
      }

      setPost(foundPost)

      // Get related posts (same category, excluding current post)
      const allPosts = blogDataManager.getPublishedPosts()
      const related = allPosts.filter((p) => p.id !== id && p.category === foundPost.category).slice(0, 3)

      setRelatedPosts(related)

      // Increment view count
      blogDataManager.updatePost(id, { views: foundPost.views + 1 })
    } catch (error) {
      console.error("Error loading post:", error)
      setNotFound(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p>Loading article...</p>
        </div>
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="mb-8">
            <Badge className="bg-green-600 text-white mb-4">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                <span>{post.views} views</span>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-12">
            <Image
              src={post.image || "/placeholder.svg?height=600&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {post.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      This is a comprehensive guide that will help you understand the key concepts and practical
                      applications discussed in this transformational article. Our approach focuses on real-world
                      implementation and sustainable change.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
                    <ul className="space-y-2">
                      <li>Understanding the fundamental principles of transformation</li>
                      <li>Practical strategies for implementing change in your life</li>
                      <li>Overcoming common obstacles and challenges</li>
                      <li>Building sustainable habits for long-term success</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
                    <p className="text-lg leading-relaxed">
                      The journey of transformation begins with a single step. Whether you're looking to improve your
                      personal life, advance your career, or deepen your spiritual practice, the principles outlined in
                      this article provide a solid foundation for meaningful change.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
                    <p className="text-lg leading-relaxed">
                      Take action today by implementing one small change from this article. Remember, transformation is
                      a process, not a destination. Be patient with yourself and celebrate small wins along the way.
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Share2 className="h-4 w-4" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Author Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">About the Author</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{post.author}</h4>
                        <p className="text-sm text-gray-600">Transformation Coach</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Dedicated to helping individuals unlock their potential and create meaningful change in their
                      lives.
                    </p>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Get the latest transformational insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg?height=300&width=400"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white text-xs">{relatedPost.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 hover:text-green-600 transition-colors">
                      <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="line-clamp-3 text-sm leading-relaxed mb-4">
                      {relatedPost.excerpt}
                    </CardDescription>
                    <Button asChild variant="link" className="p-0 h-auto text-green-600 font-semibold text-sm">
                      <Link href={`/blog/${relatedPost.id}`}>Read More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

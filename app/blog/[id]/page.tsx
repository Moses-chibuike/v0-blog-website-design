"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, MessageCircle } from "lucide-react"
import { blogService } from "@/lib/blog-service"
import type { BlogPost } from "@/lib/supabase"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const resolvedParams = await params
        const postId = Number.parseInt(resolvedParams.id)

        const foundPost = await blogService.getPostById(postId)
        if (foundPost) {
          setPost(foundPost)

          // Increment views
          await blogService.incrementViews(postId)

          // Get related posts (same category, excluding current post)
          const allPosts = await blogService.getPublishedPosts()
          const related = allPosts.filter((p) => p.id !== postId && p.category === foundPost.category).slice(0, 3)
          setRelatedPosts(related)
        }
      } catch (error) {
        console.error("Error loading post:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPost()
  }, [params])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p>Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-4 text-sm sm:text-base">The post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Back Button */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <header className="mb-6 sm:mb-8">
          <Badge className="mb-3 sm:mb-4 bg-green-600 text-xs sm:text-sm">{post.category}</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-600 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <User className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">{post.read_time}</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
              <Heart className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Like
            </Button>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
              <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
              <MessageCircle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Comment
            </Button>
          </div>

          {/* Featured Image */}
          <div className="aspect-video relative rounded-lg overflow-hidden mb-6 sm:mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-8 sm:mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-8 sm:my-12" />

          {/* Author Bio */}
          <div className="bg-slate-50 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6 sm:h-8 sm:w-8 text-slate-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{post.author}</h3>
                <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  {post.author} is a passionate writer and developer who loves sharing knowledge about technology and
                  web development.
                </p>
                <Button variant="outline" size="sm">
                  Follow Author
                </Button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold group-hover:text-green-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">{relatedPost.date}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </div>
  )
}

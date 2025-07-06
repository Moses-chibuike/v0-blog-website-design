"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, MessageCircle } from "lucide-react"
import { testSupabaseConnection } from "@/lib/supabase-test"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  read_time: string
  author: string
  category: string
  tags: string[]
  status: "published" | "draft"
  featured: boolean
  views: number
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

        // Sample fallback data
        const fallbackPosts = [
          {
            id: 1,
            title: "The Power of African Women in Leadership",
            excerpt:
              "Exploring how African women are breaking barriers and leading change across the continent and diaspora, from boardrooms to grassroots movements that are reshaping communities.",
            content: `<p>African women have always been leaders, but today they are breaking through barriers that have historically limited their visibility and influence. From corporate boardrooms to grassroots movements, African women are leading transformational change across the continent and diaspora.</p>

<h2>Breaking the Glass Ceiling</h2>
<p>Across Africa, women are ascending to positions of power previously dominated by men. From presidents like Ellen Johnson Sirleaf of Liberia to business leaders like Folorunso Alakija of Nigeria, African women are proving that leadership knows no gender.</p>

<h2>Grassroots Leadership</h2>
<p>Beyond formal positions, African women lead in their communities through:</p>
<ul>
  <li><strong>Community organizing:</strong> Mobilizing resources for education and healthcare</li>
  <li><strong>Economic empowerment:</strong> Creating cooperatives and supporting local businesses</li>
  <li><strong>Social change:</strong> Advocating for women's rights and gender equality</li>
  <li><strong>Cultural preservation:</strong> Maintaining traditions while embracing progress</li>
</ul>

<p>The future of Africa and the global African diaspora is bright, led by women who understand that true leadership is about lifting others as you climb.</p>`,
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
            content: `<p>African fashion is experiencing a renaissance, with African women designers, models, and fashion entrepreneurs taking center stage on global runways and in international markets.</p>

<h2>Traditional Textiles, Modern Innovation</h2>
<p>African women are reimagining traditional fabrics and techniques for contemporary fashion, from Kente cloth to Ankara prints, creating beautiful pieces that tell stories and express identity.</p>

<p>African fashion is not just about what we wear—it's about who we are, where we come from, and where we're going.</p>`,
            image:
              "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: "2024-01-12",
            read_time: "8 min read",
            author: "Kemi Adebayo",
            category: "Culture & Fashion",
            tags: ["Fashion", "Culture", "Heritage", "African Design"],
            status: "published",
            featured: true,
            views: 1420,
          },
          {
            id: 3,
            title: "Entrepreneurship: African Women Building Empires",
            excerpt:
              "Meet the inspiring African women entrepreneurs who are creating businesses, jobs, and opportunities across various industries while transforming their communities.",
            content: `<p>African women entrepreneurs are building businesses that not only generate profit but also create positive social impact. From tech startups to agricultural enterprises, these women are proving that business success and community development go hand in hand.</p>

<h2>Tech Innovation</h2>
<p>African women are at the forefront of the continent's tech revolution, creating fintech solutions, e-commerce platforms, and innovative apps that solve real problems.</p>

<p>These women are not just building businesses—they're building the future of Africa.</p>`,
            image:
              "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: "2024-01-10",
            read_time: "9 min read",
            author: "Fatima Hassan",
            category: "Entrepreneurship",
            tags: ["Entrepreneurship", "Business", "Innovation"],
            status: "published",
            featured: true,
            views: 1180,
          },
        ]

        // Try to use database first
        const connectionTest = await testSupabaseConnection()

        if (connectionTest.success) {
          try {
            const { blogService } = await import("@/lib/blog-service")
            const foundPost = await blogService.getPostById(postId)
            if (foundPost) {
              setPost(foundPost)
              const allPosts = await blogService.getPublishedPosts()
              const related = allPosts.filter((p) => p.id !== postId && p.category === foundPost.category).slice(0, 3)
              setRelatedPosts(related)
              return
            }
          } catch (error) {
            console.log("Database fetch failed, trying localStorage")
          }
        }

        // Fall back to localStorage
        if (typeof window !== "undefined") {
          const savedPosts = localStorage.getItem("blog-posts")
          if (savedPosts) {
            const localPosts = JSON.parse(savedPosts)
            const foundPost = localPosts.find((p: BlogPost) => p.id === postId && p.status === "published")
            if (foundPost) {
              setPost(foundPost)
              const related = localPosts
                .filter(
                  (p: BlogPost) => p.id !== postId && p.category === foundPost.category && p.status === "published",
                )
                .slice(0, 3)
              setRelatedPosts(related)
              return
            }
          }
        }

        // Use fallback data as last resort
        const foundPost = fallbackPosts.find((p) => p.id === postId)
        if (foundPost) {
          setPost(foundPost)
          const related = fallbackPosts.filter((p) => p.id !== postId && p.category === foundPost.category).slice(0, 2)
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
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
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
          <Badge className="mb-3 sm:mb-4 bg-primary-600 text-xs sm:text-sm">{post.category}</Badge>
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
                  {post.author} is a passionate writer and advocate for African women's empowerment, sharing stories
                  that inspire and uplift communities across the continent and diaspora.
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
                    <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary-600 transition-colors line-clamp-2">
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

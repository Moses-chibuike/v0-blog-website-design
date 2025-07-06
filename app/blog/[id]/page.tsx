"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Eye, Calendar, User, Tag } from "lucide-react"
import { getBlogPosts, incrementPostViews } from "@/lib/blog-service"
import type { BlogPost } from "@/lib/supabase"

// Sample posts for fallback
const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Empowering African Women in Leadership",
    excerpt:
      "Celebrating the remarkable achievements of African women who are breaking barriers and leading change across various industries and communities.",
    content: `
      <p>African women have always been pillars of strength in their communities, but today, they are increasingly taking center stage in leadership roles across various sectors. From boardrooms to political offices, from tech startups to social enterprises, African women are making their mark and inspiring the next generation.</p>

      <h2>Breaking Traditional Barriers</h2>
      <p>For centuries, traditional structures have limited women's participation in leadership roles. However, the tide is turning as more African women challenge these norms and create new pathways for success. They are not just breaking glass ceilings; they are reconstructing entire systems to be more inclusive and equitable.</p>

      <h2>Leading by Example</h2>
      <p>Today's African women leaders are characterized by their resilience, innovation, and commitment to community development. They understand that true leadership is not just about personal success, but about lifting others as they climb. This philosophy has led to the creation of mentorship programs, women's networks, and initiatives that support the next generation of female leaders.</p>

      <h2>The Ripple Effect</h2>
      <p>When African women lead, entire communities benefit. Studies have shown that women in leadership positions tend to prioritize education, healthcare, and social welfare – areas that have direct impacts on community well-being. Their leadership style often emphasizes collaboration, empathy, and sustainable development.</p>

      <h2>Challenges and Opportunities</h2>
      <p>Despite the progress, challenges remain. Access to funding, networking opportunities, and supportive policies are still limited in many regions. However, these challenges are also creating opportunities for innovation and creative solutions. African women leaders are finding new ways to access resources, build networks, and create supportive ecosystems.</p>

      <p>The future of African leadership is bright, and it is increasingly female. As more women step into leadership roles, they are not just changing their own lives – they are transforming entire societies and paving the way for a more equitable and prosperous Africa.</p>
    `,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop",
    date: "2024-01-15",
    read_time: "5 min read",
    author: "Amara Okafor",
    category: "Leadership",
    tags: ["Leadership", "Empowerment", "Success"],
    status: "published" as const,
    featured: true,
    views: 1250,
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Traditional African Fashion Meets Modern Style",
    excerpt:
      "Exploring how contemporary African designers are revolutionizing fashion by blending traditional elements with modern aesthetics.",
    content: `
      <p>African fashion is experiencing a renaissance, with designers across the continent and diaspora creating stunning pieces that honor traditional craftsmanship while embracing contemporary aesthetics. This fusion is not just about clothing; it's about cultural identity, economic empowerment, and artistic expression.</p>

      <h2>The Rich Heritage of African Textiles</h2>
      <p>African textiles have always been more than just fabric. They tell stories, represent social status, and carry cultural significance. From the intricate patterns of Kente cloth to the vibrant colors of Ankara prints, each textile tradition has its own unique history and meaning.</p>

      <h2>Modern Interpretations</h2>
      <p>Today's African fashion designers are taking these traditional elements and reimagining them for the modern world. They're creating pieces that can be worn in boardrooms, on red carpets, and in everyday life, making African fashion accessible and relevant to a global audience.</p>

      <h2>Economic Impact</h2>
      <p>This fashion revolution is also having a significant economic impact. It's creating jobs for artisans, supporting local textile industries, and putting African fashion on the global map. Many designers are also committed to sustainable and ethical production practices.</p>

      <p>The future of African fashion is bright, with designers continuing to innovate while staying true to their cultural roots. This movement is not just about fashion; it's about pride, identity, and the celebration of African creativity.</p>
    `,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop",
    date: "2024-01-12",
    read_time: "7 min read",
    author: "Kemi Adebayo",
    category: "Fashion & Culture",
    tags: ["Fashion", "Culture", "Design"],
    status: "published" as const,
    featured: true,
    views: 890,
    created_at: "2024-01-12T10:00:00Z",
    updated_at: "2024-01-12T10:00:00Z",
  },
  {
    id: 3,
    title: "Building Successful Businesses in Africa",
    excerpt:
      "Stories of African women entrepreneurs who are creating innovative solutions and building thriving businesses across the continent.",
    content: `
      <p>Entrepreneurship is thriving across Africa, with women leading the charge in creating innovative solutions to local and global challenges. These women entrepreneurs are not just building businesses; they're creating ecosystems of opportunity and driving economic growth across the continent.</p>

      <h2>Innovation Born from Necessity</h2>
      <p>Many successful African women entrepreneurs started their businesses to solve problems they encountered in their daily lives. This approach has led to innovative solutions in areas such as fintech, healthcare, education, and agriculture.</p>

      <h2>Access to Funding and Resources</h2>
      <p>While access to funding remains a challenge, more resources are becoming available to support women entrepreneurs. From microfinance institutions to venture capital funds focused on African startups, the funding landscape is evolving.</p>

      <h2>Building Sustainable Businesses</h2>
      <p>African women entrepreneurs are increasingly focused on building sustainable businesses that have positive social and environmental impacts. They understand that true success comes from creating value for all stakeholders, not just shareholders.</p>

      <p>The entrepreneurial spirit of African women is unstoppable. As more resources become available and barriers are removed, we can expect to see even more innovative businesses emerging from the continent.</p>
    `,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
    date: "2024-01-10",
    read_time: "6 min read",
    author: "Fatima Hassan",
    category: "Entrepreneurship",
    tags: ["Business", "Entrepreneurship", "Innovation"],
    status: "published" as const,
    featured: false,
    views: 654,
    created_at: "2024-01-10T10:00:00Z",
    updated_at: "2024-01-10T10:00:00Z",
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)

  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState<"supabase" | "localStorage" | "demo">("demo")

  useEffect(() => {
    const loadPost = async () => {
      try {
        const result = await getBlogPosts()
        const foundPost = result.posts.find((p) => p.id === postId)

        if (foundPost) {
          setPost(foundPost)
          setDataSource(result.source)

          // Increment view count
          if (result.source !== "demo") {
            await incrementPostViews(postId)
          }

          // Get related posts (same category, excluding current post)
          const related = result.posts
            .filter((p) => p.category === foundPost.category && p.id !== postId && p.status === "published")
            .slice(0, 3)
          setRelatedPosts(related)
        } else {
          // Fallback to sample data
          const samplePost = samplePosts.find((p) => p.id === postId)
          if (samplePost) {
            setPost(samplePost)
            setDataSource("demo")
            const related = samplePosts.filter((p) => p.category === samplePost.category && p.id !== postId).slice(0, 3)
            setRelatedPosts(related)
          }
        }
      } catch (error) {
        console.error("Error loading post:", error)
        // Try sample data as final fallback
        const samplePost = samplePosts.find((p) => p.id === postId)
        if (samplePost) {
          setPost(samplePost)
          setDataSource("demo")
          const related = samplePosts.filter((p) => p.category === samplePost.category && p.id !== postId).slice(0, 3)
          setRelatedPosts(related)
        }
      } finally {
        setLoading(false)
      }
    }

    if (postId) {
      loadPost()
    }
  }, [postId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-orange-200 rounded w-1/4"></div>
            <div className="h-64 bg-orange-200 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-6 bg-orange-200 rounded w-3/4"></div>
              <div className="h-4 bg-orange-200 rounded w-full"></div>
              <div className="h-4 bg-orange-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary-800 mb-4">Post Not Found</h1>
            <p className="text-secondary-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild className="bg-primary-500 hover:bg-primary-600">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline" className="text-secondary-600 hover:text-secondary-800 bg-transparent">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              {dataSource === "demo" && (
                <Badge variant="outline" className="ml-2 bg-orange-100 text-orange-800">
                  Demo Content
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6 leading-tight">{post.title}</h1>

            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">{post.excerpt}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-secondary-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.read_time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <div
              className="prose prose-lg max-w-none prose-headings:text-secondary-800 prose-p:text-secondary-700 prose-a:text-primary-600 prose-strong:text-secondary-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Author Info */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-800">{post.author}</h3>
                <p className="text-secondary-600">Contributing Writer</p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-secondary-800">
                        {relatedPost.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedPost.read_time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {relatedPost.views.toLocaleString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secondary-800 mb-3 group-hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${relatedPost.id}`} className="hover:underline">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-secondary-600 mb-4 line-clamp-2 text-sm">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-secondary-500">By {relatedPost.author}</div>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, MessageCircle } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Breaking Free from Limitations: Your Journey to Transformation",
    excerpt:
      "Discover how to overcome the barriers that hold you back and unlock your true potential through purpose-driven transformation. Learn the key principles that separate those who dream from those who achieve.",
    content: `<p>Every person has the potential for extraordinary transformation, yet most remain trapped by invisible barriers that limit their growth. These limitations aren't always external—often, they're the stories we tell ourselves about what's possible.</p>

<h2>Understanding Your Limitations</h2>
<p>The first step in any transformation journey is recognizing the limitations that hold you back. These can be:</p>
<ul>
<li><strong>Mental barriers:</strong> Limiting beliefs about your capabilities</li>
<li><strong>Emotional blocks:</strong> Fear of failure, rejection, or success</li>
<li><strong>Environmental constraints:</strong> Toxic relationships or unsupportive surroundings</li>
<li><strong>Habitual patterns:</strong> Behaviors that no longer serve your growth</li>
</ul>

<h2>The Power of Purpose-Driven Change</h2>
<p>True transformation isn't just about changing what you do—it's about aligning your actions with your deeper purpose. When you connect with your "why," you tap into an unlimited source of motivation and resilience.</p>

<h2>Practical Steps to Break Free</h2>
<p>Breaking free from limitations requires intentional action:</p>
<ol>
<li><strong>Identify your limiting beliefs:</strong> Write down the thoughts that hold you back</li>
<li><strong>Challenge these beliefs:</strong> Ask yourself, "Is this really true?"</li>
<li><strong>Create new empowering beliefs:</strong> Replace limitations with possibilities</li>
<li><strong>Take aligned action:</strong> Move forward despite fear or uncertainty</li>
<li><strong>Celebrate progress:</strong> Acknowledge every step forward, no matter how small</li>
</ol>

<p>Remember, transformation is not a destination—it's a journey of continuous growth and self-discovery. Every limitation you overcome makes you stronger and more capable of helping others do the same.</p>`,
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
    content: `<p>The difference between those who thrive and those who merely survive isn't talent, luck, or circumstances—it's mindset. Your mindset is the lens through which you view challenges, opportunities, and your own potential.</p>

<h2>The Two Types of Mindset</h2>
<p>Stanford psychologist Carol Dweck identified two fundamental mindsets:</p>
<ul>
<li><strong>Fixed Mindset:</strong> Believes abilities are static and unchangeable</li>
<li><strong>Growth Mindset:</strong> Believes abilities can be developed through effort and learning</li>
<li><strong>Growth Mindset:</strong> Believes abilities can be developed through effort and learning</li>
</ul>

<h2>Transforming Your Relationship with Struggle</h2>
<p>Struggle isn't the enemy of success—it's the pathway to it. When you shift your perspective on challenges, you transform them from obstacles into opportunities for growth.</p>

<h2>The Success Mindset Framework</h2>
<p>Successful individuals share common mental patterns:</p>
<ol>
<li><strong>Embrace discomfort:</strong> See challenges as growth opportunities</li>
<li><strong>Focus on solutions:</strong> Ask "How can I?" instead of "Why me?"</li>
<li><strong>Learn from failure:</strong> View setbacks as valuable feedback</li>
<li><strong>Maintain long-term vision:</strong> Keep your bigger purpose in mind</li>
<li><strong>Practice gratitude:</strong> Appreciate progress and lessons learned</li>
</ol>

<h2>Practical Mindset Shifts</h2>
<p>Transform your thinking with these powerful reframes:</p>
<ul>
<li>"I can't do this" → "I can't do this yet"</li>
<li>"This is too hard" → "This will help me grow"</li>
<li>"I failed" → "I learned"</li>
<li>"I'm not good enough" → "I'm becoming better"</li>
</ul>

<p>Remember, mindset transformation is a daily practice. Every thought you choose, every perspective you adopt, shapes the person you're becoming and the success you'll achieve.</p>`,
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
    content: `<p>In a world filled with distractions and competing priorities, finding and living your purpose can feel like searching for a needle in a haystack. Yet, purpose isn't something you find—it's something you uncover within yourself.</p>

<h2>What is Purpose?</h2>
<p>Purpose is the intersection of your gifts, passions, and the world's needs. It's your unique contribution to making the world better, aligned with your spiritual calling and designed for His glory.</p>

<h2>Signs You're Living Off-Purpose</h2>
<p>Many people live disconnected from their purpose without realizing it. Common signs include:</p>
<ul>
<li>Feeling unfulfilled despite external success</li>
<li>Lacking motivation or energy for daily activities</li>
<li>Constantly comparing yourself to others</li>
<li>Feeling like you're just going through the motions</li>
<li>Struggling to make decisions with confidence</li>
</ul>

<h2>Discovering Your Purpose</h2>
<p>Purpose discovery is a journey of self-reflection and spiritual alignment:</p>
<ol>
<li><strong>Examine your gifts:</strong> What are you naturally good at?</li>
<li><strong>Identify your passions:</strong> What activities energize you?</li>
<li><strong>Consider your experiences:</strong> How have your struggles prepared you to help others?</li>
<li><strong>Listen to your heart:</strong> What impact do you feel called to make?</li>
<li><strong>Seek divine guidance:</strong> Pray and meditate on your calling</li>
</ol>

<h2>Living Purpose-Driven</h2>
<p>Once you've identified your purpose, the real work begins—aligning your life with it:</p>
<ul>
<li><strong>Make purpose-based decisions:</strong> Filter choices through your calling</li>
<li><strong>Develop relevant skills:</strong> Invest in abilities that serve your purpose</li>
<li><strong>Build meaningful relationships:</strong> Connect with others who share your values</li>
<li><strong>Create systems for impact:</strong> Structure your life to maximize your contribution</li>
<li><strong>Stay connected to your why:</strong> Regularly remind yourself of your deeper calling</li>
</ul>

<h2>The Ripple Effect of Purpose</h2>
<p>When you live with purpose, you don't just transform your own life—you become a catalyst for transformation in others. Your authentic pursuit of your calling gives others permission to do the same.</p>

<p>Remember, your purpose isn't just about you—it's about the unique way you're called to serve others and glorify God through your gifts and experiences.</p>`,
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
]

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<(typeof blogPosts)[0] | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const resolvedParams = await params
        const postId = Number.parseInt(resolvedParams.id)

        const foundPost = blogPosts.find((p) => p.id === postId)
        if (foundPost) {
          setPost(foundPost)

          // Get related posts (same category, excluding current post)
          const related = blogPosts.filter((p) => p.id !== postId && p.category === foundPost.category).slice(0, 3)
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
          <p className="text-gray-600 mb-4 text-sm sm:text-base">The post you're looking for doesn't exist.</p>
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
          <Badge className="mb-3 sm:mb-4 bg-green-600 text-white text-xs sm:text-sm">{post.category}</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-600 mb-4 sm:mb-6">
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
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
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
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{relatedPost.date}</p>
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

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Heart } from "lucide-react"

// Sample blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Breaking Free from Limitations: Your Journey to Transformation",
    excerpt:
      "Discover how to overcome the barriers that hold you back and unlock your true potential through purpose-driven transformation.",
    content: `
      <p>Life has a way of placing barriers in our path—some visible, others hidden deep within our minds. These limitations can feel insurmountable, like walls that keep us from reaching our true potential. But what if I told you that most of these barriers exist only in our perception?</p>
      
      <h2>Understanding Your Mental Barriers</h2>
      <p>The first step in breaking free from limitations is recognizing them. Mental barriers often manifest as:</p>
      <ul>
        <li><strong>Fear of failure:</strong> The paralyzing thought that we might not succeed</li>
        <li><strong>Imposter syndrome:</strong> Feeling like we don't deserve our achievements</li>
        <li><strong>Perfectionism:</strong> The belief that anything less than perfect is failure</li>
        <li><strong>Past experiences:</strong> Allowing previous setbacks to define our future</li>
      </ul>
      
      <h2>The Power of Mindset Transformation</h2>
      <p>Transformation begins with a shift in perspective. When we change how we view challenges, we change our entire experience. Instead of seeing obstacles as roadblocks, we can learn to see them as stepping stones to growth.</p>
      
      <p>Consider the story of Sarah, a single mother who believed she was "too old" to pursue her dream of becoming a nurse. At 35, with two children and a full-time job, she felt trapped by circumstances. But when she shifted her mindset from "I can't because..." to "How can I make this work?", everything changed.</p>
      
      <h2>Practical Steps to Break Free</h2>
      <p>Breaking free from limitations isn't just about positive thinking—it requires concrete action:</p>
      
      <ol>
        <li><strong>Identify your limiting beliefs:</strong> Write down the thoughts that hold you back</li>
        <li><strong>Challenge these beliefs:</strong> Ask yourself, "Is this really true?"</li>
        <li><strong>Take small, consistent action:</strong> Progress doesn't require giant leaps</li>
        <li><strong>Celebrate small wins:</strong> Acknowledge every step forward</li>
        <li><strong>Surround yourself with support:</strong> Find people who believe in your potential</li>
      </ol>
      
      <h2>Your Transformation Starts Today</h2>
      <p>Remember, transformation is not a destination—it's a journey. Every day presents new opportunities to push beyond what you thought was possible. The limitations you face today are simply the starting point for tomorrow's breakthrough.</p>
      
      <p>As you embark on this journey, be patient with yourself. Change takes time, but with persistence and the right mindset, you can break free from any limitation and step into the life you were meant to live.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-15",
    readTime: "7 min read",
    category: "Personal Growth",
    author: {
      name: "Dr. Michael Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      bio: "Transformation coach and author with over 15 years of experience helping people overcome mental barriers.",
    },
    tags: ["mindset", "personal growth", "transformation", "self-improvement"],
    views: 1250,
    likes: 89,
  },
  {
    id: 2,
    title: "From Struggle to Success: The Power of Mindset Transformation",
    excerpt:
      "Learn how shifting your mindset can turn your greatest challenges into your most powerful stepping stones.",
    content: `
      <p>Success isn't just about talent, luck, or circumstances—it's fundamentally about how we think. The difference between those who thrive and those who merely survive often comes down to one crucial factor: mindset.</p>
      
      <h2>The Two Types of Mindset</h2>
      <p>Psychologist Carol Dweck's groundbreaking research identified two primary mindsets that shape our lives:</p>
      
      <p><strong>Fixed Mindset:</strong> The belief that our abilities, intelligence, and talents are static traits that cannot be significantly developed. People with this mindset often avoid challenges, give up easily, and see effort as a sign of inadequacy.</p>
      
      <p><strong>Growth Mindset:</strong> The understanding that abilities and intelligence can be developed through dedication, hard work, and learning from failure. Those with a growth mindset embrace challenges, persist through obstacles, and view effort as the path to mastery.</p>
      
      <h2>Real Stories of Transformation</h2>
      <p>Consider Marcus, who grew up in poverty and struggled academically. For years, he believed he wasn't "smart enough" for college. This fixed mindset kept him trapped in minimum-wage jobs, convinced that his circumstances defined his potential.</p>
      
      <p>Everything changed when Marcus encountered a mentor who introduced him to the concept of growth mindset. Instead of seeing his struggles as proof of limitation, he began to view them as opportunities for growth. He started taking night classes, embracing the discomfort of not knowing, and celebrating small improvements.</p>
      
      <p>Today, Marcus is a successful engineer, not because he suddenly became "smarter," but because he transformed how he thought about learning and growth.</p>
      
      <h2>Practical Strategies for Mindset Transformation</h2>
      
      <h3>1. Reframe Your Inner Dialogue</h3>
      <p>Instead of saying "I can't do this," try "I can't do this yet." This simple addition of "yet" opens up possibilities and acknowledges that abilities can be developed.</p>
      
      <h3>2. Embrace the Learning Process</h3>
      <p>Focus on the journey of learning rather than just the end result. Ask yourself: "What can I learn from this experience?" rather than "Did I succeed or fail?"</p>
      
      <h3>3. View Challenges as Opportunities</h3>
      <p>When faced with difficulties, remind yourself that challenges are not obstacles to your success—they are the very mechanism through which success is achieved.</p>
      
      <h3>4. Learn from Criticism</h3>
      <p>Instead of taking feedback personally, view it as valuable information that can help you improve. Constructive criticism is a gift that accelerates growth.</p>
      
      <h2>The Neuroscience of Change</h2>
      <p>Recent neuroscience research shows that our brains are remarkably plastic—capable of forming new neural pathways throughout our lives. This means that changing your mindset isn't just philosophical; it's literally rewiring your brain for success.</p>
      
      <p>Every time you choose growth over comfort, effort over ease, and learning over knowing, you're strengthening the neural pathways that support a growth mindset.</p>
      
      <h2>Your Transformation Journey</h2>
      <p>Remember, mindset transformation is not a one-time event—it's an ongoing practice. There will be days when you slip back into old patterns of thinking. That's normal and expected. The key is to notice these moments and gently redirect your thoughts toward growth and possibility.</p>
      
      <p>Your struggles are not your story's end—they're the beginning of your transformation. Every challenge you face is an opportunity to prove to yourself that you're capable of more than you ever imagined.</p>
    `,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Professional Development",
    author: {
      name: "Sarah Williams",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      bio: "Executive coach and bestselling author specializing in mindset transformation and leadership development.",
    },
    tags: ["mindset", "success", "professional development", "growth"],
    views: 2100,
    likes: 156,
  },
  {
    id: 3,
    title: "Living with Purpose: Aligning Your Life with Your Higher Calling",
    excerpt:
      "Explore how to discover and live according to your deeper purpose, creating impact that extends beyond yourself.",
    content: `
      <p>In a world filled with distractions and competing priorities, finding and living your purpose can feel like searching for a needle in a haystack. Yet, purpose is not something we find—it's something we uncover within ourselves, often hidden beneath layers of societal expectations and personal fears.</p>
      
      <h2>What Does It Mean to Live with Purpose?</h2>
      <p>Living with purpose means aligning your daily actions with your deepest values and calling. It's about understanding that your life has meaning beyond personal success or material accumulation. Purpose-driven living creates a sense of fulfillment that transcends temporary pleasures and connects you to something greater than yourself.</p>
      
      <p>Purpose is not always grandiose. It doesn't require you to change the world single-handedly. Sometimes, purpose is found in the quiet moments of service, in the relationships we nurture, or in the small ways we make our corner of the world a little brighter.</p>
      
      <h2>The Journey of Discovery</h2>
      <p>Discovering your purpose is rarely a lightning-bolt moment. More often, it's a gradual awakening that comes through:</p>
      
      <ul>
        <li><strong>Self-reflection:</strong> Taking time to understand your values, passions, and natural gifts</li>
        <li><strong>Life experiences:</strong> Both challenges and triumphs that shape your perspective</li>
        <li><strong>Service to others:</strong> Moments when you feel most alive while helping others</li>
        <li><strong>Spiritual connection:</strong> Recognizing your place in the larger tapestry of existence</li>
      </ul>
      
      <h2>A Story of Purpose in Action</h2>
      <p>Meet Elena, a successful corporate lawyer who felt empty despite her professional achievements. She had everything society told her she should want—prestige, money, recognition—yet she felt disconnected from her true self.</p>
      
      <p>The turning point came during a volunteer trip to build homes for families in need. As she worked alongside people who had so little yet radiated joy and gratitude, Elena realized that her purpose wasn't found in winning cases but in building bridges—connecting people, creating community, and using her skills to serve others.</p>
      
      <p>Elena didn't abandon her legal career overnight. Instead, she gradually shifted her practice toward pro bono work and social justice cases. She discovered that purpose isn't about changing everything at once—it's about making intentional choices that align with your values.</p>
      
      <h2>Signs You're Living Your Purpose</h2>
      <p>How do you know when you're on the right path? Here are some indicators:</p>
      
      <ol>
        <li><strong>Time feels different:</strong> You lose track of time when engaged in meaningful work</li>
        <li><strong>Energy increases:</strong> Rather than draining you, your work energizes you</li>
        <li><strong>Impact matters more than income:</strong> You're motivated by the difference you make</li>
        <li><strong>Challenges become opportunities:</strong> Obstacles feel like puzzles to solve rather than barriers</li>
        <li><strong>You feel connected:</strong> There's a sense of being part of something larger</li>
      </ol>
      
      <h2>Practical Steps to Align with Your Purpose</h2>
      
      <h3>1. Create Space for Reflection</h3>
      <p>In our busy world, purpose often whispers rather than shouts. Create regular quiet time for reflection, prayer, or meditation. Ask yourself: "What activities make me feel most alive? When do I feel most connected to something greater than myself?"</p>
      
      <h3>2. Pay Attention to Your Pain</h3>
      <p>Often, our purpose is connected to the pain we've experienced or witnessed. What injustices stir your heart? What problems do you feel compelled to solve? Your pain can be a compass pointing toward your purpose.</p>
      
      <h3>3. Experiment with Service</h3>
      <p>Volunteer in different areas and notice where you feel most engaged. Purpose often reveals itself through service to others.</p>
      
      <h3>4. Seek Wise Counsel</h3>
      <p>Talk to mentors, spiritual advisors, or trusted friends who know you well. Sometimes others can see our gifts and calling more clearly than we can.</p>
      
      <h2>Living Purpose in Everyday Moments</h2>
      <p>Purpose isn't reserved for grand gestures or career changes. It can be lived in everyday moments:</p>
      
      <ul>
        <li>Choosing kindness in difficult conversations</li>
        <li>Using your talents to help a neighbor</li>
        <li>Raising children with love and wisdom</li>
        <li>Creating beauty in your work, whatever it may be</li>
        <li>Standing up for what's right, even when it's difficult</li>
      </ul>
      
      <h2>The Ripple Effect of Purpose</h2>
      <p>When you live with purpose, you create ripples that extend far beyond your immediate circle. Your authenticity gives others permission to be authentic. Your courage inspires others to be courageous. Your service demonstrates that every life has value and potential.</p>
      
      <p>Remember, you don't have to have it all figured out to begin living with purpose. Start where you are, with what you have, and trust that each step of alignment will reveal the next. Your purpose is not a destination to reach but a way of traveling through life—with intention, compassion, and hope.</p>
      
      <p>The world needs what you have to offer. Your unique combination of experiences, gifts, and perspectives is not an accident. It's your contribution to the grand story of human flourishing. The question isn't whether you have a purpose—it's whether you'll have the courage to live it.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Spirituality & Purpose",
    author: {
      name: "Rev. David Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      bio: "Spiritual director and author focused on helping people discover their calling and live with greater purpose.",
    },
    tags: ["purpose", "spirituality", "calling", "meaning", "service"],
    views: 1800,
    likes: 134,
  },
]

// Related posts for suggestions
const getRelatedPosts = (currentId: number, category: string) => {
  return blogPosts.filter((post) => post.id !== currentId && post.category === category).slice(0, 2)
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id, post.category)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {post.likes} likes
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold text-gray-900">{post.author.name}</div>
                <div className="text-sm text-gray-600">{post.author.bio}</div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] relative mb-12 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium text-gray-700">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        {relatedPost.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                    </div>
                    <CardTitle className="text-xl">
                      <Link href={`/blog/${relatedPost.id}`} className="hover:text-green-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">{relatedPost.excerpt}</CardDescription>
                    <Button asChild variant="link" className="p-0 mt-4">
                      <Link href={`/blog/${relatedPost.id}`}>
                        Read More <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of others on their journey to personal growth and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/blog">Explore More Articles</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

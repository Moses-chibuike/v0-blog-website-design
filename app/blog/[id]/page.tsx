import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params

  const posts = {
    "1": {
      title: "Breaking Free from Limitations: Your Journey to Transformation",
      content: `
        <p>Every person has the potential for extraordinary transformation, yet most remain trapped by invisible barriers that limit their growth.</p>
        
        <h2>Understanding Your Limitations</h2>
        <p>The first step in any transformation journey is recognizing the limitations that hold you back:</p>
        <ul>
          <li><strong>Mental barriers:</strong> Limiting beliefs about your capabilities</li>
          <li><strong>Emotional blocks:</strong> Fear of failure, rejection, or success</li>
          <li><strong>Environmental constraints:</strong> Toxic relationships or unsupportive surroundings</li>
        </ul>
        
        <h2>The Power of Purpose-Driven Change</h2>
        <p>True transformation isn't just about changing what you do—it's about aligning your actions with your deeper purpose.</p>
        
        <p>Remember, transformation is not a destination—it's a journey of continuous growth and self-discovery.</p>
      `,
      author: "Oluseyi Alao",
      date: "2024-01-15",
      category: "Personal Growth",
    },
    "2": {
      title: "From Struggle to Success: The Power of Mindset Transformation",
      content: `
        <p>The difference between those who thrive and those who merely survive isn't talent, luck, or circumstances—it's mindset.</p>
        
        <h2>The Two Types of Mindset</h2>
        <p>Stanford psychologist Carol Dweck identified two fundamental mindsets:</p>
        <ul>
          <li><strong>Fixed Mindset:</strong> Believes abilities are static and unchangeable</li>
          <li><strong>Growth Mindset:</strong> Believes abilities can be developed through effort and learning</li>
        </ul>
        
        <h2>Transforming Your Relationship with Struggle</h2>
        <p>Struggle isn't the enemy of success—it's the pathway to it. When you shift your perspective on challenges, you transform them from obstacles into opportunities for growth.</p>
        
        <p>Remember, mindset transformation is a daily practice. Every thought you choose shapes the person you're becoming.</p>
      `,
      author: "Oluseyi Alao",
      date: "2024-01-12",
      category: "Mindset",
    },
    "3": {
      title: "Living with Purpose: Aligning Your Life with Your Higher Calling",
      content: `
        <p>In a world filled with distractions and competing priorities, finding and living your purpose can feel challenging. Yet, purpose isn't something you find—it's something you uncover within yourself.</p>
        
        <h2>What is Purpose?</h2>
        <p>Purpose is the intersection of your gifts, passions, and the world's needs. It's your unique contribution to making the world better.</p>
        
        <h2>Signs You're Living Off-Purpose</h2>
        <ul>
          <li>Feeling unfulfilled despite external success</li>
          <li>Lacking motivation or energy for daily activities</li>
          <li>Constantly comparing yourself to others</li>
          <li>Feeling like you're just going through the motions</li>
        </ul>
        
        <p>Remember, your purpose isn't just about you—it's about the unique way you're called to serve others.</p>
      `,
      author: "Oluseyi Alao",
      date: "2024-01-10",
      category: "Purpose",
    },
  }

  const post = posts[id as keyof typeof posts]

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="text-green-600 font-medium mb-2">{post.category}</div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 gap-4">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  )
}

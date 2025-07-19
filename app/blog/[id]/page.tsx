import { blogService } from "@/lib/blog-service"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar, Clock, User, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = await blogService.getPostById(postId)

  if (!post) {
    notFound()
  }

  // Increment views on the server side
  await blogService.incrementViews(postId)

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="container mx-auto py-12 px-4 md:px-6 lg:px-8 max-w-4xl">
        {/* Post Header */}
        <header className="mb-8 text-center">
          <Badge className="bg-green-600 text-white mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
          <div className="flex items-center justify-center text-gray-500 text-sm space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.read_time}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{post.views || 0} views</span>
            </div>
          </div>
        </header>

        {/* Post Image */}
        {post.image && (
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-10 shadow-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg mx-auto text-gray-800 leading-relaxed">
          <p>{post.content}</p>
          {/* Add more content here, potentially parsed from markdown or rich text */}
          <p>
            This is a placeholder for the full blog post content. In a real application, this would be dynamically
            rendered from the `post.content` field, which could contain rich text, markdown, or HTML.
          </p>
          <p>We hope you found this article insightful. Stay tuned for more transformative content!</p>
        </div>
      </article>
    </div>
  )
}

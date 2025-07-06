import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Eye, Share2, Heart } from "lucide-react"
import { getBlogPost, incrementPostViews, getBlogPosts } from "@/lib/blog-service"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const postId = Number.parseInt(params.id)

  if (isNaN(postId)) {
    notFound()
  }

  const post = await getBlogPost(postId)

  if (!post) {
    notFound()
  }

  // Increment views (fire and forget)
  incrementPostViews(postId).catch(console.error)

  // Get related posts
  const { posts: allPosts } = await getBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.category === post.category && p.status === "published")
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            {/* Featured Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.read_time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{post.views} views</span>
                </div>
              </div>

              {/* Excerpt */}
              <div className="text-xl text-gray-700 mb-8 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                {post.excerpt}
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Sharing */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Share this story</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Author Bio */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">{post.author.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-4">
                  A passionate writer and advocate for African women's empowerment. Through her stories, she aims to
                  inspire and connect women across the continent and diaspora.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                    View Profile
                  </a>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                    More Articles
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Stories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Don't Miss Our Latest Stories</h2>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to read inspiring stories from African women around the
              world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-amber-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

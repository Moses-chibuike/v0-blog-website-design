import Link from "next/link"
import { ArrowRight, Search, Filter } from "lucide-react"
import { getBlogPosts } from "@/lib/blog-service"

export default async function BlogPage() {
  const { posts, source } = await getBlogPosts()
  const publishedPosts = posts.filter((post) => post.status === "published")

  const categories = Array.from(new Set(publishedPosts.map((post) => post.category)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Stories</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover inspiring stories, insights, and experiences from African women making a difference worldwide.
            </p>
            {source !== "supabase" && (
              <div className="mt-4 text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-lg inline-block">
                {source === "localStorage" ? "Using local data" : "Using demo data"} -
                <Link href="/admin/setup" className="underline ml-1">
                  Set up database
                </Link>
              </div>
            )}
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search stories..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white">
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Featured Post */}
          {publishedPosts.length > 0 && publishedPosts.find((post) => post.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Story</h2>
              {(() => {
                const featuredPost = publishedPosts.find((post) => post.featured)!
                return (
                  <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={featuredPost.image || "/placeholder.svg"}
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {featuredPost.category}
                          </span>
                          <span className="text-sm text-gray-500">{featuredPost.read_time}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-500">{new Date(featuredPost.date).toLocaleDateString()}</span>
                          </div>
                          <Link
                            href={`/blog/${featuredPost.id}`}
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                          >
                            Read Full Story
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })()}
            </div>
          )}

          {/* All Posts Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Stories</h2>
            {publishedPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No stories yet</h3>
                <p className="text-gray-600 mb-4">Be the first to share an inspiring story.</p>
                <Link
                  href="/admin/new-post"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200"
                >
                  Create First Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{post.author}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{post.read_time}</span>
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest stories and updates from our community of inspiring African women delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

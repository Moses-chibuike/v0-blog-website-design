import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Calendar, Clock, User, Eye } from "lucide-react"

// Sample blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Breaking Free from Limitations: Your Journey to Transformation",
    excerpt:
      "Discover how to overcome the barriers that hold you back and unlock your true potential through purpose-driven transformation.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-15",
    readTime: "7 min read",
    category: "Personal Growth",
    author: "Dr. Michael Johnson",
    views: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "From Struggle to Success: The Power of Mindset Transformation",
    excerpt:
      "Learn how shifting your mindset can turn your greatest challenges into your most powerful stepping stones.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Professional Development",
    author: "Sarah Williams",
    views: 2100,
    featured: true,
  },
  {
    id: 3,
    title: "Living with Purpose: Aligning Your Life with Your Higher Calling",
    excerpt:
      "Explore how to discover and live according to your deeper purpose, creating impact that extends beyond yourself.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Spirituality & Purpose",
    author: "Rev. David Chen",
    views: 1800,
    featured: true,
  },
  {
    id: 4,
    title: "Building Resilience in Times of Change",
    excerpt:
      "Develop the mental and emotional strength to navigate life's inevitable changes with grace and confidence.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-08",
    readTime: "5 min read",
    category: "Personal Growth",
    author: "Dr. Michael Johnson",
    views: 980,
    featured: false,
  },
  {
    id: 5,
    title: "The Art of Effective Communication in Leadership",
    excerpt: "Master the communication skills that separate good leaders from great ones and inspire lasting change.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Professional Development",
    author: "Sarah Williams",
    views: 1650,
    featured: false,
  },
  {
    id: 6,
    title: "Finding Peace in a Chaotic World",
    excerpt: "Discover practical strategies for maintaining inner peace and spiritual balance amid life's storms.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-01-03",
    readTime: "4 min read",
    category: "Spirituality & Purpose",
    author: "Rev. David Chen",
    views: 1420,
    featured: false,
  },
]

const categories = ["All", "Personal Growth", "Professional Development", "Spirituality & Purpose"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full uppercase tracking-wide mb-6">
              TRANSFORMATION BLOG
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Stories of <span className="text-green-600">Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover inspiring stories, practical insights, and transformational wisdom to help you unlock your
              potential and create lasting change.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`hover:shadow-lg transition-shadow overflow-hidden group ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">{post.category}</Badge>
                  </div>
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader className={index === 0 ? "p-8" : "p-6"}>
                  <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </div>
                  </div>
                  <CardTitle
                    className={`hover:text-green-600 transition-colors ${index === 0 ? "text-2xl mb-4" : "text-xl mb-3"}`}
                  >
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className={`leading-relaxed ${index === 0 ? "text-base" : "text-sm"}`}>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className={index === 0 ? "px-8 pb-8" : "px-6 pb-6"}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto text-green-600 font-semibold">
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">All Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white text-xs">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 hover:text-green-600 transition-colors mb-3">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto text-green-600 font-semibold text-sm">
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Story</h2>
          <p className="text-xl mb-8 text-green-100">
            Get the latest transformational insights delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 whitespace-nowrap">Subscribe</Button>
            </div>
            <p className="text-sm text-green-200 mt-4">Join 25,000+ readers. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

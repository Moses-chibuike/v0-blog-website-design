import Link from "next/link"
import { ArrowRight, Users, Award, Globe, Heart } from "lucide-react"
import { getBlogPosts } from "@/lib/blog-service"

export default async function HomePage() {
  const { posts: featuredPosts } = await getBlogPosts()
  const displayPosts = featuredPosts.filter((post) => post.featured && post.status === "published").slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=1080&fit=crop"
            alt="African woman leader"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/20 rounded-full blur-xl"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Celebrating
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                African Women
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover inspiring stories, celebrate achievements, and connect with a community of empowered African
              women making a difference worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 backdrop-blur-sm"
              >
                Explore Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">54</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover inspiring stories of African women who are making a difference in their communities and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
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

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200"
            >
              View All Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We believe in the power of storytelling to inspire, educate, and connect. Our platform serves as a bridge,
              bringing together African women from all walks of life to share their experiences, celebrate their
              achievements, and support one another in their journeys.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  Building a supportive network where African women can connect, share, and grow together.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Celebrating achievements and inspiring others to pursue their dreams with passion and determination.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Empowerment</h3>
                <p className="text-gray-600">
                  Providing resources, inspiration, and opportunities for African women to thrive in all aspects of
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Community</h2>
            <p className="text-xl text-amber-100 mb-8">
              Be part of a movement that celebrates African women and creates opportunities for growth, connection, and
              empowerment. Your story matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                Share Your Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-200"
              >
                Explore Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

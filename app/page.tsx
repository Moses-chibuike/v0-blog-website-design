import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Zap, Award, Target } from "lucide-react"
import HeroSlider from "@/components/hero-slider"

export default function HomePage() {
  const featuredPosts = [
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
    },
  ]

  const stats = [
    { label: "Lives Transformed", value: "1000+", icon: Heart },
    { label: "Monthly Readers", value: "25K+", icon: Users },
    { label: "Success Stories", value: "500+", icon: Award },
    { label: "Countries Reached", value: "15+", icon: Target },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              At AlaoMe Transformation, we go beyond conventional methods to facilitate deep, meaningful change. We
              believe that true transformation isn't just about improvement—it's about reimagining what's possible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-4">Personalized Mentorship</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-base leading-relaxed">
                  Our unique approach combines personalized mentorship with innovative strategies, ensuring that each
                  journey is tailored to your unique needs and aspirations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-4">Holistic Growth</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-base leading-relaxed">
                  We focus on growth that empowers you to break free from limitations and unlock your full potential
                  through wisdom, creativity, and purpose-driven strategies.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-4">Partners in Journey</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-base leading-relaxed">
                  We are not just mentors, we are partners in your journey, dedicated to fostering lasting change that
                  leaves an enduring impact for His glory.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Articles</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Discover our most impactful content covering personal growth, professional development, and
              transformational stories that inspire change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center text-xs text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 hover:text-green-600 transition-colors group-hover:text-green-600">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <Button asChild variant="link" className="p-0 h-auto text-green-600 font-semibold">
                    <Link href={`/blog/${post.id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Life Today</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed">
              Join thousands of individuals on their transformation journey. Get weekly insights, success stories, and
              practical strategies delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                />
                <Button className="bg-green-500 hover:bg-green-600 px-8 py-4 font-medium whitespace-nowrap shadow-lg">
                  Start Transforming
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-4">Join our community of transformation. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

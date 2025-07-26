import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Zap, Star, Award, Target, Mail, Check, BookOpen, TrendingUp, Sparkles } from "lucide-react"

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

  const features = [
    {
      icon: Heart,
      title: "Personalized Mentorship",
      description: "Our unique approach combines personalized mentorship with innovative strategies, tailored to your unique needs and aspirations.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Holistic Growth",
      description: "Focus on growth that empowers you to break free from limitations and unlock your full potential through wisdom and creativity.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Partners in Journey",
      description: "We are partners in your journey, dedicated to fostering lasting change that leaves an enduring impact for His glory.",
      gradient: "from-emerald-500 to-teal-500"
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Full Image with Glass Overlay */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Full background image covering entire hero section */}
        <div className="absolute inset-0">
          {/* Fallback background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <div className="text-white text-8xl font-bold opacity-50">A</div>
          </div>
          
          {/* Image overlay - full coverage */}
          <Image
            src="/images/alao.jpg"
            alt="Alao - Transformation Coach"
            fill
            className="object-cover object-center relative z-10"
            priority
            sizes="100vw"
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 z-20"></div>
        </div>
        
        {/* Glassmorphism text overlay positioned on the right side */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="px-8 lg:px-16 lg:pr-20 max-w-2xl">
            {/* Glass background card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
              {/* Main Heading */}
              <div className="mb-8">
                <h2 className="text-center text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  Transform Your Life
                </h2>
                <p className="text-center text-lg text-white/90 leading-relaxed">
                  Discover powerful stories of change, growth, and purpose. At AlaoMe Transformation, we go beyond self-improvement—we ignite a reimagining of what’s possible. Be inspired to break free from limitations, embrace your path, and lead a life of meaning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Glass Cards */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white relative">
        <div className="container px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Modern Cards with Gradients */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 rounded-full text-emerald-300 text-sm mb-8 border border-emerald-500/30">
              <Star className="w-4 h-4 mr-2" />
              What Sets Us Apart
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              At AlaoMe Transformation, we go beyond conventional methods to facilitate deep, meaningful change. 
              We believe that true transformation isn't just about improvement—it's about reimagining what's possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section - Modern Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-100 rounded-full text-emerald-700 text-sm mb-8 border border-emerald-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Featured Content
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Latest <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Discover our most impactful content covering personal growth, professional development, and
              transformational stories that inspire change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg bg-white/80 backdrop-blur-sm transform hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-emerald-700 text-sm rounded-full font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center text-sm text-slate-500 mb-4 font-medium">
                    <span>{post.date}</span>
                    <span className="mx-3">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-2 hover:text-emerald-600 transition-colors group-hover:text-emerald-600 leading-tight">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <CardDescription className="text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <Button asChild variant="link" className="p-0 h-auto text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Modern Glassmorphism */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-8 shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Transform Your <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Life Today</span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Join thousands of individuals on their transformation journey. Get weekly insights, success stories, and
                practical strategies delivered to your inbox.
              </p>

              <div className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/90 backdrop-blur-sm shadow-lg font-medium"
                  />
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-4 rounded-2xl whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                    Start Transforming
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">Free weekly insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">Unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

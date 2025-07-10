import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Zap, Star, Award, Target, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      id: 1,
      title: "Transform Your Life with Purpose",
      subtitle: "Discover Your True Potential",
      description: "Join thousands who have broken free from limitations and unlocked their full potential through our transformative approach.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Start Your Journey",
      ctaLink: "/blog"
    },
    {
      id: 2,
      title: "From Struggle to Success",
      subtitle: "Mindset Transformation",
      description: "Learn how shifting your mindset can turn your greatest challenges into your most powerful stepping stones.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Stories",
      ctaLink: "/blog"
    },
    {
      id: 3,
      title: "Living with Purpose",
      subtitle: "Align with Your Higher Calling",
      description: "Discover and live according to your deeper purpose, creating impact that extends beyond yourself.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Find Your Purpose",
      ctaLink: "/about"
    },
    {
      id: 4,
      title: "Personalized Growth Journey",
      subtitle: "Tailored Mentorship",
      description: "Experience personalized mentorship and innovative strategies designed specifically for your unique aspirations.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Get Started",
      ctaLink: "/about"
    }
  ]

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

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
              </div>
              
              <div className="relative h-full flex items-center">
                <div className="container section-padding">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-caption mb-6">
                      <Star className="w-4 h-4 mr-2" />
                      {slide.subtitle}
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white btn-lg shadow-lg">
                        <Link href={slide.ctaLink}>
                          {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-white/30 text-white hover:bg-white hover:text-slate-900 bg-transparent btn-lg"
                      >
                        <Link href="/about">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
          <span className="font-medium">{currentSlide + 1}</span>
          <span className="mx-1 opacity-70">/</span>
          <span className="opacity-70">{heroSlides.length}</span>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="content-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full text-green-600 text-caption mb-8">
              <Star className="w-4 h-4 mr-2" />
              Welcome to AlaoMeBlog
            </div>
            <h2 className="text-display font-bold mb-6">Transforming Lives, Differently</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              At AlaoMe Transformation, we believe that true change comes from within. Our mission is to guide you 
              through a journey of self-discovery, empowerment, and purposeful living that creates lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-xs bg-slate-50 border-b">
        <div className="container">
          <div className="grid-responsive-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-heading font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-body text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed">
              At AlaoMe Transformation, we go beyond conventional methods to facilitate deep, meaningful change. We
              believe that true transformation isn't just about improvement—it's about reimagining what's possible.
            </p>
          </div>
          <div className="grid-responsive">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Personalized Mentorship</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  Our unique approach combines personalized mentorship with innovative strategies, ensuring that each
                  journey is tailored to your unique needs and aspirations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Holistic Growth</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  We focus on growth that empowers you to break free from limitations and unlock your full potential
                  through wisdom, creativity, and purpose-driven strategies.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Partners in Journey</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  We are not just mentors, we are partners in your journey, dedicated to fostering lasting change that
                  leaves an enduring impact for His glory.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">Featured Articles</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed">
              Discover our most impactful content covering personal growth, professional development, and
              transformational stories that inspire change.
            </p>
          </div>
          <div className="grid-responsive">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-caption rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="card-padding">
                  <div className="flex items-center text-caption text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-subheading line-clamp-2 hover:text-green-600 transition-colors group-hover:text-green-600">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="card-padding pt-0">
                  <CardDescription className="text-body line-clamp-3 mb-6 leading-relaxed">
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
            <Button asChild size="lg" variant="outline" className="btn-lg bg-transparent">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <div className="content-center">
            <h2 className="text-display font-bold mb-6">Transform Your Life Today</h2>
            <p className="text-body-lg text-slate-300 mb-12 leading-relaxed">
              Join thousands of individuals on their transformation journey. Get weekly insights, success stories, and
              practical strategies delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-body"
                />
                <Button className="bg-green-500 hover:bg-green-600 btn-lg whitespace-nowrap shadow-lg">
                  Start Transforming
                </Button>
              </div>
              <p className="text-caption text-slate-400 mt-4">
                Join our community of transformation. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
        }

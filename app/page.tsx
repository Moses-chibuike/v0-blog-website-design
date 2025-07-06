import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Crown, Users, Zap, Star, Award, Target } from "lucide-react"

export default function HomePage() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Power of African Women in Leadership",
      excerpt:
        "Exploring how African women are breaking barriers and leading change across the continent and diaspora, from boardrooms to grassroots movements.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-15",
      readTime: "7 min read",
      category: "Leadership",
    },
    {
      id: 2,
      title: "Celebrating African Fashion and Cultural Heritage",
      excerpt:
        "From traditional textiles to modern runway shows, discover how African women are preserving and innovating cultural fashion traditions.",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "Culture & Fashion",
    },
    {
      id: 3,
      title: "Entrepreneurship: African Women Building Empires",
      excerpt:
        "Meet the inspiring African women entrepreneurs who are creating businesses, jobs, and opportunities across various industries.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Entrepreneurship",
    },
  ]

  const stats = [
    { label: "Stories Shared", value: "500+", icon: Crown },
    { label: "Women Inspired", value: "25K+", icon: Users },
    { label: "Countries Reached", value: "54", icon: Target },
    { label: "Community Members", value: "10K+", icon: Award },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with African-inspired design */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white overflow-hidden">
        {/* Organic shapes inspired by Adesuwa design */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-400 rounded-full opacity-10 transform -translate-x-16 translate-y-16"></div>

        <div className="relative container section-padding">
          <div className="content-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 text-caption mb-8">
              <Star className="w-4 h-4 mr-2" />
              Celebrating African Women's Excellence
            </div>
            <h1 className="text-hero font-bold mb-8 leading-tight">
              Welcome to <span className="text-primary-400">Adesuwa</span>
            </h1>
            <p className="text-body-lg mb-12 text-secondary-300 leading-relaxed content-narrow">
              Discover inspiring stories of African women who are breaking barriers, preserving culture, and creating
              change across the continent and diaspora. Join our community celebrating strength, wisdom, and beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white btn-lg shadow-lg">
                <Link href="/blog">
                  Explore Stories <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-secondary-900 bg-transparent btn-lg"
              >
                <Link href="/about">Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-xs bg-white border-b">
        <div className="container">
          <div className="grid-responsive-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-heading font-bold text-secondary-900 mb-2">{stat.value}</div>
                <div className="text-body text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">Empowering African Women</h2>
            <p className="text-body-lg text-secondary-600 leading-relaxed">
              At Adesuwa, we celebrate the diverse experiences, achievements, and wisdom of African women. Our platform
              amplifies voices, shares stories, and builds connections across the global African diaspora.
            </p>
          </div>
          <div className="grid-responsive">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Crown className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Cultural Heritage</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  Preserving and celebrating the rich cultural traditions, languages, and customs that define African
                  women's identity across the continent and diaspora.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Leadership & Innovation</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  Highlighting African women who are leading change in business, politics, technology, and social
                  movements, inspiring the next generation of leaders.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Community & Sisterhood</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  Building bridges between African women worldwide, fostering connections, mentorship, and collaborative
                  opportunities for growth and empowerment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">Featured Stories</h2>
            <p className="text-body-lg text-secondary-600 leading-relaxed">
              Discover inspiring stories of African women making a difference in their communities and beyond.
            </p>
          </div>
          <div className="grid-responsive">
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
                    <span className="px-3 py-1 bg-primary-600 text-white text-caption rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="card-padding">
                  <div className="flex items-center text-caption text-secondary-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-subheading line-clamp-2 hover:text-primary-600 transition-colors group-hover:text-primary-600">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="card-padding pt-0">
                  <CardDescription className="text-body line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <Button asChild variant="link" className="p-0 h-auto text-primary-600 font-semibold">
                    <Link href={`/blog/${post.id}`}>
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-lg bg-transparent border-primary-500 text-primary-600 hover:bg-primary-50"
            >
              <Link href="/blog">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
        <div className="container">
          <div className="content-center">
            <h2 className="text-display font-bold mb-6">Join Our Sisterhood</h2>
            <p className="text-body-lg text-secondary-300 mb-12 leading-relaxed">
              Connect with inspiring African women worldwide. Get weekly stories, cultural insights, and empowerment
              content delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-body"
                />
                <Button className="bg-primary-500 hover:bg-primary-600 btn-lg whitespace-nowrap shadow-lg">
                  Join Community
                </Button>
              </div>
              <p className="text-caption text-secondary-400 mt-4">
                Join thousands of African women worldwide. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

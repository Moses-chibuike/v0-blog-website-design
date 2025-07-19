import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Handshake, Globe } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=120&width=120",
      bio: "John is a visionary leader passionate about empowering individuals to achieve their full potential.",
    },
    {
      name: "Jane Smith",
      role: "Lead Coach",
      image: "/placeholder.svg?height=120&width=120",
      bio: "Jane specializes in mindset transformation and helps clients break through limiting beliefs.",
    },
    {
      name: "Peter Jones",
      role: "Content Strategist",
      image: "/placeholder.svg?height=120&width=120",
      bio: "Peter crafts compelling content that inspires and guides our community on their journey.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* About Header Section with Background Image */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540569014015-b1167a797a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Hands reaching out to help"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container px-4 text-center text-white z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">About Us</h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Learn about our mission, values, and the dedicated team behind AlaoMeBlog.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">Our Mission</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed">
              At AlaoMeBlog, our mission is to empower individuals to unlock their full potential and live
              purpose-driven lives. We believe in fostering holistic growth through insightful content, personalized
              guidance, and a supportive community.
            </p>
          </div>
          <div className="grid-responsive">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Empowerment</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  We provide the tools and knowledge for you to take control of your journey and achieve lasting change.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Handshake className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Community</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  Join a vibrant community of like-minded individuals supporting each other's growth and transformation.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="card-padding">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-subheading mb-4">Global Impact</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-sm">
                <CardDescription className="text-body leading-relaxed">
                  Our vision extends globally, aiming to inspire transformation across diverse cultures and communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">Meet Our Team</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed">
              Our dedicated team of experts is committed to guiding you on your journey to personal and professional
              excellence.
            </p>
          </div>
          <div className="grid-responsive">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="card-padding flex flex-col items-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mb-6 object-cover"
                  />
                  <CardTitle className="text-subheading mb-2">{member.name}</CardTitle>
                  <CardDescription className="text-body text-green-600 font-medium mb-4">{member.role}</CardDescription>
                  <CardDescription className="text-body leading-relaxed">{member.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <div className="content-center">
            <h2 className="text-display font-bold mb-6">Ready to Start Your Transformation?</h2>
            <p className="text-body-lg text-slate-300 mb-12 leading-relaxed">
              Connect with us today to learn more about how AlaoMeBlog can support your growth journey.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

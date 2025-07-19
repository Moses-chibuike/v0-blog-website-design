import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Target, Award, ArrowRight, CheckCircle, Star } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Growth",
      description:
        "We believe transformation happens through understanding, empathy, and genuine care for each individual's unique journey.",
    },
    {
      icon: Target,
      title: "Purpose-Driven Impact",
      description:
        "Every strategy, every story, and every interaction is designed to create meaningful, lasting change that extends beyond the individual.",
    },
    {
      icon: Users,
      title: "Community Connection",
      description:
        "We foster a supportive community where individuals can share experiences, learn from each other, and grow together.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description:
        "We are committed to providing the highest quality content, mentorship, and resources to support your transformation journey.",
    },
  ]

  const achievements = [
    { number: "1000+", label: "Lives Transformed" },
    { number: "25K+", label: "Monthly Readers" },
    { number: "500+", label: "Success Stories" },
    { number: "15+", label: "Countries Reached" },
  ]

  const teamMembers = [
    {
      name: "AlaoMe",
      role: "Founder & Lead Transformation Coach",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "With over a decade of experience in personal development and spiritual growth, AlaoMe has dedicated their life to helping others break free from limitations and discover their true purpose.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about-bg.jpg" alt="About Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About AlaoMe Transformation</h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            We stand out by redefining the way personal and professional growth is approached. Our commitment to
            Transforming Lives, Differently means we go beyond conventional methods to facilitate deep, meaningful
            change.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full text-green-800 text-sm mb-8">
              <Star className="w-4 h-4 mr-2" />
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Transforming Lives, Differently</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              At AlaoMe Transformation, we believe that true change comes from within. Our mission is to empower
              individuals to break free from the limitations that hold them back and unlock their full potential through
              purpose-driven transformation. We don't just offer advice—we walk alongside you on your journey to
              becoming the person you were meant to be.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Empower</h3>
                <p className="text-gray-600">We empower individuals to take control of their transformation journey</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transform</h3>
                <p className="text-gray-600">We facilitate deep, meaningful change that lasts a lifetime</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-gray-600">We create ripple effects that extend beyond the individual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we approach transformation work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <value.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect the lives we've touched and the transformations we've facilitated
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Founder</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">The visionary behind AlaoMe Transformation</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="aspect-square relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-green-600 font-semibold mb-6">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-8">{member.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Certified Life Coach
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        10+ Years Experience
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Published Author
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join thousands of individuals who have already started their transformation journey with us. Your
            breakthrough is just one step away.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
            >
              <Link href="/blog">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 bg-transparent px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

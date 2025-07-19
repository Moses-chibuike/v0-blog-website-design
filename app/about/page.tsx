import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about-bg.jpg" alt="About Us Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story & Mission</h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            At AlaoMeBlog, we are passionate about empowering individuals to achieve their fullest potential and live a
            life of purpose.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=500&width=700&text=Our+Team"
              alt="Our Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AlaoMeBlog was founded on the belief that everyone has the capacity for extraordinary growth and
              transformation. We are a team of dedicated writers, coaches, and personal development enthusiasts
              committed to sharing valuable insights and practical strategies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our content is meticulously crafted to inspire, educate, and equip you with the tools you need to navigate
              life's challenges, achieve your goals, and cultivate a deeper sense of purpose and well-being.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <Link href="/blog">Read Our Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md border-none">
              <CardHeader className="flex flex-col items-center pb-4">
                <Lightbulb className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl font-bold text-gray-800">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We empower individuals with knowledge and tools to take control of their personal and professional
                  lives.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md border-none">
              <CardHeader className="flex flex-col items-center pb-4">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl font-bold text-gray-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We foster a supportive community where individuals can share, learn, and grow together.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md border-none">
              <CardHeader className="flex flex-col items-center pb-4">
                <Heart className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl font-bold text-gray-800">Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in the power of authenticity and encourage living a life true to oneself.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Transformation Journey</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Ready to take the next step in your personal and professional development? Explore our blog or connect with
            us today.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/subscribe">Subscribe</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

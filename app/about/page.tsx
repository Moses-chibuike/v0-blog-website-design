import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Lightbulb, Users, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about-bg.jpg" alt="Hands reaching out to help" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">About AlaoMeBlog</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Our mission is to empower individuals to achieve profound personal and professional transformation through
            purpose-driven insights and practical wisdom.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-slate-50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-display font-bold mb-6">Our Mission</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed mb-6">
              At AlaoMeBlog, we believe that true transformation comes from within, guided by purpose and fueled by
              insight. Our mission is to provide a sanctuary of wisdom, offering actionable strategies and inspiring
              stories that empower you to break free from limitations and unlock your full potential.
            </p>
            <p className="text-body text-slate-700 leading-relaxed">
              We are dedicated to fostering holistic growth—mind, body, and spirit—helping you align your life with your
              higher calling and create a lasting impact for His glory.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="content-center mb-16">
            <h2 className="text-display font-bold mb-6">Our Core Values</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed">
              These principles guide everything we do, from the content we create to the community we build.
            </p>
          </div>
          <div className="grid-responsive">
            <div className="text-center p-6 md:p-8 bg-slate-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-subheading font-semibold mb-3">Purpose-Driven</h3>
              <p className="text-body text-slate-600">
                Every piece of content is crafted to inspire and guide you towards a life of deeper meaning and impact.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 bg-slate-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-subheading font-semibold mb-3">Insightful</h3>
              <p className="text-body text-slate-600">
                We provide well-researched, thought-provoking articles that offer fresh perspectives and actionable
                wisdom.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 bg-slate-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-subheading font-semibold mb-3">Community-Focused</h3>
              <p className="text-body text-slate-600">
                We foster a supportive environment where individuals can connect, share, and grow together.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 bg-slate-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-subheading font-semibold mb-3">Continuous Growth</h3>
              <p className="text-body text-slate-600">
                We are committed to lifelong learning and encourage our readers to embrace their own journey of
                self-improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container content-center">
          <h2 className="text-display font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-body-lg text-green-100 mb-12 leading-relaxed">
            Join our community and start your journey towards a more purposeful and fulfilling life today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-green-50 text-green-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
          >
            <Link href="/blog">Explore Articles</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Zap, Award, Star, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About AlaoMe</h1>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AlaoMe Transformation is an independent organization with a simple but powerful mission: to transform
              lives by investing in resilience, courage, and untapped potential.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by Oluseyi IfeanyiChukwu Alao, AlaoMe Transformation was born from a personal journey of
              overcoming challenges and discovering the power of purpose-driven change.
            </p>

            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 leading-relaxed">
              We provide transformational content, personal growth insights, and practical strategies to help
              individuals unlock their true potential and create meaningful impact in their lives and communities.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-badge mb-8">ABOUT US</div>
            <h1 className="text-display mb-6">We Are An Independent Organization</h1>
            <p className="text-body-lg text-gray-600 leading-relaxed">
              AlaoMe Transformation is an independent organization with a simple but powerful mission: to transform
              lives by investing in resilience, courage, and untapped potential. AlaoMe Transformation is an Extension
              of AlaoMe Transformation Inspired by the personal journey of its founder, Oluseyi IfeanyiChukwu Alao.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="section-badge mb-8">OUR FOUNDATION</div>
            <h2 className="text-display mb-6">Built on Purpose</h2>
            <p className="text-body-lg text-gray-600 leading-relaxed">
              At AlaoMe Transformation, we believe that true transformation isn't just about improvement—it's about
              reimagining what's possible and aligning every step with a higher purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "Our mission is to ignite profound personal and professional growth by guiding individuals through a transformative journey. We empower people to overcome challenges, reach their fullest potential, and create success stories that reflect a higher purpose.",
              },
              {
                icon: Star,
                title: "Our Vision",
                description:
                  "We envision a world where transformation goes beyond improvement—it's a reimagining of what's possible. We inspire individuals to break free from limitations, embrace their unique paths, and lead with purpose, leaving a lasting impact for His glory.",
              },
              {
                icon: Zap,
                title: "Our Purpose",
                description:
                  "Our purpose is to be a catalyst for extraordinary change. We encourage people to shift their mindsets, unlock their true potential, and lead impactful lives through personalized mentorship and innovative strategies, turning their stories into testimonies of purpose and excellence.",
              },
            ].map((item, index) => (
              <Card key={index} className="alaome-card text-center">
                <CardHeader className="p-8">
                  <div className="mx-auto w-16 h-16 bg-alaome-beige rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-alaome-green" />
                  </div>
                  <CardTitle className="text-xl mb-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="leading-relaxed text-gray-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-8">WHAT MAKES US DIFFERENT</div>
            <h2 className="text-display mb-6">Holistic Transformation</h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our unique approach combines personalized mentorship with innovative strategies, ensuring that each
              journey is tailored to the individual's unique needs and aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-heading mb-8">Holistic Focus on Growth</h3>
              <div className="space-y-8">
                {[
                  {
                    icon: Heart,
                    title: "Personalized Approach",
                    description:
                      "Every journey is tailored to your unique needs, challenges, and aspirations, ensuring meaningful and lasting change.",
                  },
                  {
                    icon: Award,
                    title: "Purpose-Driven Strategies",
                    description:
                      "We guide you through challenges with wisdom, creativity, and strategies aligned with your higher purpose.",
                  },
                  {
                    icon: Users,
                    title: "Partners in Your Journey",
                    description:
                      "We are not just mentors—we are partners dedicated to fostering lasting change that leaves an enduring impact.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-alaome-beige rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-alaome-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Transformation Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="section-badge mb-8">LEADERSHIP</div>
              <h2 className="text-display mb-6">Meet Our Founder</h2>
              <p className="text-body-lg text-gray-600">The visionary behind AlaoMe Transformation</p>
            </div>

            <Card className="alaome-card overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 bg-alaome-beige p-12 flex flex-col items-center justify-center">
                    <div className="aspect-square relative rounded-2xl overflow-hidden mb-8 w-64 shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Oluseyi IfeanyiChukwu Alao"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3">Oluseyi IfeanyiChukwu Alao</h3>
                      <Badge className="bg-alaome-green text-white px-4 py-2 font-medium">Founder & CEO</Badge>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-12">
                    <h3 className="text-heading mb-8">My Transformation Story</h3>
                    <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        Oluseyi IfeanyiChukwu Alao's journey began with a bold leap—a solo migration to New York City
                        eight years ago. Raised by his grandparents after losing both parents at a young age, Oluseyi
                        had already learned the weight of responsibility, but nothing could prepare him for the immense
                        challenges of adjusting to life in a new country.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Between juggling long hours at multiple jobs, finishing business school, and providing financial
                        support for his son, grandmother, and extended family back home, his resilience was constantly
                        tested. Oluseyi took his life lessons and began sharing them, creating transformative content
                        centered around personal growth, self-love, relationships, and spirituality.
                      </p>
                      <p className="text-lg leading-relaxed">
                        In less than a year, his social media following grew from 900 to 5,000, and what started as
                        sharing his story became a thriving mentorship and coaching practice. The turning point came
                        with a profound personal loss—the mysterious death of his best friend, his beloved grandmother
                        and one of his Aunts who raised him.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Struggling with depression and numbing the pain with alcohol, Oluseyi realized he needed a
                        transformation. He made a courageous decision: he quit his two dead-end jobs, went back to
                        school full-time, and began focusing on personal growth. This shift didn't just change his
                        life—it became the foundation of his future success.
                      </p>
                      <p className="text-lg leading-relaxed font-semibold text-alaome-green">
                        Today, Oluseyi is the Founder and CEO of AlaoMe Transformation, a program that reaches
                        individuals across multiple countries, helping them transform their lives and unlock their true
                        potential.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

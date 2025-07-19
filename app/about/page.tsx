import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Zap, Award, Star, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AlaoMe Transformation</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We stand out by redefining the way personal and professional growth is approached. Our commitment to
            Transforming Lives, Differently means we go beyond conventional methods to facilitate deep, meaningful
            change.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Foundation</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At AlaoMe Transformation, we believe that true transformation isn't just about improvement—it's about
              reimagining what's possible and aligning every step with a higher purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left">
                  Our mission is to ignite profound personal and professional growth by guiding individuals through a
                  transformative journey. We empower people to overcome challenges, reach their fullest potential, and
                  create success stories that reflect a higher purpose.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left">
                  We envision a world where transformation goes beyond improvement—it's a reimagining of what's
                  possible. We inspire individuals to break free from limitations, embrace their unique paths, and lead
                  with purpose, leaving a lasting impact for His glory.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Our Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left">
                  Our purpose is to be a catalyst for extraordinary change. We encourage people to shift their mindsets,
                  unlock their true potential, and lead impactful lives through personalized mentorship and innovative
                  strategies, turning their stories into testimonies of purpose and excellence.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our unique approach combines personalized mentorship with innovative strategies, ensuring that each
              journey is tailored to the individual's unique needs and aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Holistic Focus on Growth</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personalized Approach</h4>
                    <p className="text-slate-600">
                      Every journey is tailored to your unique needs, challenges, and aspirations, ensuring meaningful
                      and lasting change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Purpose-Driven Strategies</h4>
                    <p className="text-slate-600">
                      We guide you through challenges with wisdom, creativity, and strategies aligned with your higher
                      purpose.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Partners in Your Journey</h4>
                    <p className="text-slate-600">
                      We are not just mentors—we are partners dedicated to fostering lasting change that leaves an
                      enduring impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founder</h2>
              <p className="text-lg text-slate-600">The visionary behind AlaoMe Transformation</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="aspect-square relative rounded-lg overflow-hidden mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Oluseyi IfeanyiChukwu Alao"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">Oluseyi IfeanyiChukwu Alao</h3>
                      <Badge variant="secondary" className="mb-4">
                        Founder & CEO
                      </Badge>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-6">My Story</h3>
                    <div className="prose prose-lg max-w-none space-y-4 text-slate-600">
                      <p>
                        Oluseyi IfeanyiChukwu Alao's journey began with a bold leap—a solo migration to New York City
                        eight years ago. Raised by his grandparents after losing both parents at a young age, Oluseyi
                        had already learned the weight of responsibility, but nothing could prepare him for the immense
                        challenges of adjusting to life in a new country.
                      </p>
                      <p>
                        Between juggling long hours at multiple jobs, finishing business school, and providing financial
                        support for his son, grandmother, and extended family back home, his resilience was constantly
                        tested. Oluseyi took his life lessons and began sharing them, creating transformative content
                        centered around personal growth, self-love, relationships, and spirituality.
                      </p>
                      <p>
                        In less than a year, his social media following grew from 900 to 5,000, and what started as
                        sharing his story became a thriving mentorship and coaching practice. The turning point came
                        with a profound personal loss—the mysterious death of his best friend, his beloved grandmother
                        and one of his Aunts who raised him.
                      </p>
                      <p>
                        Struggling with depression and numbing the pain with alcohol, Oluseyi realized he needed a
                        transformation. He made a courageous decision: he quit his two dead-end jobs, went back to
                        school full-time, and began focusing on personal growth. This shift didn't just change his
                        life—it became the foundation of his future success.
                      </p>
                      <p className="font-semibold text-slate-900">
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

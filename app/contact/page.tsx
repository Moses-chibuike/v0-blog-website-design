import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container section-padding-sm">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-badge mb-8">CONTACT US</div>
            <h1 className="text-display mb-6">Get in Touch</h1>
            <p className="text-body-lg text-gray-600 leading-relaxed">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you and be part of your
              transformation journey.
            </p>
          </div>
        </div>
      </section>

      <div className="container section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="alaome-card">
            <CardHeader className="p-8">
              <div className="section-badge mb-4 w-fit">SEND MESSAGE</div>
              <CardTitle className="text-heading">Start the Conversation</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-8 pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-base font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="py-3 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-base font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="py-3 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="py-3 border-gray-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-base font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="py-3 border-gray-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <Button className="w-full btn-alaome-primary py-4 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="alaome-card">
              <CardHeader className="p-8">
                <div className="section-badge mb-4 w-fit">CONTACT INFO</div>
                <CardTitle className="text-subheading">Reach Out to Us</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Connect with us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 p-8 pt-0">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    details: ["hello@alaomeblog.com", "support@alaomeblog.com"],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    details: ["+1 (555) 123-4567"],
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    details: ["123 Transformation Street", "New York, NY 10001", "United States"],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: ["Monday - Friday: 9:00 AM - 6:00 PM EST", "Saturday - Sunday: Closed"],
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-alaome-beige rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-alaome-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="alaome-card">
              <CardHeader className="p-8">
                <CardTitle className="text-subheading">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8 pt-0">
                {[
                  {
                    question: "How often do you publish new articles?",
                    answer:
                      "We publish 2-3 new transformational articles every week, covering various topics in personal growth, professional development, and spiritual purpose.",
                  },
                  {
                    question: "Can I contribute to your blog?",
                    answer:
                      "Yes! We welcome guest contributions from individuals with transformational stories and insights. Please reach out to us with your article ideas.",
                  },
                  {
                    question: "Do you offer personal coaching services?",
                    answer:
                      "We offer personalized mentorship and coaching services. Contact us to discuss your specific transformation goals and how we can support your journey.",
                  },
                ].map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

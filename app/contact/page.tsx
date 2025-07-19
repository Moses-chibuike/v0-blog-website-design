import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative container px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Get in Touch</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to
            reach out.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 shadow-lg border-0">
            <CardHeader className="mb-6">
              <CardTitle className="text-3xl font-bold mb-2">Send Us a Message</CardTitle>
              <CardDescription className="text-slate-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject of your message"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold shadow-md"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 lg:mt-12">
            <div className="flex items-start gap-4">
              <Mail className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                <p className="text-slate-600">info@alaomeblog.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                <p className="text-slate-600">123 Transformation Ave, Suite 456, City, State 12345</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* Placeholder for social media icons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-slate-300 text-slate-600 hover:bg-green-100 hover:text-green-700 bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-slate-300 text-slate-600 hover:bg-green-100 hover:text-green-700 bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 2.8-2.3 3.5-5.7 2.3-9-1.7 1.7-4.9 2.7-7.8 1.5 1.5 2.4 4.1 4 7 4.1-.9 4.6-4.4 9.5-8.3 12.7-11.7 1.9-14.7-5.7-11.7-4.6z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-slate-300 text-slate-600 hover:bg-green-100 hover:text-green-700 bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-slate-300 text-slate-600 hover:bg-green-100 hover:text-green-700 bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

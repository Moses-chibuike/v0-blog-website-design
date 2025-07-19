"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Header */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question about our services, need support, or just want to
            say hello, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" className="py-3 px-4" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" className="py-3 px-4" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input id="subject" type="text" placeholder="Inquiry about coaching" className="py-3 px-4" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea id="message" rows={5} placeholder="Type your message here..." className="py-3 px-4" />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 lg:mt-12">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                <p className="text-gray-600">info@alaomeblog.com</p>
                <p className="text-gray-600">support@alaomeblog.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon - Fri, 9 AM - 5 PM EST</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-600">123 Transformation Ave</p>
                <p className="text-gray-600">Suite 400, Metamorph City, TX 78701</p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2060000000003!2d-73.9878589!3d40.7484409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30e2d1d%3A0x1a2b3c4d5e6f7a8b!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

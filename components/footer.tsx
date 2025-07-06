import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold font-serif">Adesuwa</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Celebrating the strength, beauty, and achievements of African women across the globe. Join our community
              of empowered women making a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog?category=leadership" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/blog?category=fashion" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Fashion & Culture
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=entrepreneurship"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link href="/blog?category=motherhood" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Motherhood
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>hello@adesuwa.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+234 (0) 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adesuwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

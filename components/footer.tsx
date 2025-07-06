import Link from "next/link"
import { Crown, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Crown className="h-10 w-10 text-primary-400" />
              <span className="text-2xl font-bold">Adesuwa</span>
            </Link>
            <p className="text-secondary-400 mb-8 text-body leading-relaxed">
              Celebrating African Women's Excellence. Empowering voices, sharing stories, and building connections
              across the global African diaspora through inspiring content and community.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-primary-400 hover:bg-secondary-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-primary-400 hover:bg-secondary-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-primary-400 hover:bg-secondary-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-primary-400 hover:bg-secondary-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-subheading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-secondary-400 hover:text-white transition-colors text-body">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-400 hover:text-white transition-colors text-body">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-400 hover:text-white transition-colors text-body">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-400 hover:text-white transition-colors text-body">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-subheading font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/blog" className="text-secondary-400 hover:text-white transition-colors text-body">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-400 hover:text-white transition-colors text-body">
                  Culture & Fashion
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-400 hover:text-white transition-colors text-body">
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-400 hover:text-white transition-colors text-body">
                  Inspiration
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-subheading font-semibold mb-6">Stay Connected</h3>
            <p className="text-secondary-400 mb-6 text-body leading-relaxed">
              Get inspiring stories and cultural insights delivered to your inbox weekly.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white text-body"
              />
              <button className="px-4 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors text-body font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-16 pt-8 text-center">
          <p className="text-secondary-400 text-body">&copy; 2024 Adesuwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

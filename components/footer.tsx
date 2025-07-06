import Link from "next/link"
import { Heart, Twitter, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Heart className="h-10 w-10 text-green-400" />
              <span className="text-2xl font-bold">AlaoMeBlog</span>
            </Link>
            <p className="text-slate-400 mb-8 text-body leading-relaxed">
              Transforming Lives, Differently. Empowering individuals worldwide with purpose-driven content, personal
              growth insights, and transformational stories.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-slate-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-slate-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-slate-700 transition-colors"
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
                <Link href="/" className="text-slate-400 hover:text-white transition-colors text-body">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-body">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-body">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-body">
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
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-body">
                  Personal Growth
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-body">
                  Professional Development
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-body">
                  Spirituality & Purpose
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-body">
                  Transformation Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-subheading font-semibold mb-6">Stay Updated</h3>
            <p className="text-slate-400 mb-6 text-body leading-relaxed">
              Get the latest articles and tutorials delivered to your inbox weekly.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white text-body"
              />
              <button className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-body font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center">
          <p className="text-slate-400 text-body">&copy; 2024 TechBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

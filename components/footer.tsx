import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 border-t border-slate-200">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="col-span-full md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-600 mb-4">
            <Heart className="h-7 w-7" />
            <span>AlaoMeBlog</span>
          </Link>
          <p className="text-slate-600 leading-relaxed text-sm">
            Empowering your journey of personal and professional transformation through purpose-driven insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h3>
          <nav className="space-y-2">
            <Link href="/" className="block text-slate-600 hover:text-green-600 transition-colors text-sm">
              Home
            </Link>
            <Link href="/blog" className="block text-slate-600 hover:text-green-600 transition-colors text-sm">
              Blog
            </Link>
            <Link href="/about" className="block text-slate-600 hover:text-green-600 transition-colors text-sm">
              About
            </Link>
            <Link href="/contact" className="block text-slate-600 hover:text-green-600 transition-colors text-sm">
              Contact
            </Link>
            <Link href="/admin" className="block text-slate-600 hover:text-green-600 transition-colors text-sm">
              Admin
            </Link>
          </nav>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Categories</h3>
          <nav className="space-y-2">
            <Link
              href="/blog?category=Personal Growth"
              className="block text-slate-600 hover:text-green-600 transition-colors text-sm"
            >
              Personal Growth
            </Link>
            <Link
              href="/blog?category=Professional Development"
              className="block text-slate-600 hover:text-green-600 transition-colors text-sm"
            >
              Professional Development
            </Link>
            <Link
              href="/blog?category=Spirituality & Purpose"
              className="block text-slate-600 hover:text-green-600 transition-colors text-sm"
            >
              Spirituality & Purpose
            </Link>
            <Link
              href="/blog?category=Technology"
              className="block text-slate-600 hover:text-green-600 transition-colors text-sm"
            >
              Technology
            </Link>
            <Link
              href="/blog?category=Sustainability"
              className="block text-slate-600 hover:text-green-600 transition-colors text-sm"
            >
              Sustainability
            </Link>
          </nav>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Connect</h3>
          <address className="not-italic text-slate-600 text-sm space-y-2">
            <p>123 Transformation Ave, Suite 456</p>
            <p>City, State 12345</p>
            <p>Email: info@alaomeblog.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </address>
          <div className="flex gap-4 mt-6">
            <Link href="#" className="text-slate-600 hover:text-green-600 transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-green-600 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-green-600 transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-green-600 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container text-center text-slate-500 text-sm mt-12 pt-8 border-t border-slate-200">
        &copy; {new Date().getFullYear()} AlaoMeBlog. All rights reserved.
      </div>
    </footer>
  )
}

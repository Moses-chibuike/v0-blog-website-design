import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-12 text-gray-700">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-600">
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
              className="h-7 w-7"
            >
              <path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 5.002a5 5 0 1 1 7.5 7.57Z" />
            </svg>
            AlaoMeBlog
          </Link>
          <p className="text-sm text-gray-600">Empowering your journey of personal and professional transformation.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-green-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-gray-600 hover:text-green-600 transition-colors">
                Admin
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/blog?category=Personal%20Growth"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Personal Growth
              </Link>
            </li>
            <li>
              <Link
                href="/blog?category=Professional%20Development"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Professional Development
              </Link>
            </li>
            <li>
              <Link
                href="/blog?category=Spirituality%20%26%20Purpose"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Spirituality & Purpose
              </Link>
            </li>
            <li>
              <Link
                href="/blog?category=Transformation%20Stories"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Transformation Stories
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Email: info@alaomeblog.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Transformation Ave, Metamorph City, TX 78701</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} AlaoMeBlog. All rights reserved.</p>
      </div>
    </footer>
  )
}

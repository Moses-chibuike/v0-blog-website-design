import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-12 text-slate-600">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-slate-900 mb-4">AlaoMeBlog</h3>
          <p className="text-body leading-relaxed mb-4">
            Empowering your journey to personal and professional transformation. Discover insights, stories, and
            strategies for a purpose-driven life.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-slate-500 hover:text-green-600 transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-slate-500 hover:text-green-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-slate-500 hover:text-green-600 transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-slate-500 hover:text-green-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Contact Us</h4>
          <p className="text-body mb-2">123 Transformation Ave, Suite 400</p>
          <p className="text-body mb-2">Purpose City, PC 56789</p>
          <p className="text-body mb-2">Email: info@alaomeblog.com</p>
          <p className="text-body">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="container border-t border-slate-200 mt-8 pt-8 text-center text-caption">
        © {new Date().getFullYear()} AlaoMeBlog. All rights reserved.
      </div>
    </footer>
  )
}

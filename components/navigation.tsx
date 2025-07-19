"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-green-600">
          <Heart className="h-6 w-6" />
          <span>AlaoMeBlog</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-green-600 ${
              pathname === "/" ? "text-green-600" : "text-slate-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors hover:text-green-600 ${
              pathname.startsWith("/blog") ? "text-green-600" : "text-slate-600"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-green-600 ${
              pathname === "/about" ? "text-green-600" : "text-slate-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-green-600 ${
              pathname === "/contact" ? "text-green-600" : "text-slate-600"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/admin"
            className={`text-sm font-medium transition-colors hover:text-green-600 ${
              pathname.startsWith("/admin") ? "text-green-600" : "text-slate-600"
            }`}
          >
            Admin
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Subscribe
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 py-6">
              <Link
                href="/"
                className={`text-lg font-medium ${pathname === "/" ? "text-green-600" : "text-slate-700"}`}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`text-lg font-medium ${pathname.startsWith("/blog") ? "text-green-600" : "text-slate-700"}`}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className={`text-lg font-medium ${pathname === "/about" ? "text-green-600" : "text-slate-700"}`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-lg font-medium ${pathname === "/contact" ? "text-green-600" : "text-slate-700"}`}
              >
                Contact
              </Link>
              <Link
                href="/admin"
                className={`text-lg font-medium ${pathname.startsWith("/admin") ? "text-green-600" : "text-slate-700"}`}
              >
                Admin
              </Link>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-lg font-medium">
                Subscribe
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Adesuwa - Celebrating African Women",
  description:
    "A platform celebrating the strength, beauty, and achievements of African women across the globe. Discover inspiring stories, fashion, culture, and empowerment.",
  keywords: "African women, empowerment, fashion, culture, leadership, entrepreneurship, inspiration",
  authors: [{ name: "Adesuwa Team" }],
  openGraph: {
    title: "Adesuwa - Celebrating African Women",
    description: "A platform celebrating the strength, beauty, and achievements of African women across the globe.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adesuwa - Celebrating African Women",
    description: "A platform celebrating the strength, beauty, and achievements of African women across the globe.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

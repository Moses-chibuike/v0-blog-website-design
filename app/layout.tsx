import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AlaoMe Blog - Transforming Lives",
  description: "Personal growth and transformation blog",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-green-600 p-4">
          <div className="container mx-auto">
            <h1 className="text-white text-2xl font-bold">AlaoMe Blog</h1>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

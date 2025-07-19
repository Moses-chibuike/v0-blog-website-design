"use client"

import { Separator } from "@/components/ui/separator"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { testSupabaseConnection } from "@/lib/supabase-test"

export default function AdminSetupPage() {
  const [connectionStatus, setConnectionStatus] = useState<string | null>(null)
  const [seedStatus, setSeedStatus] = useState<string | null>(null)

  const handleTestConnection = async () => {
    setConnectionStatus("Testing connection...")
    const result = await testSupabaseConnection()
    setConnectionStatus(result.message)
  }

  const handleSeedData = async () => {
    setSeedStatus("Seeding data...")
    try {
      // This part would typically involve server actions or API routes to run SQL scripts
      // For demonstration, we'll simulate adding initial posts via blogService
      // In a real scenario, you'd run the SQL scripts directly on your database.

      // Clear existing data in local storage for a clean re-seed if using local storage
      if (typeof window !== "undefined") {
        localStorage.removeItem("blog-posts")
      }

      // Re-initialize blogDataManager to load initial data or empty state
      // This is a fallback for local storage. For Supabase, you'd run SQL.
      // const manager = new BlogDataManager();
      // manager.loadPosts(); // This would load initialPosts if local storage is empty

      // For Supabase, you'd typically run the SQL seed script.
      // Since we can't directly execute SQL from a client component,
      // we'll assume the SQL scripts are run separately or via a server action.
      // For now, we'll just confirm the database should be ready.
      setSeedStatus("Data seeding initiated (requires running SQL scripts). Verify your database is seeded.")
    } catch (error: any) {
      setSeedStatus(`Failed to seed data: ${error.message}`)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-6 shadow-lg">
          <CardHeader className="mb-6">
            <CardTitle className="text-3xl font-bold mb-2">Admin Setup & Tools</CardTitle>
            <CardDescription className="text-slate-600">
              Manage your blog's database connection and data.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Supabase Connection</h3>
              <Button
                onClick={handleTestConnection}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md"
              >
                Test Supabase Connection
              </Button>
              {connectionStatus && (
                <p
                  className={`mt-3 text-sm ${connectionStatus.includes("successful") ? "text-green-600" : "text-red-600"}`}
                >
                  {connectionStatus}
                </p>
              )}
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-3">Seed Initial Blog Data</h3>
              <p className="text-slate-600 mb-4">
                This will populate your database with initial blog posts.
                <br />
                **Important:** You need to run the SQL scripts (`scripts/create-blog-tables.sql`,
                `scripts/seed-blog-data.sql`, `scripts/create-view-increment-function.sql`,
                `scripts/seed-blog-data-with-images.sql`) directly in your Supabase SQL Editor for full setup.
              </p>
              <Button
                onClick={handleSeedData}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md"
              >
                Simulate Seed Data (Client-side)
              </Button>
              {seedStatus && (
                <p className={`mt-3 text-sm ${seedStatus.includes("successful") ? "text-green-600" : "text-red-600"}`}>
                  {seedStatus}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, CheckCircle, XCircle, Database } from "lucide-react"
import { testSupabaseConnection } from "@/lib/supabase-test"

export default function SetupPage() {
  const [testResult, setTestResult] = useState<{
    success: boolean
    error?: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const runConnectionTest = async () => {
    setIsLoading(true)
    const result = await testSupabaseConnection()
    setTestResult(result)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button asChild variant="outline">
            <Link href="/admin">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Database Setup</h1>
            <p className="text-slate-600">Configure your Supabase database connection</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Connection Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Database Connection Test
              </CardTitle>
              <CardDescription>Test your Supabase database connection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={runConnectionTest} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
                {isLoading ? "Testing..." : "Test Connection"}
              </Button>

              {testResult && (
                <Alert className={testResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                  {testResult.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription className={testResult.success ? "text-green-800" : "text-red-800"}>
                    {testResult.success ? (
                      <span>
                        <strong>Success!</strong> Database connection is working properly.
                      </span>
                    ) : (
                      <span>
                        <strong>Connection Failed:</strong> {testResult.error}
                      </span>
                    )}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Setup Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Setup Instructions</CardTitle>
              <CardDescription>Follow these steps to set up your database</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Add Supabase Integration</h3>
                    <p className="text-slate-600 text-sm">
                      Make sure the Supabase integration is added to your v0 project with the correct environment
                      variables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Run Database Scripts</h3>
                    <p className="text-slate-600 text-sm mb-2">
                      Execute the SQL scripts to create the database structure:
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4">
                      <li>• scripts/create-blog-tables.sql</li>
                      <li>• scripts/seed-blog-data.sql</li>
                      <li>• scripts/create-view-increment-function.sql</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Test Connection</h3>
                    <p className="text-slate-600 text-sm">
                      Use the "Test Connection" button above to verify everything is working.
                    </p>
                  </div>
                </div>
              </div>

              <Alert>
                <AlertDescription>
                  <strong>Need help?</strong> If you're having trouble, make sure:
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Your Supabase project is created and active</li>
                    <li>• Environment variables are properly set</li>
                    <li>• Database tables have been created</li>
                    <li>• Row Level Security policies are configured</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Environment Variables Check */}
          <Card>
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
              <CardDescription>Check if your environment variables are properly configured</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {process.env.NEXT_PUBLIC_SUPABASE_URL ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className="text-sm">NEXT_PUBLIC_SUPABASE_URL</span>
                </div>
                <div className="flex items-center gap-2">
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className="text-sm">NEXT_PUBLIC_SUPABASE_ANON_KEY</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

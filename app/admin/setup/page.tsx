"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Database, Play, ArrowLeft } from "lucide-react"
import { testSupabaseConnection, testSupabaseOperations } from "@/lib/supabase-test"
import { useRouter } from "next/navigation"

interface TestResult {
  success: boolean
  message: string
  [key: string]: any
}

export default function SetupPage() {
  const router = useRouter()
  const [connectionResult, setConnectionResult] = useState<TestResult | null>(null)
  const [operationsResult, setOperationsResult] = useState<TestResult | null>(null)
  const [testing, setTesting] = useState(false)

  const testConnection = async () => {
    setTesting(true)
    setConnectionResult(null)

    try {
      const result = await testSupabaseConnection()
      setConnectionResult(result)
    } catch (error) {
      setConnectionResult({
        success: false,
        message: `Connection test failed: ${error}`,
      })
    } finally {
      setTesting(false)
    }
  }

  const testOperations = async () => {
    setTesting(true)
    setOperationsResult(null)

    try {
      const result = await testSupabaseOperations()
      setOperationsResult(result)
    } catch (error) {
      setOperationsResult({
        success: false,
        message: `Operations test failed: ${error}`,
      })
    } finally {
      setTesting(false)
    }
  }

  const runAllTests = async () => {
    await testConnection()
    if (connectionResult?.success) {
      await testOperations()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button onClick={() => router.push("/admin")} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Admin
              </Button>
              <h1 className="text-3xl font-bold text-gray-900">Database Setup</h1>
            </div>
          </div>

          <div className="grid gap-6">
            {/* Setup Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="w-5 h-5" />
                  <span>Supabase Database Setup</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  This page helps you set up and test your Supabase database connection. Follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Make sure you have set up your Supabase project and obtained your URL and API key</li>
                  <li>Add your Supabase credentials to your environment variables</li>
                  <li>Run the database scripts to create tables and seed data</li>
                  <li>Test the connection using the buttons below</li>
                </ol>
              </CardContent>
            </Card>

            {/* Test Connection */}
            <Card>
              <CardHeader>
                <CardTitle>Test Database Connection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-4">
                  <Button onClick={testConnection} disabled={testing}>
                    <Database className="w-4 h-4 mr-2" />
                    {testing ? "Testing..." : "Test Connection"}
                  </Button>
                  <Button onClick={testOperations} disabled={testing || !connectionResult?.success}>
                    <Play className="w-4 h-4 mr-2" />
                    {testing ? "Testing..." : "Test Operations"}
                  </Button>
                  <Button onClick={runAllTests} disabled={testing} variant="outline">
                    Run All Tests
                  </Button>
                </div>

                {connectionResult && (
                  <Alert
                    className={connectionResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}
                  >
                    <div className="flex items-center space-x-2">
                      {connectionResult.success ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                      <AlertDescription className={connectionResult.success ? "text-green-800" : "text-red-800"}>
                        <strong>Connection Test:</strong> {connectionResult.message}
                      </AlertDescription>
                    </div>
                  </Alert>
                )}

                {operationsResult && (
                  <Alert
                    className={operationsResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}
                  >
                    <div className="flex items-center space-x-2">
                      {operationsResult.success ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                      <AlertDescription className={operationsResult.success ? "text-green-800" : "text-red-800"}>
                        <strong>Operations Test:</strong> {operationsResult.message}
                        {operationsResult.operations && (
                          <div className="mt-2 text-sm">
                            <p>Operations tested:</p>
                            <ul className="list-disc list-inside ml-4">
                              <li>Read: {operationsResult.operations.read ? "✓" : "✗"}</li>
                              <li>Create: {operationsResult.operations.create ? "✓" : "✗"}</li>
                              <li>Update: {operationsResult.operations.update ? "✓" : "✗"}</li>
                              <li>Delete: {operationsResult.operations.delete ? "✓" : "✗"}</li>
                            </ul>
                          </div>
                        )}
                      </AlertDescription>
                    </div>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Environment Variables */}
            <Card>
              <CardHeader>
                <CardTitle>Environment Variables</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Make sure you have the following environment variables set:</p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div>NEXT_PUBLIC_SUPABASE_URL=your_supabase_url</div>
                  <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key</div>
                </div>
              </CardContent>
            </Card>

            {/* Database Scripts */}
            <Card>
              <CardHeader>
                <CardTitle>Database Scripts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Run these scripts in your Supabase SQL editor to set up your database:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-mono text-sm">scripts/create-blog-tables.sql</span>
                    <span className="text-xs text-gray-500">Creates blog_posts table</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-mono text-sm">scripts/create-view-increment-function.sql</span>
                    <span className="text-xs text-gray-500">Creates view increment function</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-mono text-sm">scripts/seed-blog-data.sql</span>
                    <span className="text-xs text-gray-500">Seeds initial blog data</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fallback Information */}
            <Card>
              <CardHeader>
                <CardTitle>Fallback Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <Alert>
                  <AlertDescription>
                    <strong>Don't worry!</strong> If Supabase is not configured, the blog will automatically fall back
                    to:
                    <ul className="list-disc list-inside mt-2 ml-4">
                      <li>
                        <strong>localStorage</strong> - Your posts will be saved in the browser
                      </li>
                      <li>
                        <strong>Demo data</strong> - Sample posts will be displayed
                      </li>
                    </ul>
                    The blog works perfectly without a database for development and testing.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

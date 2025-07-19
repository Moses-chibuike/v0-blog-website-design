"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export default function AdminSetupPage() {
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState<string[]>([])

  const executeScript = async (scriptPath: string) => {
    setLoading(true)
    setOutput((prev) => [...prev, `Executing ${scriptPath}...`])
    try {
      const response = await fetch(`/api/execute-script?path=${scriptPath}`)
      const data = await response.json()
      if (response.ok) {
        setOutput((prev) => [...prev, `✅ ${scriptPath} executed successfully!`])
        if (data.message) {
          setOutput((prev) => [...prev, data.message])
        }
        toast({
          title: "Success",
          description: `${scriptPath} executed successfully.`,
        })
      } else {
        setOutput((prev) => [...prev, `❌ Error executing ${scriptPath}: ${data.error || "Unknown error"}`])
        toast({
          title: "Error",
          description: `Failed to execute ${scriptPath}. ${data.error || ""}`,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Failed to execute script:", error)
      setOutput((prev) => [...prev, `❌ Network error or script execution failed for ${scriptPath}.`])
      toast({
        title: "Error",
        description: `Network error or script execution failed for ${scriptPath}.`,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Admin Setup & Database Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600">
            Use these tools to set up your database tables and seed initial data.
            <br />
            <strong>Warning:</strong> Seeding data will insert new records. Running multiple times might create
            duplicate entries unless your scripts handle idempotency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => executeScript("/scripts/create-blog-tables.sql")}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? "Executing..." : "Create Blog Tables"}
            </Button>
            <Button
              onClick={() => executeScript("/scripts/create-view-increment-function.sql")}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? "Executing..." : "Create View Increment Function"}
            </Button>
            <Button
              onClick={() => executeScript("/scripts/seed-blog-data.sql")}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {loading ? "Executing..." : "Seed Initial Blog Data"}
            </Button>
            <Button
              onClick={() => executeScript("/scripts/seed-blog-data-with-images.sql")}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {loading ? "Executing..." : "Seed Blog Data with Images"}
            </Button>
            <Button
              onClick={() => executeScript("/scripts/update-blog-images.sql")}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {loading ? "Executing..." : "Update Blog Images"}
            </Button>
            <Button
              onClick={() => executeScript("/scripts/update-blog-content-transformation.sql")}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {loading ? "Executing..." : "Update Blog Content (Transformation)"}
            </Button>
          </div>

          {output.length > 0 && (
            <div className="mt-8 p-4 bg-gray-100 rounded-md max-h-60 overflow-y-auto text-sm text-gray-800">
              <h3 className="font-semibold mb-2">Script Output:</h3>
              {output.map((line, index) => (
                <p
                  key={index}
                  className={line.startsWith("❌") ? "text-red-600" : line.startsWith("✅") ? "text-green-600" : ""}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

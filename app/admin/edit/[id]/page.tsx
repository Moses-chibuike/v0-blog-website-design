"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, Eye, Upload, X } from "lucide-react"
import Link from "next/link"

interface EditPostPageProps {
  params: Promise<{ id: string }>
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const router = useRouter()
  const [postId, setPostId] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  // In a real app, you'd fetch the post data based on the ID
  const [formData, setFormData] = useState({
    title: "Getting Started with Modern Web Development",
    excerpt:
      "Learn the fundamentals of building modern web applications with the latest technologies and best practices.",
    content: `<p>Modern web development has evolved significantly over the past few years. With the introduction of new frameworks, tools, and best practices, developers now have more powerful ways to build robust, scalable applications.</p>

<h2>The Foundation: HTML, CSS, and JavaScript</h2>
<p>Before diving into modern frameworks, it's crucial to have a solid understanding of the web's foundational technologies.</p>`,
    category: "Web Development",
    tags: ["JavaScript", "React", "Web Development", "Frontend"],
    featuredImage: "/placeholder.svg?height=400&width=800",
    status: "published",
  })
  const [newTag, setNewTag] = useState("")

  const categories = ["Web Development", "Technology", "React", "Backend", "AI", "Sustainability", "Tutorial", "News"]

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params
      setPostId(resolvedParams.id)
      setIsLoading(false)

      // Here you would typically fetch the post data based on the ID
      // For now, we'll use the static data above
    }

    loadParams()
  }, [params])

  const handleSubmit = (status: "draft" | "published") => {
    console.log("Updating post:", { id: postId, ...formData, status })
    alert(`Post ${status === "published" ? "published" : "saved as draft"} successfully!`)
    router.push("/admin")
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      })
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p>Loading post...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/admin">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Edit Post #{postId}</h1>
              <p className="text-slate-600">Update your blog article</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleSubmit("draft")}>
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleSubmit("published")}>
              <Eye className="mr-2 h-4 w-4" />
              Update & Publish
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card>
              <CardHeader>
                <CardTitle>Post Title</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Enter your post title..."
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="text-lg"
                />
              </CardContent>
            </Card>

            {/* Excerpt */}
            <Card>
              <CardHeader>
                <CardTitle>Excerpt</CardTitle>
                <CardDescription>A brief summary of your post (used in previews)</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Write a compelling excerpt..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                />
              </CardContent>
            </Card>

            {/* Content */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Write your full article content</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Start writing your article..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={20}
                  className="font-mono"
                />
                <p className="text-sm text-slate-500 mt-2">
                  You can use HTML tags for formatting (h2, h3, p, ul, li, strong, em, etc.)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Image */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.featuredImage && (
                  <div className="aspect-video relative rounded-lg overflow-hidden border">
                    <img
                      src={formData.featuredImage || "/placeholder.svg"}
                      alt="Featured"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                  <p className="text-sm text-slate-600 mb-2">Upload new image</p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
                <Input
                  placeholder="Or enter image URL..."
                  value={formData.featuredImage}
                  onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                />
              </CardContent>
            </Card>

            {/* Category */}
            <Card>
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button onClick={addTag} size="sm">
                    Add
                  </Button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-1 hover:text-red-600">
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

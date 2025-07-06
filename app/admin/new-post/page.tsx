"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save } from "lucide-react"
import { createBlogPost } from "@/lib/blog-service"

const categoryImages = {
  Leadership: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop",
  "Fashion & Culture": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop",
  Entrepreneurship: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
  Motherhood: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
  Education: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
  "Health & Wellness": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
  Technology: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
  Heritage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop",
}

export default function NewPostPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    author: "",
    category: "",
    tags: "",
    status: "draft" as "draft" | "published",
    featured: false,
  })

  const handleCategoryChange = (category: string) => {
    setFormData({
      ...formData,
      category,
      image: formData.image || categoryImages[category as keyof typeof categoryImages] || "",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const newPost = await createBlogPost({
        ...formData,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        date: new Date().toISOString().split("T")[0],
        read_time: `${Math.ceil(formData.content.split(" ").length / 200)} min read`,
      })

      router.push("/admin")
    } catch (error) {
      console.error("Error creating post:", error)
      alert("Error creating post. Please try again.")
    } finally {
      setSaving(false)
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
              <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Post Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter post title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        placeholder="Brief description of the post"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Write your post content here..."
                        rows={15}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Post Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value: "draft" | "published") => setFormData({ ...formData, status: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                      />
                      <Label htmlFor="featured">Featured Post</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Post Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        placeholder="Author name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={handleCategoryChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Leadership">Leadership</SelectItem>
                          <SelectItem value="Fashion & Culture">Fashion & Culture</SelectItem>
                          <SelectItem value="Entrepreneurship">Entrepreneurship</SelectItem>
                          <SelectItem value="Motherhood">Motherhood</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Health & Wellness">Health & Wellness</SelectItem>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Heritage">Heritage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="tags">Tags</Label>
                      <Input
                        id="tags"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                        placeholder="tag1, tag2, tag3"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image">Featured Image URL</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="https://example.com/image.jpg"
                        required
                      />
                      {formData.image && (
                        <div className="mt-2">
                          <img
                            src={formData.image || "/placeholder.svg"}
                            alt="Preview"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" className="w-full" disabled={saving}>
                  <Save className="w-4 h-4 mr-2" />
                  {saving ? "Creating..." : "Create Post"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

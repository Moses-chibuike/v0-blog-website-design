"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { blogService } from "@/lib/blog-service"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import type { BlogPost } from "@/lib/supabase"

export default function NewPostPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<Omit<BlogPost, "id" | "views" | "created_at" | "updated_at">>({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    image: "",
    category: "Personal Growth", // Default category
    read_time: "",
    date: new Date().toISOString().split("T")[0], // Default to current date
    featured: false,
    status: "draft", // Default status
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await blogService.createPost(formData)
      toast({
        title: "Success",
        description: "New blog post created successfully!",
      })
      router.push("/admin")
    } catch (error) {
      console.error("Failed to create post:", error)
      toast({
        title: "Error",
        description: "Failed to create post. Please try again.",
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
          <CardTitle className="text-2xl font-bold">Create New Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={10}
              />
            </div>
            <div>
              <Label htmlFor="author">Author</Label>
              <Input id="author" name="author" value={formData.author} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                value={formData.image || ""}
                onChange={handleChange}
                placeholder="e.g., /images/my-post-image.jpg"
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                name="category"
                value={formData.category}
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Personal Growth">Personal Growth</SelectItem>
                  <SelectItem value="Professional Development">Professional Development</SelectItem>
                  <SelectItem value="Spirituality & Purpose">Spirituality & Purpose</SelectItem>
                  <SelectItem value="Transformation Stories">Transformation Stories</SelectItem>
                  <SelectItem value="Mindset">Mindset</SelectItem>
                  <SelectItem value="Success Stories">Success Stories</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="read_time">Read Time (e.g., "5 min read")</Label>
              <Input id="read_time" name="read_time" value={formData.read_time} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="date">Date (YYYY-MM-DD)</Label>
              <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                name="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => handleCheckboxChange("featured", checked as boolean)}
              />
              <Label htmlFor="featured">Featured Post</Label>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                name="status"
                value={formData.status}
                onValueChange={(value) => handleSelectChange("status", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 text-white">
              {loading ? "Creating..." : "Create Post"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

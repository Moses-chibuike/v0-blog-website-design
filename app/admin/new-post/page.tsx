import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { blogService } from "@/lib/blog-service"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewPostPage() {
  async function createPost(formData: FormData) {
    "use server"

    const title = formData.get("title") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const image = formData.get("image") as string
    const category = formData.get("category") as string
    const tags = (formData.get("tags") as string).split(",").map((tag) => tag.trim())
    const status = formData.get("status") as "published" | "draft"
    const featured = formData.get("featured") === "on"

    try {
      await blogService.createPost({
        title,
        excerpt,
        content,
        image,
        category,
        tags,
        status,
        featured,
        author: "AlaoMe", // Default author
        read_time: "5 min read", // Default read time
      })
      revalidatePath("/admin")
      revalidatePath("/blog")
      revalidatePath("/")
      redirect("/admin")
    } catch (error) {
      console.error("Failed to create post:", error)
      // In a real app, you'd handle this error more gracefully, e.g., show a toast
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>

        <Card className="p-6 shadow-lg">
          <CardHeader className="mb-6">
            <CardTitle className="text-3xl font-bold mb-2">Create New Blog Post</CardTitle>
            <CardDescription className="text-slate-600">Fill in the details to create a new blog post.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={createPost} className="space-y-6">
              <div>
                <Label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <Label htmlFor="excerpt" className="block text-sm font-medium text-slate-700 mb-2">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <Label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-2">
                  Content (HTML)
                </Label>
                <Textarea
                  id="content"
                  name="content"
                  rows={10}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <Label htmlFor="image" className="block text-sm font-medium text-slate-700 mb-2">
                  Image URL
                </Label>
                <Input
                  id="image"
                  name="image"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <Label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                  Category
                </Label>
                <Select name="category" defaultValue="Personal Growth">
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Personal Growth">Personal Growth</SelectItem>
                    <SelectItem value="Professional Development">Professional Development</SelectItem>
                    <SelectItem value="Spirituality & Purpose">Spirituality & Purpose</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Sustainability">Sustainability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tags" className="block text-sm font-medium text-slate-700 mb-2">
                  Tags (comma-separated)
                </Label>
                <Input
                  id="tags"
                  name="tags"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <Label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-2">
                  Status
                </Label>
                <Select name="status" defaultValue="draft">
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="featured" name="featured" className="h-5 w-5 text-green-600 focus:ring-green-500" />
                <Label htmlFor="featured" className="text-sm font-medium text-slate-700">
                  Featured Post
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold shadow-md"
              >
                Create Post
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

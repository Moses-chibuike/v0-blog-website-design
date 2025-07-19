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

interface EditPostPageProps {
  params: { id: string }
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const postId = Number.parseInt(params.id)
  const post = await blogService.getPostById(postId)

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-4 text-sm sm:text-base">The post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/admin">Back to Admin Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  async function updatePost(formData: FormData) {
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
      await blogService.updatePost(postId, {
        title,
        excerpt,
        content,
        image,
        category,
        tags,
        status,
        featured,
      })
      revalidatePath("/admin")
      revalidatePath(`/blog/${postId}`)
      redirect("/admin")
    } catch (error) {
      console.error("Failed to update post:", error)
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
            <CardTitle className="text-3xl font-bold mb-2">Edit Blog Post</CardTitle>
            <CardDescription className="text-slate-600">Update the details of your blog post.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={updatePost} className="space-y-6">
              <div>
                <Label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={post.title}
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
                  defaultValue={post.excerpt}
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
                  defaultValue={post.content}
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
                  defaultValue={post.image}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <Label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                  Category
                </Label>
                <Select name="category" defaultValue={post.category}>
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
                  defaultValue={post.tags.join(", ")}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <Label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-2">
                  Status
                </Label>
                <Select name="status" defaultValue={post.status}>
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
                <Checkbox
                  id="featured"
                  name="featured"
                  defaultChecked={post.featured}
                  className="h-5 w-5 text-green-600 focus:ring-green-500"
                />
                <Label htmlFor="featured" className="text-sm font-medium text-slate-700">
                  Featured Post
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold shadow-md"
              >
                Update Post
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

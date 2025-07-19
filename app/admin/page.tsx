import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogService } from "@/lib/blog-service"
import { format } from "date-fns"
import { Pencil, Trash2, Eye, PlusCircle, Settings } from "lucide-react"
import { revalidatePath } from "next/cache"

export default async function AdminDashboardPage() {
  const posts = await blogService.getAllPosts()
  const stats = await blogService.getStats()

  async function deletePost(formData: FormData) {
    "use server"
    const id = Number.parseInt(formData.get("id") as string)
    await blogService.deletePost(id)
    revalidatePath("/admin")
    revalidatePath("/blog")
    revalidatePath("/")
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md">
              <Link href="/admin/new-post">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Post
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
            >
              <Link href="/admin/setup">
                <Settings className="mr-2 h-4 w-4" />
                Setup
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-5 shadow-sm">
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-lg font-semibold text-slate-700">Total Posts</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-slate-900">{stats.totalPosts}</div>
            </CardContent>
          </Card>
          <Card className="p-5 shadow-sm">
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-lg font-semibold text-slate-700">Published</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-slate-900">{stats.publishedPosts}</div>
            </CardContent>
          </Card>
          <Card className="p-5 shadow-sm">
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-lg font-semibold text-slate-700">Drafts</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-slate-900">{stats.draftPosts}</div>
            </CardContent>
          </Card>
          <Card className="p-5 shadow-sm">
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-lg font-semibold text-slate-700">Total Views</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-slate-900">{stats.totalViews}</div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts Table */}
        <Card className="shadow-lg">
          <CardHeader className="p-6 border-b border-slate-200">
            <CardTitle className="text-2xl font-bold">All Blog Posts</CardTitle>
            <CardDescription className="text-slate-600">Manage your blog content.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                    >
                      Featured
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                    >
                      Views
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-slate-900">{post.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-900">{post.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge className={post.status === "published" ? "bg-green-500" : "bg-yellow-500"}>
                          {post.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge variant={post.featured ? "default" : "secondary"}>{post.featured ? "Yes" : "No"}</Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{post.views}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {post.created_at ? format(new Date(post.created_at), "MMM dd, yyyy") : "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <Button asChild variant="ghost" size="icon" className="text-slate-600 hover:text-green-600">
                            <Link href={`/blog/${post.id}`}>
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Link>
                          </Button>
                          <Button asChild variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600">
                            <Link href={`/admin/edit/${post.id}`}>
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Link>
                          </Button>
                          <form action={deletePost}>
                            <input type="hidden" name="id" value={post.id} />
                            <Button
                              type="submit"
                              variant="ghost"
                              size="icon"
                              className="text-slate-600 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

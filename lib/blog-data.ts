"use client"

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: string
  author: string
  category: string
  tags: string[]
  status: "published" | "draft"
  featured: boolean
  views: number
}

// Initial blog posts data
const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Modern Web Development",
    excerpt:
      "Learn the fundamentals of building modern web applications with the latest technologies and best practices. This comprehensive guide covers everything from setting up your development environment to deploying your first application.",
    content: `<p>Modern web development has evolved significantly over the past few years. With the introduction of new frameworks, tools, and best practices, developers now have more powerful ways to build robust, scalable applications.</p>
      
      <h2>The Foundation: HTML, CSS, and JavaScript</h2>
      <p>Before diving into modern frameworks, it's crucial to have a solid understanding of the web's foundational technologies. HTML provides structure, CSS handles presentation, and JavaScript adds interactivity.</p>
      
      <h2>Modern JavaScript Frameworks</h2>
      <p>Today's web development landscape is dominated by powerful JavaScript frameworks like React, Vue.js, and Angular. These frameworks provide:</p>
      <ul>
        <li>Component-based architecture</li>
        <li>State management solutions</li>
        <li>Virtual DOM for better performance</li>
        <li>Rich ecosystem of tools and libraries</li>
      </ul>`,
    image: "/placeholder.svg?height=300&width=600",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "John Doe",
    category: "Web Development",
    tags: ["JavaScript", "React", "Web Development", "Frontend"],
    status: "published",
    featured: true,
    views: 1250,
  },
  {
    id: 2,
    title: "The Future of Digital Transformation",
    excerpt:
      "Exploring how businesses are adapting to the digital age and what it means for the future of work. We dive deep into emerging trends and technologies that are reshaping industries.",
    content: `<p>Digital transformation is no longer a buzzword—it's a necessity for businesses looking to stay competitive in today's rapidly evolving marketplace.</p>
      
      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.</p>`,
    image: "/placeholder.svg?height=300&width=600",
    date: "2024-01-12",
    readTime: "8 min read",
    author: "Jane Smith",
    category: "Technology",
    tags: ["Digital Transformation", "Business", "Technology"],
    status: "published",
    featured: true,
    views: 890,
  },
  {
    id: 3,
    title: "Building Sustainable Tech Solutions",
    excerpt:
      "How technology can be leveraged to create positive environmental and social impact in our communities. Learn about green coding practices and sustainable development approaches.",
    content: `<p>As developers, we have a responsibility to consider the environmental impact of the software we create.</p>
      
      <h2>Green Coding Practices</h2>
      <p>Writing efficient code isn't just about performance—it's also about reducing energy consumption and carbon footprint.</p>`,
    image: "/placeholder.svg?height=300&width=600",
    date: "2024-01-10",
    readTime: "6 min read",
    author: "Mike Johnson",
    category: "Sustainability",
    tags: ["Sustainability", "Green Tech", "Environment"],
    status: "draft",
    featured: false,
    views: 0,
  },
]

// Blog data management
class BlogDataManager {
  private posts: BlogPost[] = []
  private nextId = 1

  constructor() {
    this.loadPosts()
  }

  private loadPosts() {
    if (typeof window !== "undefined") {
      const savedPosts = localStorage.getItem("blog-posts")
      if (savedPosts) {
        this.posts = JSON.parse(savedPosts)
        this.nextId = Math.max(...this.posts.map((p) => p.id), 0) + 1
      } else {
        this.posts = initialPosts
        this.nextId = Math.max(...this.posts.map((p) => p.id), 0) + 1
        this.savePosts()
      }
    }
  }

  private savePosts() {
    if (typeof window !== "undefined") {
      localStorage.setItem("blog-posts", JSON.stringify(this.posts))
    }
  }

  getAllPosts(): BlogPost[] {
    return [...this.posts]
  }

  getPublishedPosts(): BlogPost[] {
    return this.posts.filter((post) => post.status === "published")
  }

  getFeaturedPosts(): BlogPost[] {
    return this.posts.filter((post) => post.status === "published" && post.featured)
  }

  getPostById(id: number): BlogPost | undefined {
    return this.posts.find((post) => post.id === id)
  }

  createPost(postData: Omit<BlogPost, "id" | "views" | "date">): BlogPost {
    const newPost: BlogPost = {
      ...postData,
      id: this.nextId++,
      views: 0,
      date: new Date().toISOString().split("T")[0],
    }

    this.posts.unshift(newPost) // Add to beginning of array
    this.savePosts()
    return newPost
  }

  updatePost(id: number, postData: Partial<BlogPost>): BlogPost | null {
    const index = this.posts.findIndex((post) => post.id === id)
    if (index === -1) return null

    this.posts[index] = { ...this.posts[index], ...postData }
    this.savePosts()
    return this.posts[index]
  }

  deletePost(id: number): boolean {
    const index = this.posts.findIndex((post) => post.id === id)
    if (index === -1) return false

    this.posts.splice(index, 1)
    this.savePosts()
    return true
  }

  getStats() {
    return {
      totalPosts: this.posts.length,
      publishedPosts: this.posts.filter((p) => p.status === "published").length,
      draftPosts: this.posts.filter((p) => p.status === "draft").length,
      totalViews: this.posts.reduce((sum, post) => sum + post.views, 0),
    }
  }
}

// Create singleton instance
export const blogDataManager = new BlogDataManager()

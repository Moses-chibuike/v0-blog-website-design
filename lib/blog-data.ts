import type { BlogPost } from "./supabase"

// This is a mock data manager for client-side use.
// In a real application, you would fetch this data from a backend service.
class BlogDataManager {
  private posts: BlogPost[] = []

  constructor() {
    // Initialize with some mock data or fetch from local storage/session storage
    this.posts = [
      {
        id: 1,
        title: "Breaking Free from Limitations: Your Journey to Transformation",
        excerpt: "Discover how to overcome the barriers that hold you back and unlock your true potential...",
        content: "Full content for Breaking Free from Limitations...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Personal+Growth",
        category: "Personal Growth",
        read_time: "7 min read",
        date: "2024-01-15",
        featured: true,
        status: "published",
        views: 1200,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 2,
        title: "From Struggle to Success: The Power of Mindset Transformation",
        excerpt:
          "Learn how shifting your mindset can turn your greatest challenges into your most powerful stepping...",
        content: "Full content for From Struggle to Success...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Professional+Development",
        category: "Professional Development",
        read_time: "8 min read",
        date: "2024-01-12",
        featured: true,
        status: "published",
        views: 1500,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 3,
        title: "Living with Purpose: Aligning Your Life with Your Higher Calling",
        excerpt: "Explore how to discover and live according to your deeper purpose, creating impact that...",
        content: "Full content for Living with Purpose...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Spirituality+&amp;+Purpose",
        category: "Spirituality & Purpose",
        read_time: "6 min read",
        date: "2024-01-10",
        featured: true,
        status: "published",
        views: 1000,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 4,
        title: "The Art of Effective Communication",
        excerpt: "Master the skills to communicate clearly and persuasively in any situation.",
        content: "Full content for The Art of Effective Communication...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Communication",
        category: "Professional Development",
        read_time: "10 min read",
        date: "2024-01-08",
        featured: false,
        status: "published",
        views: 800,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 5,
        title: "Mindfulness for Modern Living",
        excerpt: "Integrate mindfulness practices into your daily routine for reduced stress and increased focus.",
        content: "Full content for Mindfulness for Modern Living...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Mindfulness",
        category: "Personal Growth",
        read_time: "7 min read",
        date: "2024-01-05",
        featured: false,
        status: "published",
        views: 950,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 6,
        title: "Building Resilient Teams",
        excerpt: "Strategies for fostering strong, adaptable teams in a rapidly changing world.",
        content: "Full content for Building Resilient Teams...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Teamwork",
        category: "Professional Development",
        read_time: "12 min read",
        date: "2024-01-01",
        featured: false,
        status: "published",
        views: 1100,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 7,
        title: "The Power of Gratitude",
        excerpt: "Cultivate an attitude of gratitude to enhance your well-being and outlook on life.",
        content: "Full content for The Power of Gratitude...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Gratitude",
        category: "Spirituality & Purpose",
        read_time: "5 min read",
        date: "2023-12-28",
        featured: false,
        status: "published",
        views: 700,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 8,
        title: "Goal Setting for Success",
        excerpt: "Learn effective techniques to set and achieve your personal and professional goals.",
        content: "Full content for Goal Setting for Success...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Goals",
        category: "Personal Growth",
        read_time: "9 min read",
        date: "2023-12-20",
        featured: false,
        status: "published",
        views: 900,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 9,
        title: "Navigating Career Transitions",
        excerpt: "Expert advice for successfully changing careers or advancing in your current field.",
        content: "Full content for Navigating Career Transitions...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Career",
        category: "Professional Development",
        read_time: "11 min read",
        date: "2023-12-15",
        featured: false,
        status: "published",
        views: 1050,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 10,
        title: "Finding Inner Peace in a Chaotic World",
        excerpt: "Practical steps to cultivate tranquility and balance amidst life's demands.",
        content: "Full content for Finding Inner Peace...",
        author: "AlaoMeBlog Team",
        image: "/placeholder.svg?height=300&width=400&text=Peace",
        category: "Spirituality & Purpose",
        read_time: "8 min read",
        date: "2023-12-10",
        featured: false,
        status: "published",
        views: 850,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]
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
}

export const blogDataManager = new BlogDataManager()

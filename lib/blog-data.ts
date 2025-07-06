export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  read_time: string
  author: string
  category: string
  tags: string[]
  status: "draft" | "published"
  featured: boolean
  views: number
  created_at: string
  updated_at: string
}

export const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Empowering African Women in Leadership",
    excerpt:
      "Celebrating the remarkable achievements of African women who are breaking barriers and leading change across various industries and communities.",
    content: `
      <p>African women have always been pillars of strength in their communities, but today, they are increasingly taking center stage in leadership roles across various sectors. From boardrooms to political offices, from tech startups to social enterprises, African women are making their mark and inspiring the next generation.</p>

      <h2>Breaking Traditional Barriers</h2>
      <p>For centuries, traditional structures have limited women's participation in leadership roles. However, the tide is turning as more African women challenge these norms and create new pathways for success. They are not just breaking glass ceilings; they are reconstructing entire systems to be more inclusive and equitable.</p>

      <h2>Leading by Example</h2>
      <p>Today's African women leaders are characterized by their resilience, innovation, and commitment to community development. They understand that true leadership is not just about personal success, but about lifting others as they climb. This philosophy has led to the creation of mentorship programs, women's networks, and initiatives that support the next generation of female leaders.</p>

      <h2>The Ripple Effect</h2>
      <p>When African women lead, entire communities benefit. Studies have shown that women in leadership positions tend to prioritize education, healthcare, and social welfare – areas that have direct impacts on community well-being. Their leadership style often emphasizes collaboration, empathy, and sustainable development.</p>

      <h2>Challenges and Opportunities</h2>
      <p>Despite the progress, challenges remain. Access to funding, networking opportunities, and supportive policies are still limited in many regions. However, these challenges are also creating opportunities for innovation and creative solutions. African women leaders are finding new ways to access resources, build networks, and create supportive ecosystems.</p>

      <p>The future of African leadership is bright, and it is increasingly female. As more women step into leadership roles, they are not just changing their own lives – they are transforming entire societies and paving the way for a more equitable and prosperous Africa.</p>
    `,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop",
    date: "2024-01-15",
    read_time: "5 min read",
    author: "Amara Okafor",
    category: "Leadership",
    tags: ["Leadership", "Empowerment", "Success"],
    status: "published",
    featured: true,
    views: 1250,
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Traditional African Fashion Meets Modern Style",
    excerpt:
      "Exploring how contemporary African designers are revolutionizing fashion by blending traditional elements with modern aesthetics.",
    content: `
      <p>African fashion is experiencing a renaissance, with designers across the continent and diaspora creating stunning pieces that honor traditional craftsmanship while embracing contemporary aesthetics. This fusion is not just about clothing; it's about cultural identity, economic empowerment, and artistic expression.</p>

      <h2>The Rich Heritage of African Textiles</h2>
      <p>African textiles have always been more than just fabric. They tell stories, represent social status, and carry cultural significance. From the intricate patterns of Kente cloth to the vibrant colors of Ankara prints, each textile tradition has its own unique history and meaning.</p>

      <h2>Modern Interpretations</h2>
      <p>Today's African fashion designers are taking these traditional elements and reimagining them for the modern world. They're creating pieces that can be worn in boardrooms, on red carpets, and in everyday life, making African fashion accessible and relevant to a global audience.</p>

      <h2>Economic Impact</h2>
      <p>This fashion revolution is also having a significant economic impact. It's creating jobs for artisans, supporting local textile industries, and putting African fashion on the global map. Many designers are also committed to sustainable and ethical production practices.</p>

      <p>The future of African fashion is bright, with designers continuing to innovate while staying true to their cultural roots. This movement is not just about fashion; it's about pride, identity, and the celebration of African creativity.</p>
    `,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop",
    date: "2024-01-12",
    read_time: "7 min read",
    author: "Kemi Adebayo",
    category: "Fashion & Culture",
    tags: ["Fashion", "Culture", "Design"],
    status: "published",
    featured: true,
    views: 890,
    created_at: "2024-01-12T10:00:00Z",
    updated_at: "2024-01-12T10:00:00Z",
  },
  {
    id: 3,
    title: "Building Successful Businesses in Africa",
    excerpt:
      "Stories of African women entrepreneurs who are creating innovative solutions and building thriving businesses across the continent.",
    content: `
      <p>Entrepreneurship is thriving across Africa, with women leading the charge in creating innovative solutions to local and global challenges. These women entrepreneurs are not just building businesses; they're creating ecosystems of opportunity and driving economic growth across the continent.</p>

      <h2>Innovation Born from Necessity</h2>
      <p>Many successful African women entrepreneurs started their businesses to solve problems they encountered in their daily lives. This approach has led to innovative solutions in areas such as fintech, healthcare, education, and agriculture.</p>

      <h2>Access to Funding and Resources</h2>
      <p>While access to funding remains a challenge, more resources are becoming available to support women entrepreneurs. From microfinance institutions to venture capital funds focused on African startups, the funding landscape is evolving.</p>

      <h2>Building Sustainable Businesses</h2>
      <p>African women entrepreneurs are increasingly focused on building sustainable businesses that have positive social and environmental impacts. They understand that true success comes from creating value for all stakeholders, not just shareholders.</p>

      <p>The entrepreneurial spirit of African women is unstoppable. As more resources become available and barriers are removed, we can expect to see even more innovative businesses emerging from the continent.</p>
    `,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
    date: "2024-01-10",
    read_time: "6 min read",
    author: "Fatima Hassan",
    category: "Entrepreneurship",
    tags: ["Business", "Entrepreneurship", "Innovation"],
    status: "published",
    featured: false,
    views: 654,
    created_at: "2024-01-10T10:00:00Z",
    updated_at: "2024-01-10T10:00:00Z",
  },
]

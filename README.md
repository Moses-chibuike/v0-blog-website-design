# Adesuwa - African Women's Blog

A beautiful, modern blog platform celebrating African women's stories, achievements, and empowerment. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Beautiful, responsive design with African-inspired color palette
- **Content Management**: Full admin dashboard for managing blog posts
- **Multiple Data Sources**: Supports Supabase, localStorage, and demo data
- **SEO Optimized**: Built-in SEO optimization for better search visibility
- **Type Safe**: Full TypeScript support for better development experience
- **Responsive**: Mobile-first design that works on all devices

## 🚀 Quick Start

### Option 1: One-Click Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/adesuwa-blog)

### Option 2: Manual Deployment

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/adesuwa-blog.git
   cd adesuwa-blog
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables** (Optional - works without database)
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your Supabase credentials:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Setup (Optional)

The blog works perfectly without a database using demo data and localStorage. For production use with persistent data:

### Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Run the SQL scripts in the `scripts/` folder:
   - `create-blog-tables.sql` - Creates the blog_posts table
   - `create-view-increment-function.sql` - Creates view tracking function
   - `seed-blog-data.sql` - Seeds initial blog data

### Test Your Setup

Visit `/admin/setup` to test your database connection and run diagnostics.

## 🎨 Customization

### Colors and Branding

The blog uses an African-inspired color palette. Customize colors in `tailwind.config.ts`:

\`\`\`typescript
colors: {
  primary: {
    400: '#f59e0b', // Main amber
    500: '#d97706',
    600: '#b45309',
    // ... more shades
  }
}
\`\`\`

### Content Categories

Default categories include:
- Leadership
- Fashion & Culture  
- Entrepreneurship
- Motherhood
- Education
- Health & Wellness
- Technology
- Heritage

Add or modify categories in the admin interface or directly in the database.

## 📝 Content Management

### Admin Dashboard

Access the admin dashboard at `/admin` to:
- View blog statistics
- Create new posts
- Edit existing posts
- Manage post status (draft/published)
- Set featured posts

### Creating Posts

1. Go to `/admin/new-post`
2. Fill in the post details
3. Write your content (supports HTML)
4. Set category and tags
5. Choose to save as draft or publish immediately

## 🔧 Development

### Project Structure

\`\`\`
├── app/                 # Next.js app directory
│   ├── admin/          # Admin dashboard pages
│   ├── blog/           # Blog pages

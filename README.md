# Adesuwa - African Women's Blog

A beautiful, modern blog platform celebrating African women's stories, culture, and empowerment. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Design**: African-inspired color palette and modern UI
- 📱 **Responsive**: Works perfectly on all devices
- 🔧 **Admin Dashboard**: Full content management system
- 💾 **Flexible Data Storage**: Supports Supabase, localStorage, or demo data
- 🚀 **Fast Performance**: Built with Next.js App Router
- 🎯 **SEO Optimized**: Meta tags and structured data
- 🔒 **Type Safe**: Full TypeScript implementation

## Quick Start

### Option 1: Deploy to Vercel (Recommended)

1. Click the "Deploy" button in v0
2. Your blog will be automatically deployed to Vercel
3. Visit your deployed site and go to `/admin/setup` to configure your database

### Option 2: Manual Deployment

1. **Download the code** from v0
2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables** (optional for Supabase):
   \`\`\`bash
   # Create .env.local file
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

4. **Run locally**:
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Deploy to your preferred platform**:
   - **Vercel**: `vercel --prod`
   - **Netlify**: Build command: `npm run build`, Publish directory: `out`
   - **Other platforms**: Run `npm run build` and deploy the `.next` folder

## Database Setup (Optional)

The blog works in three modes:

### 1. Demo Mode (Default)
- No setup required
- Uses sample data
- Perfect for testing and demos

### 2. Local Storage Mode
- Posts are saved in browser's localStorage
- No database required
- Data persists locally

### 3. Supabase Mode (Recommended for Production)
- Full database functionality
- Real-time updates
- Scalable and secure

To set up Supabase:

1. Create a [Supabase](https://supabase.com) account
2. Create a new project
3. Add your environment variables
4. Visit `/admin/setup` in your deployed blog
5. Run the provided SQL scripts
6. Test the connection

## Customization

### Colors and Branding
Edit `tailwind.config.ts` to customize the color scheme:

\`\`\`typescript
colors: {
  primary: {
    500: "#f97316", // Main orange - change this
    // ... other shades
  },
  // ... other colors
}
\`\`\`

### Content
- **Homepage**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Contact Page**: Edit `app/contact/page.tsx`
- **Navigation**: Edit `components/navigation.tsx`
- **Footer**: Edit `components/footer.tsx`

### Metadata
Update site information in `app/layout.tsx`:

\`\`\`typescript
export const metadata: Metadata = {
  title: "Your Blog Name",
  description: "Your blog description",
}
\`\`\`

## Admin Features

Access the admin dashboard at `/admin`:

- ✅ Create, edit, and delete blog posts
- ✅ Rich text editor with formatting
- ✅ Image management
- ✅ Category and tag management
- ✅ Draft/publish workflow
- ✅ View analytics
- ✅ Database setup and testing

## File Structure

\`\`\`
├── app/
│   ├── admin/          # Admin dashboard
│   ├── blog/           # Blog pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   └── layout.tsx      # Root layout
├── components/
│   ├── ui/             # UI components
│   ├── navigation.tsx  # Main navigation
│   └── footer.tsx      # Site footer
├── lib/
│   ├── blog-service.ts # Data management
│   └── supabase.ts     # Database config
└── scripts/            # SQL scripts
\`\`\`

## Deployment Platforms

### Vercel (Recommended)
- Automatic deployments from Git
- Built-in analytics
- Edge functions support
- Free tier available

### Netlify
- Git-based deployments
- Form handling
- Edge functions
- Free tier available

### Other Platforms
- **Railway**: Full-stack hosting
- **DigitalOcean App Platform**: Container-based
- **AWS Amplify**: AWS ecosystem
- **Cloudflare Pages**: Edge-first hosting

## Support

If you need help:

1. Check the `/admin/setup` page for database setup
2. Review the console for error messages
3. Ensure environment variables are set correctly
4. Test with demo data first, then add your database

## License

This project is open source and available under the MIT License.

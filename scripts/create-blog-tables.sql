-- Create the blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  image TEXT,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  read_time TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Admin',
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('published', 'draft')),
  featured BOOLEAN DEFAULT FALSE,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on status for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);

-- Create an index on featured for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured);

-- Create an index on category for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to published posts" ON blog_posts
  FOR SELECT USING (status = 'published');

-- Create policies for admin access (you can modify this based on your auth setup)
CREATE POLICY "Allow all operations for authenticated users" ON blog_posts
  FOR ALL USING (true);

-- Insert sample blog posts
INSERT INTO blog_posts (title, excerpt, content, image, read_time, author, category, tags, status, featured, views) VALUES
(
  'Getting Started with Modern Web Development',
  'Learn the fundamentals of building modern web applications with the latest technologies and best practices. This comprehensive guide covers everything from setting up your development environment to deploying your first application.',
  '<p>Modern web development has evolved significantly over the past few years. With the introduction of new frameworks, tools, and best practices, developers now have more powerful ways to build robust, scalable applications.</p>

<h2>The Foundation: HTML, CSS, and JavaScript</h2>
<p>Before diving into modern frameworks, it''s crucial to have a solid understanding of the web''s foundational technologies. HTML provides structure, CSS handles presentation, and JavaScript adds interactivity.</p>

<h2>Modern JavaScript Frameworks</h2>
<p>Today''s web development landscape is dominated by powerful JavaScript frameworks like React, Vue.js, and Angular. These frameworks provide:</p>
<ul>
  <li>Component-based architecture</li>
  <li>State management solutions</li>
  <li>Virtual DOM for better performance</li>
  <li>Rich ecosystem of tools and libraries</li>
</ul>

<h2>Development Tools and Workflow</h2>
<p>Modern development relies heavily on tools that improve productivity and code quality:</p>
<ul>
  <li><strong>Version Control:</strong> Git for tracking changes and collaboration</li>
  <li><strong>Package Managers:</strong> npm, yarn, or pnpm for dependency management</li>
  <li><strong>Build Tools:</strong> Webpack, Vite, or Parcel for bundling and optimization</li>
  <li><strong>Code Quality:</strong> ESLint, Prettier, and TypeScript for better code</li>
</ul>',
  '/placeholder.svg?height=400&width=800',
  '5 min read',
  'John Doe',
  'Web Development',
  ARRAY['JavaScript', 'React', 'Web Development', 'Frontend'],
  'published',
  true,
  1250
),
(
  'The Future of Digital Transformation',
  'Exploring how businesses are adapting to the digital age and what it means for the future of work. We dive deep into emerging trends and technologies that are reshaping industries.',
  '<p>Digital transformation is no longer a buzzword—it''s a necessity for businesses looking to stay competitive in today''s rapidly evolving marketplace.</p>

<h2>What is Digital Transformation?</h2>
<p>Digital transformation involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.</p>

<h2>Key Technologies Driving Change</h2>
<ul>
  <li>Cloud Computing</li>
  <li>Artificial Intelligence</li>
  <li>Internet of Things (IoT)</li>
  <li>Big Data Analytics</li>
</ul>

<p>These technologies are enabling businesses to become more agile, efficient, and customer-focused than ever before.</p>',
  '/placeholder.svg?height=400&width=800',
  '8 min read',
  'Jane Smith',
  'Technology',
  ARRAY['Digital Transformation', 'Business', 'Technology'],
  'published',
  true,
  890
),
(
  'Building Sustainable Tech Solutions',
  'How technology can be leveraged to create positive environmental and social impact in our communities. Learn about green coding practices and sustainable development approaches.',
  '<p>As developers, we have a responsibility to consider the environmental impact of the software we create.</p>

<h2>Green Coding Practices</h2>
<p>Writing efficient code isn''t just about performance—it''s also about reducing energy consumption and carbon footprint.</p>

<h2>Sustainable Development Principles</h2>
<ul>
  <li>Optimize for energy efficiency</li>
  <li>Minimize resource usage</li>
  <li>Choose sustainable hosting providers</li>
  <li>Implement efficient algorithms</li>
</ul>',
  '/placeholder.svg?height=400&width=800',
  '6 min read',
  'Mike Johnson',
  'Sustainability',
  ARRAY['Sustainability', 'Green Tech', 'Environment'],
  'published',
  false,
  456
);

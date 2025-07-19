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
),
(
  'Breaking Free from Limitations: Your Journey to Transformation',
  'Discover how to overcome the barriers that hold you back and unlock your true potential...',
  'This is the full content of the first blog post. It delves into strategies for personal growth and overcoming self-imposed limitations. It includes actionable steps and inspiring stories.',
  '/placeholder.svg?height=300&width=400&text=Personal+Growth',
  '7 min read',
  'AlaoMeBlog Team',
  'Personal Growth',
  ARRAY['Personal Growth', 'Self-Discovery', 'Limitations'],
  'published',
  true,
  1200
),
(
  'From Struggle to Success: The Power of Mindset Transformation',
  'Learn how shifting your mindset can turn your greatest challenges into your most powerful stepping...',
  'This post explores the profound impact of mindset on achieving success. It covers cognitive reframing, positive psychology, and practical exercises to cultivate a growth mindset.',
  '/placeholder.svg?height=300&width=400&text=Professional+Development',
  '8 min read',
  'AlaoMeBlog Team',
  'Professional Development',
  ARRAY['Professional Development', 'Mindset', 'Success'],
  'published',
  true,
  1500
),
(
  'Living with Purpose: Aligning Your Life with Your Higher Calling',
  'Explore how to discover and live according to your deeper purpose, creating impact that...',
  'This article guides readers through the process of identifying their life''s purpose and aligning their daily actions with their core values. It includes reflections and exercises for self-discovery.',
  '/placeholder.svg?height=300&width=400&text=Spirituality+&amp;+Purpose',
  '6 min read',
  'AlaoMeBlog Team',
  'Spirituality & Purpose',
  ARRAY['Spirituality & Purpose', 'Purpose', 'Self-Discovery'],
  'published',
  true,
  1000
),
(
  'The Art of Effective Communication',
  'Master the skills to communicate clearly and persuasively in any situation.',
  'Full content for The Art of Effective Communication...',
  '/placeholder.svg?height=300&width=400&text=Communication',
  '10 min read',
  'AlaoMeBlog Team',
  'Professional Development',
  ARRAY['Professional Development', 'Communication', 'Skills'],
  'published',
  false,
  800
),
(
  'Mindfulness for Modern Living',
  'Integrate mindfulness practices into your daily routine for reduced stress and increased focus.',
  'Full content for Mindfulness for Modern Living...',
  '/placeholder.svg?height=300&width=400&text=Mindfulness',
  '7 min read',
  'AlaoMeBlog Team',
  'Personal Growth',
  ARRAY['Personal Growth', 'Mindfulness', 'Stress'],
  'published',
  false,
  950
),
(
  'Building Resilient Teams',
  'Strategies for fostering strong, adaptable teams in a rapidly changing world.',
  'Full content for Building Resilient Teams...',
  '/placeholder.svg?height=300&width=400&text=Teamwork',
  '12 min read',
  'AlaoMeBlog Team',
  'Professional Development',
  ARRAY['Professional Development', 'Teamwork', 'Resilience'],
  'published',
  false,
  1100
),
(
  'The Power of Gratitude',
  'Cultivate an attitude of gratitude to enhance your well-being and outlook on life.',
  'Full content for The Power of Gratitude...',
  '/placeholder.svg?height=300&width=400&text=Gratitude',
  '5 min read',
  'AlaoMeBlog Team',
  'Spirituality & Purpose',
  ARRAY['Spirituality & Purpose', 'Gratitude', 'Well-being'],
  'published',
  false,
  700
),
(
  'Goal Setting for Success',
  'Learn effective techniques to set and achieve your personal and professional goals.',
  'Full content for Goal Setting for Success...',
  '/placeholder.svg?height=300&width=400&text=Goals',
  '9 min read',
  'AlaoMeBlog Team',
  'Personal Growth',
  ARRAY['Personal Growth', 'Goal Setting', 'Achievement'],
  'published',
  false,
  900
),
(
  'Navigating Career Transitions',
  'Expert advice for successfully changing careers or advancing in your current field.',
  'Full content for Navigating Career Transitions...',
  '/placeholder.svg?height=300&width=400&text=Career',
  '11 min read',
  'AlaoMeBlog Team',
  'Professional Development',
  ARRAY['Professional Development', 'Career Transition', 'Advice'],
  'published',
  false,
  1050
),
(
  'Finding Inner Peace in a Chaotic World',
  'Practical steps to cultivate tranquility and balance amidst life''s demands.',
  'Full content for Finding Inner Peace...',
  '/placeholder.svg?height=300&width=400&text=Peace',
  '8 min read',
  'AlaoMeBlog Team',
  'Spirituality & Purpose',
  ARRAY['Spirituality & Purpose', 'Inner Peace', 'Balance'],
  'published',
  false,
  850
);

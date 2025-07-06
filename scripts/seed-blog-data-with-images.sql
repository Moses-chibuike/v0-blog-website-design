-- Clear existing posts and insert new ones with Unsplash images
DELETE FROM blog_posts;

-- Insert sample blog posts with beautiful Unsplash images
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
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
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

<p>These technologies are enabling businesses to become more agile, efficient, and customer-focused than ever before.</p>

<h2>The Impact on Workforce</h2>
<p>As digital transformation accelerates, the nature of work itself is changing. Remote work, automation, and AI-assisted tasks are becoming the norm rather than the exception.</p>',
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
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
</ul>

<h2>The Role of Renewable Energy</h2>
<p>Many tech companies are now powering their data centers with renewable energy sources, significantly reducing their carbon footprint.</p>

<h2>Community Impact</h2>
<p>Technology can be a powerful force for good when applied to solving environmental and social challenges in our communities.</p>',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  '6 min read',
  'Mike Johnson',
  'Sustainability',
  ARRAY['Sustainability', 'Green Tech', 'Environment'],
  'published',
  false,
  456
),
(
  'Mastering React Hooks: A Complete Guide',
  'Deep dive into React Hooks and learn how to use them effectively in your applications. From useState to custom hooks, we cover everything you need to know.',
  '<p>React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components.</p>

<h2>Understanding useState</h2>
<p>The useState hook is the most fundamental hook that allows you to add state to functional components.</p>

<h2>useEffect for Side Effects</h2>
<p>Learn how to handle side effects, API calls, and cleanup operations with the useEffect hook.</p>

<h2>Custom Hooks</h2>
<p>Create reusable logic by building your own custom hooks that can be shared across components.</p>

<h2>Performance Optimization</h2>
<p>Use useMemo and useCallback to optimize your React applications and prevent unnecessary re-renders.</p>',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  '12 min read',
  'Sarah Wilson',
  'React',
  ARRAY['React', 'Hooks', 'JavaScript', 'Frontend'],
  'published',
  false,
  723
),
(
  'API Design Best Practices',
  'Learn how to design robust, scalable APIs that developers love to use. We cover REST principles, GraphQL, and modern API design patterns.',
  '<p>Well-designed APIs are the backbone of modern web applications. They enable seamless communication between different services and provide a great developer experience.</p>

<h2>RESTful API Principles</h2>
<p>Understanding the core principles of REST architecture and how to apply them effectively.</p>

<h2>GraphQL vs REST</h2>
<p>Compare the benefits and trade-offs between GraphQL and traditional REST APIs.</p>

<h2>Authentication and Security</h2>
<p>Implement proper authentication, authorization, and security measures to protect your APIs.</p>

<h2>Documentation and Testing</h2>
<p>Create comprehensive documentation and implement thorough testing strategies for your APIs.</p>',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  '10 min read',
  'David Brown',
  'Backend',
  ARRAY['API', 'Backend', 'REST', 'GraphQL'],
  'published',
  false,
  612
),
(
  'The Rise of AI in Software Development',
  'Exploring how artificial intelligence is transforming the way we write code and build applications. From code generation to automated testing.',
  '<p>Artificial Intelligence is revolutionizing software development, offering new tools and capabilities that enhance developer productivity and code quality.</p>

<h2>AI-Powered Code Generation</h2>
<p>Tools like GitHub Copilot and ChatGPT are changing how developers write code, offering intelligent suggestions and automated code generation.</p>

<h2>Automated Testing and QA</h2>
<p>AI can help identify bugs, generate test cases, and improve overall software quality through intelligent analysis.</p>

<h2>Code Review and Optimization</h2>
<p>Machine learning algorithms can analyze code patterns and suggest improvements for performance and maintainability.</p>

<h2>The Future of Development</h2>
<p>As AI continues to evolve, we can expect even more sophisticated tools that will further transform the software development landscape.</p>',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  '7 min read',
  'Emily Davis',
  'AI',
  ARRAY['AI', 'Machine Learning', 'Automation', 'Future Tech'],
  'published',
  false,
  834
);

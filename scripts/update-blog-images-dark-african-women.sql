-- Update existing blog posts with beautiful dark-skinned African women images
UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'The Power of African Women in Leadership';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Celebrating African Fashion and Cultural Heritage';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Entrepreneurship: African Women Building Empires';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Motherhood and Career: Balancing Dreams in Africa';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Education Champions: African Women Transforming Learning';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Health and Wellness: African Women Leading Change';

-- Add new posts with dark African women images
INSERT INTO blog_posts (title, excerpt, content, image, read_time, author, category, tags, status, featured, views) VALUES
(
  'Breaking Barriers in Technology',
  'Meet the African women who are coding the future, leading tech companies, and creating innovative solutions for African challenges.',
  '<p>African women are at the forefront of the continent''s technological revolution, breaking barriers in STEM fields and creating innovative solutions that address real-world challenges.</p>

<h2>Leading Tech Innovation</h2>
<p>From fintech solutions to e-commerce platforms, African women entrepreneurs are building the digital infrastructure that will power Africa''s future.</p>

<h2>Inspiring the Next Generation</h2>
<p>These tech leaders are not just building companies—they''re mentoring young girls and women to pursue careers in technology, ensuring a diverse and inclusive future for the industry.</p>',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '9 min read',
  'Zara Okonkwo',
  'Technology',
  ARRAY['Technology', 'Innovation', 'STEM', 'Digital Transformation'],
  'published',
  false,
  580
),
(
  'Preserving African Languages and Stories',
  'How African women are keeping indigenous languages alive and passing down oral traditions to future generations.',
  '<p>African women have always been the keepers of culture, language, and tradition. Today, they continue this vital role by preserving indigenous languages and oral traditions for future generations.</p>

<h2>The Power of Oral Tradition</h2>
<p>Through storytelling, songs, and cultural practices, African women ensure that the wisdom of their ancestors continues to guide and inspire new generations.</p>

<h2>Modern Preservation Efforts</h2>
<p>Using technology and innovative approaches, these cultural guardians are finding new ways to document and share traditional knowledge while keeping it alive in daily practice.</p>',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '6 min read',
  'Ama Asante',
  'Culture & Heritage',
  ARRAY['Language', 'Culture', 'Oral Tradition', 'Heritage'],
  'published',
  false,
  420
);

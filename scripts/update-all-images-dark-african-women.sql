-- Update all existing blog posts with beautiful dark-skinned African women images
UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'The Power of African Women in Leadership';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Celebrating African Fashion and Cultural Heritage';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Entrepreneurship: African Women Building Empires';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Motherhood and Career: Balancing Dreams in Africa';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Education Champions: African Women Transforming Learning';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Health and Wellness: African Women Leading Change';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Breaking Barriers in Technology';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE title = 'Preserving African Languages and Stories';

-- Update any other posts that might exist
UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE category = 'Leadership' AND image != 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE category = 'Culture & Fashion' AND image != 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE category = 'Entrepreneurship' AND image != 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE category = 'Motherhood & Career' AND image != 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE category = 'Education' AND image != 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE category = 'Health & Wellness' AND image != 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE category = 'Technology' AND image != 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

UPDATE blog_posts 
SET image = 'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
WHERE category = 'Culture & Heritage' AND image != 'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

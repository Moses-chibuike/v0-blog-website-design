-- Clear existing posts and insert African women-focused content with dark-skinned African women images
DELETE FROM blog_posts;

-- Insert African women-focused blog posts with beautiful dark-skinned African women images
INSERT INTO blog_posts (title, excerpt, content, image, read_time, author, category, tags, status, featured, views) VALUES
(
  'The Power of African Women in Leadership',
  'Exploring how African women are breaking barriers and leading change across the continent and diaspora, from boardrooms to grassroots movements that are reshaping communities.',
  '<p>African women have always been leaders, but today they are breaking through barriers that have historically limited their visibility and influence. From corporate boardrooms to grassroots movements, African women are leading transformational change across the continent and diaspora.</p>

<h2>Breaking the Glass Ceiling</h2>
<p>Across Africa, women are ascending to positions of power previously dominated by men. From presidents like Ellen Johnson Sirleaf of Liberia to business leaders like Folorunso Alakija of Nigeria, African women are proving that leadership knows no gender.</p>

<h2>Grassroots Leadership</h2>
<p>Beyond formal positions, African women lead in their communities through:</p>
<ul>
  <li><strong>Community organizing:</strong> Mobilizing resources for education and healthcare</li>
  <li><strong>Economic empowerment:</strong> Creating cooperatives and supporting local businesses</li>
  <li><strong>Social change:</strong> Advocating for women''s rights and gender equality</li>
  <li><strong>Cultural preservation:</strong> Maintaining traditions while embracing progress</li>
</ul>

<p>The future of Africa and the global African diaspora is bright, led by women who understand that true leadership is about lifting others as you climb.</p>',
  'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '7 min read',
  'Amara Okafor',
  'Leadership',
  ARRAY['Leadership', 'African Women', 'Empowerment', 'Breaking Barriers'],
  'published',
  true,
  1650
),
(
  'Celebrating African Fashion and Cultural Heritage',
  'From traditional textiles to modern runway shows, discover how African women are preserving and innovating cultural fashion traditions while making global impact.',
  '<p>African fashion is experiencing a renaissance, with African women designers, models, and fashion entrepreneurs taking center stage on global runways and in international markets. This movement is about more than clothing—it''s about cultural pride, economic empowerment, and artistic expression.</p>

<h2>Traditional Textiles, Modern Innovation</h2>
<p>African women are reimagining traditional fabrics and techniques for contemporary fashion:</p>
<ul>
  <li><strong>Kente cloth:</strong> Ghana''s royal textile adapted for modern wear</li>
  <li><strong>Ankara prints:</strong> Vibrant patterns that tell stories and express identity</li>
  <li><strong>Mud cloth:</strong> Mali''s ancient art form inspiring contemporary designs</li>
  <li><strong>Shweshwe:</strong> South African heritage fabric in modern silhouettes</li>
</ul>

<h2>Global Recognition</h2>
<p>African fashion designers are gaining international recognition, with brands like Maki Oh, Lisa Folawiyo, and Thebe Magugu showcasing at major fashion weeks and dressing celebrities worldwide.</p>

<p>African fashion is not just about what we wear—it''s about who we are, where we come from, and where we''re going. It''s a celebration of African creativity, craftsmanship, and cultural pride.</p>',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '8 min read',
  'Kemi Adebayo',
  'Culture & Fashion',
  ARRAY['Fashion', 'Culture', 'Heritage', 'African Design', 'Textiles'],
  'published',
  true,
  1420
),
(
  'Entrepreneurship: African Women Building Empires',
  'Meet the inspiring African women entrepreneurs who are creating businesses, jobs, and opportunities across various industries while transforming their communities.',
  '<p>African women entrepreneurs are building businesses that not only generate profit but also create positive social impact. From tech startups to agricultural enterprises, these women are proving that business success and community development go hand in hand.</p>

<h2>Tech Innovation</h2>
<p>African women are at the forefront of the continent''s tech revolution:</p>
<ul>
  <li><strong>Fintech solutions:</strong> Creating mobile payment systems and financial inclusion</li>
  <li><strong>E-commerce platforms:</strong> Connecting African products to global markets</li>
  <li><strong>EdTech innovations:</strong> Improving access to quality education</li>
  <li><strong>HealthTech solutions:</strong> Addressing healthcare challenges through technology</li>
</ul>

<p>These women are not just building businesses—they''re building the future of Africa, creating opportunities for the next generation and proving that entrepreneurship is a powerful tool for social change.</p>',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '9 min read',
  'Fatima Hassan',
  'Entrepreneurship',
  ARRAY['Entrepreneurship', 'Business', 'Innovation', 'Economic Empowerment'],
  'published',
  true,
  1180
),
(
  'Motherhood and Career: Balancing Dreams in Africa',
  'Exploring how African women navigate the beautiful complexity of motherhood while pursuing their professional and personal aspirations.',
  '<p>African women have long mastered the art of balancing multiple roles, but modern motherhood presents unique challenges and opportunities. Today''s African mothers are redefining what it means to be both nurturing caregivers and ambitious professionals.</p>

<h2>The Village Approach</h2>
<p>Traditional African societies understood that "it takes a village to raise a child." Modern African women are adapting this wisdom, creating support networks that enable them to pursue their dreams while raising their children.</p>

<p>The journey of balancing motherhood and career is not always easy, but African women continue to show that it''s possible to be both devoted mothers and successful professionals.</p>',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '6 min read',
  'Aisha Mwangi',
  'Motherhood & Career',
  ARRAY['Motherhood', 'Career', 'Work-Life Balance', 'Family'],
  'published',
  false,
  890
),
(
  'Education Champions: African Women Transforming Learning',
  'Highlighting African women educators, researchers, and advocates who are revolutionizing education across the continent and beyond.',
  '<p>Education has always been a priority for African women, both as learners and as champions of learning for others. Today, African women are leading educational transformation across the continent and in diaspora communities worldwide.</p>

<p>These education champions understand that investing in learning is investing in Africa''s future, and they''re committed to ensuring that every child has access to quality education.</p>',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '7 min read',
  'Dr. Nomsa Mbeki',
  'Education',
  ARRAY['Education', 'Learning', 'Teaching', 'Academic Excellence'],
  'published',
  false,
  720
),
(
  'Health and Wellness: African Women Leading Change',
  'Discover how African women are revolutionizing healthcare, promoting wellness, and addressing health challenges in their communities.',
  '<p>African women have traditionally been the health keepers of their families and communities. Today, they''re expanding this role, becoming doctors, researchers, public health advocates, and wellness entrepreneurs who are transforming healthcare across Africa.</p>

<p>These health champions understand that healthy communities are the foundation of prosperous societies, and they''re working tirelessly to ensure that every African has access to quality healthcare.</p>',
  'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '8 min read',
  'Dr. Adanna Okwu',
  'Health & Wellness',
  ARRAY['Health', 'Wellness', 'Healthcare', 'Medical Innovation'],
  'published',
  false,
  650
),
(
  'Breaking Barriers in Technology',
  'Meet the African women who are coding the future, leading tech companies, and creating innovative solutions for African challenges.',
  '<p>African women are at the forefront of the continent''s technological revolution, breaking barriers in STEM fields and creating innovative solutions that address real-world challenges.</p>

<p>These tech leaders are not just building companies—they''re mentoring young girls and women to pursue careers in technology, ensuring a diverse and inclusive future for the industry.</p>',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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

<p>Using technology and innovative approaches, these cultural guardians are finding new ways to document and share traditional knowledge while keeping it alive in daily practice.</p>',
  'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '6 min read',
  'Ama Asante',
  'Culture & Heritage',
  ARRAY['Language', 'Culture', 'Oral Tradition', 'Heritage'],
  'published',
  false,
  420
);

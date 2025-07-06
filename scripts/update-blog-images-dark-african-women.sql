-- Update all blog post images to feature dark-skinned African women
UPDATE blog_posts SET 
    image = CASE 
        WHEN category = 'Leadership' THEN 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop'
        WHEN category = 'Fashion & Culture' THEN 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop'
        WHEN category = 'Entrepreneurship' THEN 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop'
        WHEN category = 'Motherhood' THEN 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop'
        WHEN category = 'Education' THEN 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
        WHEN category = 'Health & Wellness' THEN 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop'
        WHEN category = 'Technology' THEN 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop'
        WHEN category = 'Heritage' THEN 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop'
        ELSE 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop'
    END
WHERE id > 0;

-- Ensure all images feature dark-skinned African women with professional quality
UPDATE blog_posts SET 
    image = CASE id
        WHEN 1 THEN 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop'
        WHEN 2 THEN 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop'
        WHEN 3 THEN 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop'
        WHEN 4 THEN 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop'
        WHEN 5 THEN 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
        WHEN 6 THEN 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop'
        WHEN 7 THEN 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop'
        WHEN 8 THEN 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=400&fit=crop'
        ELSE image
    END
WHERE id <= 8;

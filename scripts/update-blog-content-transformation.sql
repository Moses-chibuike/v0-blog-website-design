-- This script is intended to update existing blog post content to include more detailed transformation-focused excerpts.
-- It assumes the 'blog_posts' table already exists and has 'id', 'excerpt', and 'content' columns.

-- Update post 1: Breaking Free from Limitations
UPDATE blog_posts
SET
    excerpt = 'Discover how to overcome the barriers that hold you back and unlock your true potential through purpose-driven transformation. Learn the key principles that separate those who dream from those who achieve.',
    content = 'This article delves deep into the psychological and practical strategies for identifying and dismantling self-imposed limitations. We explore techniques for building resilience, fostering a growth mindset, and setting audacious goals that align with your deepest purpose. Through real-life examples and actionable steps, you will learn to transform obstacles into opportunities and embark on a journey of continuous personal evolution.'
WHERE id = 1;

-- Update post 2: From Struggle to Success
UPDATE blog_posts
SET
    excerpt = 'Learn how shifting your mindset can turn your greatest challenges into your most powerful stepping stones. Discover the mental frameworks that successful people use to overcome adversity.',
    content = 'In this piece, we examine the profound impact of mindset on personal and professional success. We discuss how to cultivate a positive outlook, reframe failures as learning experiences, and develop unwavering self-belief. Practical exercises and inspiring anecdotes illustrate how a transformed mindset can unlock new possibilities and propel you towards your aspirations, even in the face of significant struggle.'
WHERE id = 2;

-- Update post 3: Living with Purpose
UPDATE blog_posts
SET
    excerpt = 'Explore how to discover and live according to your deeper purpose, creating impact that extends beyond yourself. Learn to align your daily actions with your spiritual calling.',
    content = 'This article guides you through the process of identifying your core values and life''s purpose. We explore various methodologies for self-discovery, from reflective practices to engaging with mentors. The focus is on practical ways to integrate your purpose into your daily life, work, and relationships, ensuring that your actions contribute to a legacy of positive impact and spiritual fulfillment. Discover how living with intention can bring profound joy and meaning.'
WHERE id = 3;

-- Update post 4: The Art of Mindful Productivity
UPDATE blog_posts
SET
    excerpt = 'Master the balance between efficiency and well-being. This article explores mindful productivity techniques to help you achieve more with less stress.',
    content = 'In a world obsessed with constant busyness, mindful productivity offers a refreshing alternative. This article introduces strategies for focusing deeply, managing distractions, and integrating periods of rest and reflection into your workflow. Learn how to prioritize tasks effectively, cultivate a sense of presence in your work, and achieve sustainable high performance without sacrificing your mental or physical health.'
WHERE id = 4;

-- Update post 5: Building Resilient Relationships
UPDATE blog_posts
SET
    excerpt = 'Discover the secrets to fostering strong, supportive relationships that stand the test of time, both personally and professionally.',
    content = 'Relationships are the cornerstone of a fulfilling life. This article provides actionable advice on improving communication, building trust, and navigating conflicts in personal and professional relationships. We explore the importance of empathy, active listening, and setting healthy boundaries to create connections that are not only resilient but also deeply enriching and mutually supportive.'
WHERE id = 5;

-- Update post 6: Financial Freedom Through Purposeful Living
UPDATE blog_posts
SET
    excerpt = 'Align your financial goals with your life''s purpose. Learn strategies for mindful spending, saving, and investing to achieve true financial freedom.',
    content = 'This article challenges conventional views on wealth by connecting financial success with purposeful living. It offers practical guidance on budgeting, debt management, and investment strategies that align with your values. Discover how to make conscious financial decisions that support your life''s mission, reduce stress, and create a foundation for long-term security and impact.'
WHERE id = 6;

-- Update post 7: Embracing Change: A Guide to Personal Evolution
UPDATE blog_posts
SET
    excerpt = 'Navigate life''s transitions with grace and strength. This guide provides strategies for embracing change as an opportunity for growth and self-discovery.',
    content = 'Change is an inevitable part of life, yet it often brings discomfort. This article offers a compassionate guide to embracing change, whether it''s a career shift, a new relationship, or a personal transformation. Learn techniques for adapting to new circumstances, letting go of the past, and leveraging periods of transition for profound personal evolution and resilience.'
WHERE id = 7;

-- Update post 8: The Power of Gratitude in Daily Life
UPDATE blog_posts
SET
    excerpt = 'Cultivate a practice of gratitude to enhance your well-being, improve relationships, and foster a more positive outlook on life.',
    content = 'Gratitude is more than just saying "thank you"; it''s a powerful practice that can profoundly shift your perspective and improve your overall well-being. This article explores the science behind gratitude and offers practical exercises for incorporating it into your daily routine. Discover how a consistent gratitude practice can reduce stress, increase happiness, and strengthen your connections with others.'
WHERE id = 8;

-- Update post 9: Unlocking Creativity: Your Inner Innovator
UPDATE blog_posts
SET
    excerpt = 'Tap into your innate creativity and unleash your inner innovator. This article provides techniques to foster creative thinking in all aspects of your life.',
    content = 'Creativity is not just for artists; it''s a fundamental human capacity that can be cultivated and applied to problem-solving, personal expression, and professional development. This article explores various methods for sparking creativity, overcoming creative blocks, and integrating innovative thinking into your daily habits. Learn to see challenges as opportunities for novel solutions and unlock your full creative potential.'
WHERE id = 9;

-- Update post 10: Digital Detox: Reclaiming Your Focus
UPDATE blog_posts
SET
    excerpt = 'Break free from digital distractions and reclaim your focus. Learn how a digital detox can improve your mental clarity and well-being.',
    content = 'In an increasingly connected world, constant digital stimulation can lead to overwhelm and reduced focus. This article provides a practical guide to implementing a digital detox, whether for a few hours or an extended period. Discover the benefits of disconnecting, such as improved sleep, enhanced creativity, and deeper real-world connections, and learn strategies for maintaining a healthy relationship with technology.'
WHERE id = 10;

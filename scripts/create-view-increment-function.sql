-- Create a function to safely increment post views
CREATE OR REPLACE FUNCTION increment_post_views(post_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE blog_posts 
  SET views = views + 1 
  WHERE id = post_id;
END;
$$ LANGUAGE plpgsql;

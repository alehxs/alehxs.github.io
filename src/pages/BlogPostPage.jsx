import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogPost from '../components/blog/BlogPost';
import { blogPosts } from '../content/blog/index';
import { getAllPosts } from '../utils/markdownUtils';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

function BlogPostPage() {
  const { slug } = useParams();

  const parsedPosts = getAllPosts(blogPosts);
  const post = parsedPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <BlogPost post={post} />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default BlogPostPage;

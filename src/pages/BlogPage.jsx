import { useEffect } from 'react';
import BlogList from '../components/blog/BlogList';
import { blogPosts } from '../content/blog/index';
import { getAllPosts, sortPostsByDate } from '../utils/markdownUtils';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

function BlogPage() {
  const parsedPosts = getAllPosts(blogPosts);
  const sortedPosts = sortPostsByDate(parsedPosts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BlogList posts={sortedPosts} />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default BlogPage;

import { Link } from 'react-router-dom';
import './BlogNavLink.css';

function BlogNavLink() {
  return (
    <Link to="/blog" className="blog-nav-link">
      <span className="blog-nav-icon">✎</span>
      <span className="blog-nav-label">Blog</span>
    </Link>
  );
}

export default BlogNavLink;

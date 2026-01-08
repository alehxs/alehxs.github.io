import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/markdownUtils';
import './BlogCard.css';

function BlogCard({ post, rotation }) {
  const { slug, frontmatter } = post;
  const { title, date, excerpt, coverImage, tags } = frontmatter;

  return (
    <Link to={`/blog/${slug}`} className="blog-card-link">
      <article
        className="blog-polaroid"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {coverImage && (
          <div className="blog-polaroid-image">
            <img src={coverImage} alt={title} />
          </div>
        )}
        <div className="blog-polaroid-content">
          <div className="blog-date-stamp">{formatDate(date)}</div>
          <h3 className="blog-polaroid-title">{title}</h3>
          <p className="blog-polaroid-excerpt">{excerpt}</p>
          {tags && tags.length > 0 && (
            <div className="blog-tags">
              {tags.slice(0, 3).map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;

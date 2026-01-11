import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { formatDate } from '../../utils/markdownUtils';
import './BlogPost.css';

function BlogPost({ post }) {
  const { frontmatter, content } = post;
  const { title, date, coverImage, tags, author } = frontmatter;

  return (
    <article className="blog-post-container">
      <Link to="/blog" className="blog-back-link">
        ← Back to All Posts
      </Link>

      <header className="blog-post-header">
        <div className="blog-post-date">{formatDate(date)}</div>
        <h1 className="blog-post-title">{title}</h1>

        {tags && tags.length > 0 && (
          <div className="blog-post-tags">
            {tags.map(tag => (
              <span key={tag} className="blog-post-tag">{tag}</span>
            ))}
          </div>
        )}

        {author && (
          <div className="blog-post-author">By {author}</div>
        )}
      </header>

      {coverImage && (
        <div className="blog-post-cover">
          <img src={coverImage} alt={title} />
        </div>
      )}

      <div className="blog-post-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            h1: (props) => <h1 className="markdown-h1" {...props} />,
            h2: (props) => <h2 className="markdown-h2" {...props} />,
            h3: (props) => <h3 className="markdown-h3" {...props} />,
            a: (props) => <a className="markdown-link" {...props} />,
            img: (props) => (
              <span className="markdown-image-wrapper">
                <img className="markdown-image" {...props} />
              </span>
            ),
            code: ({inline, ...props}) =>
              inline
                ? <code className="markdown-code-inline" {...props} />
                : <code className="markdown-code-block" {...props} />,
            blockquote: (props) => <blockquote className="markdown-blockquote" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogPost;

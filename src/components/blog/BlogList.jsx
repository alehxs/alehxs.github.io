import { useState } from 'react';
import BlogCard from './BlogCard';
import { getAllTags } from '../../utils/markdownUtils';
import './BlogList.css';

function BlogList({ posts }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const rotations = [-2, 3, -3, 2, 1, -1];

  const allTags = getAllTags(posts);

  const filteredPosts = selectedTag
    ? posts.filter(post => post.frontmatter.tags?.includes(selectedTag))
    : posts;

  return (
    <div className="blog-list-container">
      <div className="blog-header">
        <h1 className="blog-headline">STORIES & LEARNINGS</h1>
        <p className="blog-subheadline">
          Thoughts on life, lessons, and everything in between.
        </p>
      </div>

      {allTags.length > 0 && (
        <div className="blog-filter-section">
          <button
            className={`blog-filter-btn ${!selectedTag ? 'active' : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            All Posts
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`blog-filter-btn ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="blog-grid">
        {filteredPosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            post={post}
            rotation={rotations[index % rotations.length]}
          />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="blog-empty-state">
          <p>No posts found with tag &quot;{selectedTag}&quot;</p>
        </div>
      )}
    </div>
  );
}

export default BlogList;

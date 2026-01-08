import matter from 'gray-matter';

/**
 * Parse markdown content and extract frontmatter
 * @param {string} markdownContent - Raw markdown string
 * @returns {Object} { frontmatter, content }
 */
export function parseMarkdown(markdownContent) {
  const { data, content } = matter(markdownContent);
  return {
    frontmatter: data,
    content: content.trim(),
  };
}

/**
 * Get all blog posts with parsed metadata
 * @param {Array} blogPosts - Array of {slug, content} objects
 * @returns {Array} Parsed posts with frontmatter
 */
export function getAllPosts(blogPosts) {
  return blogPosts.map(({ slug, content }) => {
    const { frontmatter, content: markdownContent } = parseMarkdown(content);
    return {
      slug,
      frontmatter,
      content: markdownContent,
    };
  });
}

/**
 * Sort posts by date (newest first)
 * @param {Array} posts - Array of post objects
 * @returns {Array} Sorted posts
 */
export function sortPostsByDate(posts) {
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB - dateA;
  });
}

/**
 * Filter posts by tag
 * @param {Array} posts - Array of post objects
 * @param {string} tag - Tag to filter by
 * @returns {Array} Filtered posts
 */
export function filterPostsByTag(posts, tag) {
  if (!tag) return posts;
  return posts.filter(post =>
    post.frontmatter.tags?.includes(tag)
  );
}

/**
 * Get unique tags from all posts
 * @param {Array} posts - Array of post objects
 * @returns {Array} Unique tags sorted alphabetically
 */
export function getAllTags(posts) {
  const tagSet = new Set();
  posts.forEach(post => {
    post.frontmatter.tags?.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date (e.g., "January 15, 2026")
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

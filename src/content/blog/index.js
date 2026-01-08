// Automatically import all markdown files from the posts directory
const postFiles = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true });

// Transform the imported files into a blog posts array
export const blogPosts = Object.entries(postFiles).map(([path, content]) => {
  const slug = path.replace('./posts/', '').replace('.md', '');
  return { slug, content };
});

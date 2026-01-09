---
title: "Building This Portfolio"
date: "2026-01-07"
excerpt: "A deep dive into the design decisions and technical implementation behind my vintage magazine-style portfolio website."
tags: ["lessons", "personal"]
author: "Alexander Sangurima"
---

# Building This Portfolio

Creating a portfolio that stands out in the sea of developer websites was a challenge I eagerly embraced. I wanted something that felt unique, personal, and memorable—something that broke away from the typical dark-mode, neon-accented templates.

## The Design Inspiration

The vintage magazine aesthetic came from my love of retro design and print media. I was particularly drawn to:

- **Warm, earthy color palettes** - burnt orange, cream, and deep browns
- **Bold typography** - mixing serif and sans-serif fonts
- **Asymmetric layouts** - polaroid cards scattered at slight angles
- **Tangible elements** - shadows and borders that create depth

## Technical Stack

I built this portfolio using:

- **React 18** with Vite for blazing-fast development
- **Vanilla CSS** with CSS custom properties for theming
- **React Router** for client-side navigation
- **GitHub Pages** for deployment

No frameworks, no Tailwind—just clean, maintainable CSS that I have full control over.

## Key Implementation Details

### Polaroid Card Effect

The scattered polaroid effect on the projects section uses a simple rotation technique:

```javascript
const rotations = [-2, 3, -3, 2];
projects.map((project, index) => (
  <ProjectCard
    rotation={rotations[index % rotations.length]}
  />
))
```

### Scroll Animations

I created a custom hook using the Intersection Observer API to trigger animations as elements enter the viewport:

```javascript
export function useScrollAnimation() {
  const [ref, isVisible] = useState(false);
  // ... intersection observer logic
  return [ref, isVisible];
}
```

## Challenges & Solutions

One of the biggest challenges was maintaining the vintage aesthetic while ensuring **accessibility** and **responsiveness**. I solved this by:

1. Using sufficient color contrast for text readability
2. Removing rotation on mobile devices for cleaner presentation
3. Testing across multiple screen sizes and devices

## What's Next

I'm constantly iterating on this design. Future improvements include:

- Adding this blog section you're reading now
- Dark mode variant (while keeping the vintage vibe)
- Performance optimizations for image loading
- Analytics to see which projects get the most views

Thanks for reading! Feel free to reach out if you have questions about the implementation.

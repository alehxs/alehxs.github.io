# Alexander Sangurima - Portfolio

A vintage magazine-style portfolio website showcasing my work as a Software Engineer, built with React and Vite. Inspired by classic Jeep XJ advertisements, featuring warm earth tones, bold typography, and asymmetric layouts.

## Design Philosophy

This portfolio breaks away from minimalist design trends to embrace a vintage magazine aesthetic with:
- **Warm Earth Tones**: Burnt orange (#C65D3B), tan, cream, and deep brown palette
- **Bold Typography**: Bebas Neue condensed headlines paired with elegant EB Garamond serif body text
- **Magazine Layouts**: Asymmetric sections, polaroid-style project cards, and editorial-inspired spreads
- **Subtle Interactions**: Scroll-triggered animations and refined hover effects that maintain the analog aesthetic

## Tech Stack

- **React 18.3.1** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **react-simple-typewriter** - Typewriter effect for hero section
- **Intersection Observer API** - Scroll-triggered animations
- **CSS Grid & Flexbox** - Layout system
- **Google Fonts** - EB Garamond & Bebas Neue

## Features

- Vintage magazine-inspired hero section with typewriter effect
- Two-column about section separating professional from personal interests
- Separated skills sections for Languages, Frameworks, and Tools
- Featured project showcase with full-bleed layout
- Polaroid-style scattered project cards
- Scroll-triggered fade-in animations
- Smooth scroll-to-top button
- Fully responsive design
- Custom vintage color palette and typography system

## Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx         # Magazine cover-style hero
│   ├── ContactCard.jsx          # Contact links stamp
│   ├── WhoAmICard.jsx          # About section
│   ├── LanguagesSection.jsx    # Programming languages
│   ├── FrameworksSection.jsx   # Frameworks & libraries
│   ├── ToolsSection.jsx        # Tools & platforms
│   ├── FeaturedProjectMagazine.jsx  # Featured project showcase
│   ├── ProjectsMagazineLayout.jsx   # Polaroid project grid
│   ├── Footer.jsx              # Minimal footer
│   └── ScrollToTop.jsx         # Scroll-to-top button
├── hooks/
│   └── useScrollAnimation.js   # Custom scroll animation hook
├── pages/
│   └── 404.jsx                 # 404 error page
├── App.jsx                     # Main app structure
├── App.css                     # Magazine layout system
└── index.css                   # Global styles & color palette
```

## Installation

```bash
# Clone the repository
git clone https://github.com/alehxs/new-portfolio.git

# Navigate to project directory
cd new-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Color Palette

```css
--burnt-orange: #C65D3B
--rust-orange: #D97847
--tan: #D4B896
--cream: #F5EBD9
--off-white: #FBF7F0
--deep-brown: #3E2723
--warm-brown: #5D4037
--medium-brown: #795548
--aged-paper: #E8DCC8
```

## Typography

- **Headlines**: Bebas Neue (condensed sans-serif)
- **Body Text**: EB Garamond (serif)
- **Display**: EB Garamond (serif)

## Contact

- **Email**: alex@sangurima.com
- **GitHub**: [@alehxs](https://github.com/alehxs)
- **LinkedIn**: [asangurima](https://linkedin.com/in/asangurima)
- **Website**: [alehxs.com](https://alehxs.com)

## License

© 2026 Alexander Sangurima. All rights reserved.

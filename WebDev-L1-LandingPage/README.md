# NOIR — Fashion Brand Landing Page

A minimalist, editorial-style landing page built for a fictional luxury fashion brand called NOIR. This project was built as part of the Oasis Infobyte Web Development Internship (Level 1).

## Live Preview

Open `index.html` in any browser to view the site — no build step or server required.

## Tech Stack

- HTML5
- CSS3 (Flexbox + Grid, no frameworks)

## Features

- Sticky, glassmorphism-style navigation bar
- Full-bleed hero section with an animated, infinite-loop typewriter headline
- Ambient hero image zoom animation
- Scrolling "As featured in" press logo marquee
- Product collection grid with staggered fade-in animation and image hover zoom
- Brand story split-image section
- Client reviews section
- Final call-to-action section with a background photo
- Multi-column responsive footer
- Fully responsive across desktop, tablet, and mobile
- `prefers-reduced-motion` support for accessibility
- Semantic HTML and accessible markup

## Design System

- Colors, typography, and spacing are controlled through CSS custom properties (variables) defined in `:root` at the top of `style.css`.
- Palette: black background, cream text, and a muted bronze-gold accent — chosen to reflect a luxury fashion aesthetic rather than a generic brand color.
- Typography pairs Cormorant Garamond (editorial serif for headings) with Inter (clean sans-serif for body text).
- Layout uses CSS Grid for the product/collection grid and Flexbox for the navbar and button groups.
- Single breakpoint at `768px` handles the switch to mobile layout.

## Notes on Imagery

Product and hero photography are sourced from Unsplash (free-to-use stock photography) and loaded directly from the web. An internet connection is required to view the images; for fully offline use, download the images locally and update the `src` paths in `index.html`.

## File Structure

WebDev-L1-LandingPage/
├── index.html
├── style.css
└── README.md


## How to Run

1. Download or clone this folder.
2. Open `index.html` directly in a web browser (with an internet connection, for the product images to load).

No dependencies, no installation required.
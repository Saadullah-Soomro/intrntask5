# Netflix Clone

A modern Netflix clone built with React, Vite, and Tailwind CSS v4. This project replicates the Netflix homepage with all its key features including a hero section, trending shows carousel, features showcase, FAQ section, and responsive design.

## Features

- 🎬 **Netflix-like Design** - Authentic Netflix homepage layout and styling
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Modern UI** - Built with Tailwind CSS v4 for beautiful, consistent styling
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast development
- 🎯 **Interactive Elements** - Functional carousel, expandable FAQ, hover effects
- 🎪 **Professional Icons** - Lucide React icons throughout the interface

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Latest version with CSS-first configuration
- **Lucide React** - Beautiful, customizable icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation and language selector
│   ├── Hero.jsx        # Main landing section with signup
│   ├── TrendingSection.jsx  # Carousel of trending shows
│   ├── FeaturesSection.jsx  # Netflix benefits showcase
│   ├── FAQ.jsx         # Expandable FAQ section
│   └── Footer.jsx      # Footer with links and info
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## Customization

- Add your own background image by placing `background-hero-image.jpg` in the `public` directory
- Modify trending shows data in `TrendingSection.jsx`
- Update FAQ content in `FAQ.jsx`
- Customize colors and styling using Tailwind CSS classes

## License

This project is for educational purposes only. Netflix is a registered trademark of Netflix, Inc.

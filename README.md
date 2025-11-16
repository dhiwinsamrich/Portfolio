# Portfolio Website - Dhiwin Samrich

A modern portfolio website for AI/ML Engineer Dhiwin Samrich, built with React.

## Features

- **Home Page**: Showcases selected works, achievements, and technical skills
- **About Page**: Detailed information about experience, education, and certifications
- **Contact Page**: Similar to About page with contact-focused content
- Responsive design matching the Figma specifications
- Clean, modern UI with Manrope font family

## Tech Stack

- React 18
- React Router DOM for navigation
- Custom CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── About.jsx
│   ├── About.css
│   ├── Contact.jsx
│   └── Contact.css
├── App.jsx
├── App.css
└── index.js
```

## Design

The design follows the Figma specifications provided, with:
- Manrope font family throughout
- Black (#000) and white (#FFF) color scheme
- Consistent spacing and typography
- Fully responsive layout with max-width of 1440px

### Responsive Breakpoints

The website is optimized for all devices with these breakpoints:

- **Desktop**: 1440px and above (original design)
- **Tablet**: 768px - 1024px (medium screens)
- **Mobile**: 480px - 768px (small screens)
- **Small Mobile**: Below 480px (extra small screens)

### Responsive Features

- Adaptive typography that scales down on smaller screens
- Flexible grid layouts that stack vertically on mobile
- Touch-friendly navigation and buttons
- Optimized spacing and padding for mobile devices
- Readable line heights and font sizes across all devices
- Hero section scales proportionally
- Large page titles adapt to screen size

## Build

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build` folder.

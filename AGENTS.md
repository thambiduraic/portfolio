# AI Full Stack Developer Portfolio - Agent Guidelines

## Overview
This is a React 18 + Vite + Tailwind CSS + Framer Motion portfolio website with a modern dark theme, neural network animations, and AI showcase sections.

---

## 🚀 Build & Development Commands

### Development
```bash
npm run dev              # Start Vite dev server on http://localhost:5173
```

### Production
```bash
npm run build            # Build for production (outputs to dist/)
npm run preview          # Preview production build locally
```

### Code Quality
```bash
npm run lint             # Run ESLint on entire codebase
```

### Key Dependencies
- **React 18** with functional components and hooks
- **Framer Motion** for animations
- **React Icons** (Fa* prefix for FontAwesome, Si* for Simple Icons)
- **Tailwind CSS 3** for styling
- **clsx** for conditional classNames

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Layout wrappers
│   ├── ui/              # Reusable UI (Button, Card, SectionWrapper, ProjectCard)
│   └── effects/         # Visual effects (NeuralNetwork canvas animation)
├── sections/             # Page sections (Hero, About, Skills, Projects, etc.)
├── data/                # Centralized data (portfolio.js)
├── hooks/               # Custom React hooks
├── utils/               # Utility functions (cn.js)
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles + Tailwind
```

---

## 🎨 Code Style Guidelines

### Imports
```jsx
// Order: React hooks → external libs → internal imports → utils
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { cn } from '../../utils/cn';
```

### File Naming
- Components: `PascalCase.jsx` (e.g., `ProjectCard.jsx`)
- Utils/Hooks/Data: `camelCase.js` (e.g., `portfolio.js`, `cn.js`)
- One component per file

### Component Patterns

#### UI Components
```jsx
import { cn } from '../../utils/cn';

export const ComponentName = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className, 
  ...props 
}) => {
  const baseStyles = "base-classes";
  const variants = {
    default: "default-styles",
    primary: "primary-styles",
  };
  const sizes = {
    sm: "sm-styles",
    md: "md-styles",
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
```

#### Section Components
- Located in `src/sections/`
- Use `SectionWrapper` for consistent spacing and scroll animations
- Receive data from `src/data/portfolio.js`
- Use `useScrollAnimation` hook for reveal animations

#### Layout Components
- Located in `src/components/layout/`
- Navbar: Fixed position, glassmorphism, responsive mobile menu
- Footer: Social links, back-to-top button
- Layout: Wrapper with Navbar, main content, Footer

---

## 🎯 Naming Conventions

### Variables & Functions
- Use camelCase for variables and functions
- Prefix hooks with `use`
- Prefix boolean variables with `is`, `has`, `should`, or `can`

```jsx
const [isVisible, setIsVisible] = useState(false);
const [hasError, setHasError] = useState(false);

function handleSubmit() { }
function useScrollAnimation() { }
```

### Components
- PascalCase for component names
- Use descriptive names (e.g., `ProjectCard`, not `PC`)

### CSS Classes (Tailwind)
- Use Tailwind utility classes
- Custom colors defined in `tailwind.config.js`
- Use `cn()` for conditional classes

```jsx
className={cn(
  "bg-surface border border-white/10 rounded-xl p-6",
  isActive && "border-primary",
  className
)}
```

---

## 📊 Color Palette (Tailwind)

```javascript
// tailwind.config.js
colors: {
  'dark': '#0a0a0f',           // Background
  'surface': '#111113',        // Cards/surfaces
  'surface-light': '#1a1a1f',  // Elevated surfaces
  'primary': '#3B82F6',        // Primary actions (blue)
  'primary-hover': '#2563EB',  // Hover state
  'secondary': '#06b6d4',      // Secondary accent (cyan)
  'accent': '#8b5cf6',         // Highlight accent (purple)
  'text-primary': '#ffffff',   // Main text
  'text-secondary': '#9ca3af',  // Secondary text
  'text-muted': '#6b7280',     // Muted/disabled text
}
```

---

## 🔧 Component Guidelines

### Props
- Use destructuring with default values
- Spread remaining props when needed
- Document complex props with JSDoc

### Animation Pattern
```jsx
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const AnimatedSection = ({ children }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
```

### Event Handlers
- Use arrow functions or named functions
- Prefix with `handle` (e.g., `handleClick`, `handleSubmit`)

### Icons
- Import from `react-icons/fa` (FontAwesome) or `react-icons/si` (Simple Icons)
- Use consistent sizing (text-xl, text-2xl, etc.)

---

## 📋 Data Structure (portfolio.js)

All portfolio content is centralized in `src/data/portfolio.js`:

```javascript
export const portfolioData = {
  personal: { name, title, bio, email, location, social, stats },
  skills: { frontend: [], backend: [], ai: [], tools: [] },
  projects: [{ id, title, description, tech, github, demo, featured }],
  aiProjects: [{ id, name, description, tech, metrics }],
  experience: [{ id, company, role, period, description, technologies }],
  navigation: [{ name, href }]
};
```

**Never hardcode content in components** - always import from portfolio.js and modify data there.

---

## ✅ Quality Checklist

Before completing any change:
- [ ] Run `npm run lint` - fix all errors
- [ ] Run `npm run build` - ensure no build errors
- [ ] Test responsive design (mobile + desktop)
- [ ] Verify animations work smoothly
- [ ] Check all sections render correctly
- [ ] Update README.md if adding new features

---

## 🚨 Common Patterns

### Scroll Animation Hook
```jsx
const [ref, isVisible] = useScrollAnimation(threshold = 0.1);
// Returns [setRef, isVisible]
// Attach ref to element, use isVisible to trigger animations
```

### Card with Hover
```jsx
import { Card } from '../components/ui/Card';

<Card hover={true} className="h-full">
  {/* Card content */}
</Card>
```

### Button Variants
```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

---

## 📚 Additional Notes

- **Dark theme only** - no light mode support needed
- **Mobile-first** responsive design
- **SEO** - Update meta tags in `index.html` for deployment
- **Fonts** - Inter font loaded via Google Fonts
- **No TypeScript** - Pure JavaScript/JSX
- **No testing framework** - Manual testing only

---

Last updated: 2026-04-06

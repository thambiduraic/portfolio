# AI Full Stack Developer Portfolio

A modern, professional portfolio website built with React, Tailwind CSS, and Framer Motion. Features a stunning dark theme with neural network animations and smooth micro-interactions.

## 🚀 Features

- **Modern Dark Theme**: Tech blue color scheme with electric blue (#3B82F6) primary color
- **Neural Network Animation**: Interactive canvas-based neural network background in hero section
- **Smooth Animations**: Framer Motion powered page transitions and scroll animations
- **Responsive Design**: Mobile-first approach with beautiful desktop layouts
- **Sections Included**:
  - Hero with animated typewriter effect
  - About Me with stats
  - Skills (categorized: Frontend, Backend, AI/ML, Tools)
  - Featured Projects with cards
  - AI Showcase section
  - Experience timeline
  - Contact form with social links
- **Reusable Components**: Navbar, Footer, ProjectCard, SectionWrapper, Button, Card
- **Clean Architecture**: Organized folder structure for scalability

## 🛠️ Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography
- **React Scroll** for smooth scrolling

## 📦 Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.js` to update:

- **Name & Title**: `personal.name`, `personal.title`
- **Bio**: `personal.bio`
- **Email & Location**: `personal.email`, `personal.location`
- **Social Links**: `personal.social.github`, `.linkedin`, `.twitter`
- **Stats**: `personal.stats.yearsExperience`, `.projectsCompleted`, `.technologies`

### Update Projects

Modify the `projects` array in `src/data/portfolio.js`:

```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Project description...",
  tech: ["React", "Node.js", "OpenAI"],
  github: "https://github.com/yourusername/project",
  demo: "https://your-demo-url.vercel.app",
  featured: true  // Shows in featured section
}
```

### Update Skills

Update the `skills` object in `src/data/portfolio.js`:

```javascript
skills: {
  frontend: [
    { name: "React", icon: "FaReact" },
    { name: "Vue.js", icon: "FaVuejs" },
    // Add more skills
  ],
  // backend, ai, tools...
}
```

Icon names should match React Icons component names (e.g., `FaReact` for FontAwesome React icon).

### Update Experience

Modify the `experience` array:

```javascript
{
  id: 1,
  company: "Company Name",
  role: "Your Position",
  period: "2022 - Present",
  description: "Role description...",
  technologies: ["React", "Node.js", "Python"]
}
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SectionWrapper.jsx
│   │   │   └── ProjectCard.jsx
│   │   └── effects/
│   │       └── NeuralNetwork.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── AIShowcase.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── utils/
│   │   └── cn.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Color Palette

- **Background**: `#0a0a0f` (deep dark)
- **Surface**: `#111113` (card backgrounds)
- **Primary**: `#3B82F6` (electric blue)
- **Secondary**: `#06b6d4` (cyan)
- **Accent**: `#8b5cf6` (purple)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#9ca3af`

## 🌟 Components

### Layout Components
- **Navbar**: Fixed navigation with glassmorphism effect, smooth scroll links
- **Footer**: Social links, copyright, back-to-top button
- **Layout**: Main wrapper component

### UI Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Reusable card with hover effects
- **SectionWrapper**: Consistent section spacing with scroll animations
- **ProjectCard**: Project display with tech tags and links

### Effects
- **NeuralNetwork**: Canvas-based animated neural network background

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory. Deploy to:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Push to `gh-pages` branch

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter (if configured)

## 🔧 Customization Tips

### Change Colors
Update `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  'primary': '#your-color',
  'secondary': '#your-color',
  // etc.
}
```

### Add New Sections
1. Create a new component in `src/sections/`
2. Add it to `src/App.jsx`
3. Add navigation link to `portfolio.js`

### Add New Components
1. Create in appropriate folder (`components/ui/` or `components/layout/`)
2. Export and use in your sections
3. Add to reusable component library

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to customize and use this portfolio template for your own projects!

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

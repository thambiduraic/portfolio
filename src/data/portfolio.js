export const portfolioData = {
  personal: {
    name: "Thambidurai",
    title: "AI Full Stack Developer",
    tagline: "Building intelligent applications with AI agents",
    bio: "Full Stack Developer leveraging AI agents to build scalable SaaS and AI-powered web applications. Specialized in React, Flask, and modern AI integration.",
    email: "thambidurai1604@gmail.com",
    location: "Krishnagiri, India",
    social: {
      github: "https://github.com/thambiduraic",
      linkedin: "https://www.linkedin.com/in/thambidurai-c-700b801b6/"
    },
    stats: {
      yearsExperience: 2,
      projectsCompleted: 6,
      technologies: 8
    }
  },
  
  skills: {
    frontend: [
      { name: "React", icon: "FaReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "FaJs" },
      { name: "Redux", icon: "FaCode" },
      { name: "Tailwind CSS", icon: "FaCss3Alt" }
    ],
    backend: [
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Flask", icon: "FaCode" },
      { name: "Django", icon: "FaCode" },
      { name: "Java", icon: "FaCode" },
      { name: "PostgreSQL", icon: "FaDatabase" }
    ],
    ai: [
      { name: "Cursor AI", icon: "FaCode" },
      { name: "Claude Code", icon: "FaCode" },
      { name: "OpenCode", icon: "FaCode" },
      { name: "OpenClaw", icon: "FaCode" },
      { name: "OpenAI API", icon: "FaCode" }
    ],
    tools: [
      { name: "Git", icon: "FaGitAlt" },
      { name: "Cursor AI", icon: "FaCode" },
      { name: "Claude Code", icon: "FaCode" },
      { name: "VS Code", icon: "FaCode" },
      { name: "Postman", icon: "FaCode" }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "Expense Tracker",
      description: "AI-powered personal finance SaaS application with intelligent expense categorization. Features multi-user authentication, real-time dashboards, and smart spending insights for individuals and freelancers.",
      tech: ["React", "Flask", "PostgreSQL", "Tailwind CSS", "AI Categorization"],
      github: "",
      demo: "",
      featured: true,
      isAiPowered: true,
      isTeamProject: false
    },
    {
      id: 2,
      title: "Cattle Feed Management System",
      description: "A comprehensive farm management system for cattle feed inventory, feeding schedules, and AI-powered feed optimization. Built as a team project with focus on usability and scalability for small-to-medium farms.",
      tech: ["React", "Java", "PostgreSQL", "MySQL", "AI Optimization"],
      github: "",
      demo: "",
      featured: true,
      isTeamProject: true,
      teamRole: "Frontend Lead"
    },
    {
      id: 3,
      title: "Marketing Automation Tool",
      description: "AI-powered marketing automation platform enabling non-technical users to create intelligent workflows. Features automated campaign management, lead scoring, and predictive analytics.",
      tech: ["React", "Django", "Python", "AI APIs", "Tailwind CSS"],
      github: "",
      demo: "",
      featured: true,
      isAiPowered: true,
      isTeamProject: false
    },
    {
      id: 4,
      title: "Dynamic Media Handler",
      description: "Robust media processing system with AI capabilities for automatic content tagging and optimization.",
      tech: ["React", "Node.js", "Python"],
      github: "",
      demo: "",
      featured: false
    },
    {
      id: 5,
      title: "Student Management System",
      description: "Comprehensive dashboard for managing student data, tracking progress, and generating performance reports.",
      tech: ["React", "Django", "PostgreSQL"],
      github: "",
      demo: "",
      featured: false
    }
  ],
  
  aiProjects: [
    {
      id: 1,
      name: "AI Expense Categorization",
      description: "Rule-based and AI-assisted expense auto-tagging system for intelligent personal finance management",
      tech: ["React", "Flask", "PostgreSQL", "AI Logic"],
      metrics: {
        accuracy: "90%",
        categories: "50+",
        automation: "80%"
      }
    },
    {
      id: 2,
      name: "Feed Optimization Engine",
      description: "AI-powered feed suggestions based on cattle type, weight, and usage patterns for optimal farm management",
      tech: ["React", "Java", "AI Algorithms", "PostgreSQL"],
      metrics: {
        suggestions: "Real-time",
        optimization: "30%",
        cattleTypes: "10+"
      }
    },
    {
      id: 3,
      name: "AI Agent Workflows",
      description: "Multi-agent powered development workflows using Cursor AI, Claude Code, OpenCode & OpenClaw for accelerated delivery",
      tech: ["Cursor AI", "Claude Code", "OpenCode", "OpenClaw", "React"],
      metrics: {
        workflows: "50+",
        automation: "80%",
        efficiency: "3x"
      }
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "ReachCopilot",
      role: "AI Full Stack Developer",
      period: "2023 - Present",
      description: "Building AI-powered marketing workflows using Cursor AI and Claude Code that improved user engagement by 40%. Developed intuitive interfaces enabling non-technical users to create complex automation. Implemented dynamic media handling systems with AI agent assistance.",
      technologies: ["React", "Redux", "TypeScript", "Node.js", "AI APIs", "Cursor AI", "Claude Code"]
    },
    {
      id: 2,
      company: "Nschool Academy",
      role: "Developer & Trainer",
      period: "2021 - 2023",
      description: "Architected full-stack SaaS dashboards using OpenCode and Cursor AI. Trained 50+ students on modern web development with AI-assisted learning. Mentored 5+ real-world projects from conception to deployment.",
      technologies: ["React", "Django", "Python", "PostgreSQL", "OpenCode", "Cursor AI"]
    }
  ],
  
  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "AI Showcase", href: "#ai-showcase" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ]
};

export const portfolioData = {
  personal: {
    name: "Thambidurai",
    title: "Python Full Stack Developer",
    tagline: "Building scalable web applications and automated workflows with React, Python, Django, and Supabase.",
    bio: "Full Stack Developer specializing in React for clean client interfaces and Python/Django for robust backend logic. Proficient in relational SQL database clustering, Supabase services, and AI-assisted workflows.",
    email: "thambidurai1604@gmail.com",
    location: "Krishnagiri, India",
    social: {
      github: "https://github.com/thambiduraic",
      linkedin: "https://www.linkedin.com/in/thambidurai-c-700b801b6/"
    },
    resumeLink: "https://drive.google.com/file/d/1hS56p0ydeY7fsWjKm7sRvir6E1S9jmq2/view?usp=sharing",
    stats: {
      yearsExperience: 2,
      projectsCompleted: 6,
      technologies: 8
    }
  },
  
  skills: [
    // Frontend
    { name: 'React', group: 'Frontend', icon: 'Code', projects: ['Expense Tracker', 'Cattle Feed Management System', 'Marketing Automation Tool'] },
    { name: 'TypeScript', group: 'Frontend', icon: 'Code', projects: ['ReachCopilot'] },
    { name: 'JavaScript', group: 'Frontend', icon: 'Code', projects: ['All Projects'] },
    { name: 'Redux', group: 'Frontend', icon: 'Cpu', projects: ['ReachCopilot'] },
    { name: 'Tailwind CSS', group: 'Frontend', icon: 'Layers', projects: ['Expense Tracker', 'Marketing Automation Tool'] },
    
    // Backend
    { name: 'Python', group: 'Backend', icon: 'Terminal', projects: ['Expense Tracker', 'Cattle Feed Management System', 'Marketing Automation Tool'] },
    { name: 'Django', group: 'Backend', icon: 'Terminal', projects: ['Marketing Automation Tool', 'Student Management System'] },
    { name: 'Node.js', group: 'Backend', icon: 'Server', projects: ['ReachCopilot'] },
    { name: 'Express.js', group: 'Backend', icon: 'Server', projects: ['ReachCopilot', 'SaaS Backends'] },
    { name: 'Supabase', group: 'Database', icon: 'Database', projects: ['Expense Tracker', 'Marketing Automation Tool', 'Student Management System'] },
    { name: 'PostgreSQL', group: 'Database', icon: 'Database', projects: ['Cattle Feed Management System', 'Student Management System'] },
    { name: 'SQL', group: 'Database', icon: 'Database', projects: ['Expense Tracker', 'Cattle Feed Management System'] },
    
    // AI
    { name: 'Cursor AI', group: 'AI', icon: 'Bot', projects: ['All Projects'] },
    { name: 'Claude Code', group: 'AI', icon: 'Bot', projects: ['ReachCopilot'] },
    { name: 'OpenCode', group: 'AI', icon: 'Activity', projects: ['Nschool Academy'] },
    { name: 'OpenClaw', group: 'AI', icon: 'Cpu', projects: ['AI Agent Workflows'] },
    { name: 'OpenAI API', group: 'AI', icon: 'Brain', projects: ['Expense Tracker', 'Marketing Automation Tool'] },
    
    // Tools
    { name: 'Git', group: 'Tools', icon: 'GitBranch', projects: ['All Projects'] },
    { name: 'VS Code', group: 'Tools', icon: 'Settings', projects: ['Local Dev'] },
    { name: 'Postman', group: 'Tools', icon: 'Globe', projects: ['API Integration & Testing'] }
  ],
  
  projects: [
    {
      id: 1,
      title: "Expense Tracker",
      description: "Personal finance SaaS application with intelligent expense categorization. Built with a React client, Django core REST API, and Supabase database authentication/storage.",
      tech: ["React", "Python", "Django", "Supabase", "SQL"],
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
      tech: ["React", "Python", "Django", "PostgreSQL", "SQL"],
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
      tech: ["React", "Django", "Python", "Supabase", "Redis"],
      github: "",
      demo: "",
      featured: true,
      isAiPowered: true,
      isTeamProject: false
    }
  ],
  
  aiProjects: [
    {
      id: 1,
      name: "AI Expense Categorization",
      description: "Rule-based and AI-assisted expense auto-tagging system for intelligent personal finance management",
      tech: ["React", "Python", "Django", "Supabase", "SQL"],
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
      tech: ["React", "Python", "Django", "PostgreSQL", "SQL"],
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
      role: "AI Frontend Engineer",
      period: "2023 - Present",
      description: "Developed and optimized AI-powered user interfaces and frontend marketing workflows that improved user engagement by 40%. Built highly intuitive React client views enabling non-technical users to build and run automation. Collaborated closely with backend teams to integrate APIs and media systems.",
      technologies: ["React", "Redux", "TypeScript", "Tailwind CSS", "AI APIs", "Cursor AI", "Claude Code"]
    },
    {
      id: 2,
      company: "Nschool Academy",
      role: "Developer & Trainer",
      period: "2021 - 2023",
      description: "Architected full-stack SaaS dashboards using OpenCode and Cursor AI. Trained 50+ students on modern web development with AI-assisted learning. Mentored 5+ real-world projects from conception to deployment.",
      technologies: ["React", "Django", "Python", "PostgreSQL", "SQL", "Git"]
    }
  ],
  
  navigation: [
    { name: "About Me", href: "#about" },
    { name: "Skills Universe", href: "#skills" },
    { name: "Featured Work", href: "#projects" },
    { name: "Work History", href: "#experience" }
  ]
};

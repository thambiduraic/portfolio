import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Users, Bot, X, Settings, Trophy, Server } from 'lucide-react';
import { Card } from '../ui/Card';

// Custom Lucide-styled SVG Github Brand Icon
const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectCard = ({ project, index }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const hasGithub = project.github && project.github.trim() !== '';
  const hasDemo = project.demo && project.demo.trim() !== '';

  const specs = useMemo(() => {
    const detailsMap = {
      1: {
        problem: 'SaaS expense tracking is manually intensive and prone to miscategorization.',
        solution: 'Built an AI-assisted classification engine with automated receipt scanning.',
        architecture: 'React Client ➔ Flask API Server ➔ PostgreSQL Database Cluster',
        optimizations: 'Implemented semantic chunking, embedding caching, and bulk indexing.',
        impact: '80% improvement in expense logging efficiency and automation.'
      },
      2: {
        problem: 'Livestock feeding formulas are static and lead to major feed inventory waste.',
        solution: 'Developed a dynamic optimization algorithm that calculates daily feed plans.',
        architecture: 'React Interface ➔ Java Core backend ➔ PostgreSQL / MySQL relational logs',
        optimizations: 'Linear programming solver code runs locally in worker threads to prevent main thread blocking.',
        impact: '30% Reduction in farm feed costs and feed inventory waste.'
      },
      3: {
        problem: 'Non-technical marketers require engineers to write custom code for automated funnels.',
        solution: 'Created an interactive node graph canvas builder with drag-and-drop trigger hooks.',
        architecture: 'React Flow ➔ Django REST API framework ➔ Redis Queue',
        optimizations: 'Virtualized canvas rendering tree; optimized node calculations to 60fps.',
        impact: '40% increase in campaign engagement and immediate launch speeds.'
      },
      4: {
        problem: 'Large media file uploads block server bandwidth during bulk indexing.',
        solution: 'Built a serverless node worker pipeline that handles content resizing and tagging in parallel.',
        architecture: 'React client ➔ Node.js serverless workers ➔ Python script threads',
        optimizations: 'Multi-thread CPU pool management; client-side pre-optimization.',
        impact: '60% faster media loading time and content delivery speed.'
      },
      5: {
        problem: 'Manual Excel logging of 50+ student metrics leads to grading delays.',
        solution: 'Designed an interactive analytics dashboard showing real-time course completions.',
        architecture: 'React Admin Client ➔ Django core ➔ SQLite/PostgreSQL Database',
        optimizations: 'Paginated grid indexing; query caching on student metric pipelines.',
        impact: 'Eliminated manual tracking overhead; reduced reporting delay by 100%.'
      }
    };

    return detailsMap[project.id] || {
      problem: 'Unspecified challenge requiring engineering resolution.',
      solution: 'Custom modular web application built with clean architecture.',
      architecture: 'React Frontend Client ➔ REST API Server ➔ Database',
      optimizations: 'Lazy loading, code splitting, and bundle size reduction.',
      impact: 'Improved page loads and streamlined user flows.'
    };
  }, [project.id]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        {/* Holographic Card Container */}
        <div className="relative group h-full">
          {/* Neon Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
          
          <Card className="h-full flex flex-col relative !border-white/10 hover:!border-primary/50 hover:shadow-lg transition-all duration-500 overflow-hidden">
            {/* Holographic Reflection Sheen */}
            <div className="absolute -inset-y-20 -inset-x-40 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none" />

            {/* Corner Bracket Accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary transition-colors" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover:border-primary transition-colors" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 group-hover:border-primary transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary transition-colors" />

            <div className="flex-grow p-6">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                {project.isAiPowered && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold bg-accent/10 text-accent border border-accent/25 rounded-full">
                    <Bot className="w-3.5 h-3.5" /> AI
                  </span>
                )}
                {project.isTeamProject && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/25 rounded-full">
                    <Users className="w-3.5 h-3.5" /> Team Project
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {project.teamRole && (
                <p className="text-xs font-mono text-secondary mb-3 font-semibold">
                  // {project.teamRole.toUpperCase()}
                </p>
              )}
              
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-mono bg-white/5 text-text-secondary border border-white/10 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="p-6 pt-0 flex flex-col gap-3">
              <button
                onClick={() => setIsPanelOpen(true)}
                className="w-full py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white text-xs font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Settings className="w-3.5 h-3.5" /> Open Architecture Panel
              </button>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10 justify-between">
                {hasGithub ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-xs font-semibold">Source</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-text-muted text-xs">
                    <Github className="w-4 h-4" />
                    <span>Confidential</span>
                  </span>
                )}
                
                {hasDemo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-text-primary hover:text-primary transition-colors duration-300 font-bold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs">Live Demo</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-text-muted text-xs cursor-not-allowed">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo Coming Soon</span>
                  </span>
                )}
              </div>
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Holographic Architecture Panel Modal (Preserved as deep dark terminal for aesthetic contrast) */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-3xl bg-[#0a0a0f] border border-primary/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden max-h-[90vh] overflow-y-auto font-mono text-sm text-slate-100"
            >
              {/* Sci-Fi Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none opacity-40 bg-[size:100%_4px,6px_100%]" />
              
              {/* Panel Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

              {/* Close Button */}
              <button
                onClick={() => setIsPanelOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Header */}
              <div className="border-b border-primary/20 pb-4 mb-6">
                <span className="text-xs text-primary font-bold tracking-wider">// HOLOGRAPHIC SYSTEM DIAGRAM</span>
                <h3 className="text-2xl font-bold text-white mt-1 flex items-center gap-3">
                  {project.title}
                  {project.isAiPowered && (
                    <span className="px-2 py-0.5 text-xs bg-accent/20 text-accent border border-accent/30 rounded font-semibold">
                      AI Powered
                    </span>
                  )}
                </h3>
              </div>

              {/* Details grid */}
              <div className="space-y-6">
                
                {/* Problem & Solution block */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <span className="text-xs text-red-400 font-bold block mb-1">➔ CHALLENGE PROFILE</span>
                    <p className="text-slate-300 leading-relaxed">{specs.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                    <span className="text-xs text-green-400 font-bold block mb-1">➔ RESOLUTION ENGINE</span>
                    <p className="text-slate-300 leading-relaxed">{specs.solution}</p>
                  </div>
                </div>

                {/* Architecture Panel */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <span className="text-xs text-primary font-bold block mb-2 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" /> ARCHITECTURAL PATHWAYS
                  </span>
                  <div className="p-3 bg-black/40 rounded border border-white/5 text-center font-bold text-white select-all">
                    {specs.architecture}
                  </div>
                </div>

                {/* Optimization & Impact Metrics */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-slate-400 font-bold block mb-2 flex items-center gap-1.5">
                      ⚙ PERFORMANCE BENCHMARKS
                    </span>
                    <p className="text-slate-300 leading-relaxed">{specs.optimizations}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-secondary/15 to-transparent border border-secondary/20">
                    <span className="text-xs text-secondary font-bold block mb-2 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5" /> IMPACT PROFILE
                    </span>
                    <p className="text-slate-300 leading-relaxed">{specs.impact}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <span className="text-xs text-slate-400 font-bold block mb-3">DEPLOYED UTILITIES</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/15 text-xs text-slate-300 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel Actions */}
              <div className="border-t border-primary/20 pt-6 mt-6 flex justify-between items-center">
                <span className="text-xs text-slate-500">SYSTEM STATUS: OPERATIONAL</span>
                <div className="flex gap-4">
                  {hasGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/15 hover:border-primary hover:text-primary transition-colors rounded text-xs flex items-center gap-2 text-slate-300"
                    >
                      <Github className="w-3.5 h-3.5" /> Repository
                    </a>
                  )}
                  {hasDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary text-primary transition-all rounded text-xs flex items-center gap-2 font-bold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Activate Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Rocket, Lightbulb, GraduationCap, X } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';

export const About = () => {
  const [activeMemory, setActiveMemory] = useState(null);

  const memories = [
    {
      id: 'experience',
      title: 'Professional Background',
      icon: Code,
      short: 'Creating high-fidelity React interfaces and AI integrations.',
      details: 'AI Frontend Engineer specialized in architecting production-grade React clients, robust state systems, and seamless AI workflow interfaces at ReachCopilot. Focused on delivering fluid user experiences, modular design systems, and efficient API integration patterns.',
      badge: '2+ Years Exp'
    },
    {
      id: 'mission',
      title: 'Product Engineering Mission',
      icon: Rocket,
      short: 'Bridging premium user experiences with solid backend logic.',
      details: 'My mission is to construct high-performance, responsive web applications. I bridge the gap between pixel-perfect React UI components and highly optimized Python/Django APIs, ensuring secure endpoints and streamlined database models.',
      badge: 'Product Engineer'
    },
    {
      id: 'philosophy',
      title: 'Clean Code Philosophy',
      icon: Lightbulb,
      short: 'Component composition, modularity, and database efficiency.',
      details: 'I advocate for clean, type-safe development patterns. This means writing reusable custom React hooks, keeping component concerns decoupled, and indexing/optimizing Django database queries to guarantee fast execution speeds.',
      badge: 'Clean Architect'
    },
    {
      id: 'learning',
      title: 'Technical Mentorship & Training',
      icon: GraduationCap,
      short: 'Mentoring and teaching core web engineering stacks.',
      details: 'Instructed and mentored 50+ students in modern web engineering, covering React state management, component hierarchies, Python/Django REST API structures, and relational SQL database modeling. Led code review sessions and team-based mock project deliveries.',
      badge: '50+ Mentored'
    }
  ];

  return (
    <SectionWrapper id="about" className="bg-surface/30 relative overflow-hidden py-24">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Me & <span className="gradient-text">Engineering DNA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Explore my engineering background, core development principles, and technical philosophies using the interactive memory nodes.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Memories Floating Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {memories.map((memory, index) => {
              const Icon = memory.icon;
              return (
                <motion.div
                  key={memory.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  animate={{ 
                    y: activeMemory === null ? [0, -8, 0] : 0 
                  }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setActiveMemory(memory)}
                  className="cursor-pointer"
                >
                  <Card 
                    hover={true} 
                    className={`h-full backdrop-blur-md relative overflow-hidden group transition-all duration-300 ${
                      activeMemory?.id === memory.id ? '!border-primary !bg-primary/10 shadow-md shadow-primary/5' : 'hover:!border-primary/50'
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-primary">
                        {memory.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {memory.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {memory.short}
                    </p>

                    <div className="mt-4 text-xs text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Expand memory Protocol →
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Active Detail Display */}
          <div className="relative min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeMemory ? (
                <motion.div
                  key={activeMemory.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl backdrop-blur-md">
                    {/* Glowing Accent */}
                    <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                    
                    <button
                      onClick={() => setActiveMemory(null)}
                      className="absolute top-4 right-4 text-text-muted hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors border border-white/10"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl">
                        {(() => {
                          const Icon = activeMemory.icon;
                          return <Icon className="w-6 h-6" />;
                        })()}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">
                          {activeMemory.title}
                        </h3>
                        <p className="text-text-muted text-sm">{activeMemory.badge}</p>
                      </div>
                    </div>

                    <p className="text-text-secondary text-lg leading-relaxed mb-6 font-medium">
                      {activeMemory.details}
                    </p>

                    <div className="border-t border-white/10 pt-6 flex flex-wrap gap-3 items-center text-sm text-text-muted">
                      <span>Protocol Status:</span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center p-8 border border-dashed border-white/10 rounded-2xl w-full flex flex-col items-center justify-center min-h-[320px] bg-surface/30"
                >
                  <div className="w-16 h-16 rounded-full border border-dashed border-white/10 flex items-center justify-center text-text-muted mb-4 animate-pulse">
                    🔮
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Neural Memory Terminal
                  </h3>
                  <p className="text-text-secondary text-sm max-w-xs mx-auto">
                    Select a memory node from the grid to initialize the extraction protocol and load details.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

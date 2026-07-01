import { motion } from 'framer-motion';
import { Boxes, Gauge, Accessibility, Maximize, Code, Compass, FlaskConical, Brain } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';

export const Principles = () => {
  const principlesList = [
    {
      icon: Boxes,
      title: 'Component Architecture',
      desc: 'Modular, composable react building blocks leveraging component composition patterns rather than heavy inheritance cascades.'
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      desc: 'Targeting 60 FPS, utilizing bundle virtualization, code-splitting, lazy loading, and lightweight custom WebGL shaders.'
    },
    {
      icon: Accessibility,
      title: 'Accessibility & A11y',
      desc: 'Ensuring keyboard navigability, contrast compliance, aria landmarks, semantic structure, and respect for reduced motion queries.'
    },
    {
      icon: Maximize,
      title: 'Scalability & Structure',
      desc: 'Feature-based folder architecture that easily accommodates code scaling, automated static builds, and strict linter rules.'
    },
    {
      icon: Code,
      title: 'Clean Code Standards',
      desc: 'Writing self-documenting code, avoiding magic numbers, isolating side-effects, and building declarative React hooks.'
    },
    {
      icon: Compass,
      title: 'Consistent Design Systems',
      desc: 'Using predefined tokens, strict HSL custom color spaces, typography scales, and a dark-mode only technical aesthetic.'
    },
    {
      icon: FlaskConical,
      title: 'Testing & Verification',
      desc: 'Rigorous manual walkthrough verification, console error monitoring, build auditing, and responsive layout QA.'
    },
    {
      icon: Brain,
      title: 'AI Integration Flow',
      desc: 'Leveraging next-gen developer agents (Cursor AI, Claude Code, OpenCode) to double code throughput without sacrificing quality.'
    }
  ];

  return (
    <SectionWrapper
      id="principles"
      title="Engineering Principles"
      subtitle="Guiding protocols and standards implemented across my development stack"
      className="bg-dark py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.02),transparent_50%)] pointer-events-none" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 relative z-10">
        {principlesList.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full border border-white/10 bg-surface p-6 shadow-sm hover:border-accent/40 transition-colors group relative overflow-hidden">
                {/* Micro energy line on top of card */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {principle.title}
                </h3>
                
                <p className="text-text-secondary text-xs leading-relaxed font-medium">
                  {principle.desc}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

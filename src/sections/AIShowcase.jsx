import { motion } from 'framer-motion';
import { Brain, Bot, Zap, Code } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

export const AIShowcase = () => {
  const aiAgents = [
    { name: "Cursor AI", icon: Bot, description: "AI-powered code generation, refactoring, and intelligent autocomplete for faster development" },
    { name: "Claude Code", icon: Brain, description: "Advanced code assistance, debugging, and architectural recommendations" },
    { name: "OpenCode", icon: Zap, description: "Workflow automation and task completion with AI-driven efficiency" },
    { name: "OpenClaw", icon: Code, description: "Multi-agent orchestration and seamless integration across tools" }
  ];

  return (
    <SectionWrapper
      id="ai-showcase"
      title="AI Agent Capabilities"
      subtitle="Leveraging cutting-edge AI agents to build intelligent applications"
      className="bg-gradient-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {portfolioData.aiProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Card className="h-full relative overflow-hidden group border border-white/10 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {project.name}
                  </h3>
                </div>

                <p className="text-text-secondary text-sm mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6 font-mono text-xs">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-lg font-bold text-primary mb-1">
                        {value}
                      </div>
                      <div className="text-[10px] text-text-muted capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AI Agent Tools Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-surface rounded-2xl p-8 md:p-12 border border-white/10 shadow-md"
      >
        <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
          AI Agent Toolkit
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiAgents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-text-primary">
                  {agent.name}
                </h4>
                <p className="text-text-secondary text-xs leading-relaxed font-medium">
                  {agent.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

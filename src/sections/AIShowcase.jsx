import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaBolt, FaCode } from 'react-icons/fa';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

export const AIShowcase = () => {
  const aiAgents = [
    { name: "Cursor AI", description: "AI-powered code generation, refactoring, and intelligent autocomplete for faster development" },
    { name: "Claude Code", description: "Advanced code assistance, debugging, and architectural recommendations" },
    { name: "OpenCode", description: "Workflow automation and task completion with AI-driven efficiency" },
    { name: "OpenClaw", description: "Multi-agent orchestration and seamless integration across tools" }
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
            <Card className="h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <FaBrain className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {project.name}
                  </h3>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 rounded-lg bg-white/5">
                      <div className="text-lg font-bold text-primary mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-text-muted capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
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
        className="bg-surface rounded-2xl p-8 md:p-12 border border-white/10"
      >
        <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
          AI Agent Toolkit
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiAgents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <FaCode className="text-2xl text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-text-primary">
                {agent.name}
              </h4>
              <p className="text-text-muted text-sm">
                {agent.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

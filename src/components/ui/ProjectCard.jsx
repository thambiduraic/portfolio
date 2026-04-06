import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaRobot } from 'react-icons/fa';
import { Card } from '../ui/Card';

export const ProjectCard = ({ project, index }) => {
  const hasGithub = project.github && project.github.trim() !== '';
  const hasDemo = project.demo && project.demo.trim() !== '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full flex flex-col">
        <div className="flex-grow">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            {project.isAiPowered && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-accent/20 text-accent border border-accent/30 rounded-full">
                <FaRobot className="text-xs" />
                AI
              </span>
            )}
            {project.isTeamProject && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                <FaUsers className="text-xs" />
                Team Project
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold mb-3 text-text-primary">
            {project.title}
          </h3>

          {project.teamRole && (
            <p className="text-sm text-secondary mb-3">
              {project.teamRole}
            </p>
          )}
          
          <p className="text-text-secondary mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
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

        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300"
            >
              <FaGithub />
              <span className="text-sm font-medium">Code</span>
            </a>
          ) : (
            <span className="flex items-center gap-2 text-text-muted text-sm">
              <FaGithub />
              <span>Confidential</span>
            </span>
          )}
          
          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300"
            >
              <FaExternalLinkAlt />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-white/5 text-text-muted border border-white/10 rounded-lg cursor-not-allowed">
              <FaExternalLinkAlt />
              <span>Coming Soon</span>
            </span>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

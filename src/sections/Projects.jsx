import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { ProjectCard } from '../components/ui/ProjectCard';
import { portfolioData } from '../data/portfolio';

export const Projects = () => {
  const featuredProjects = portfolioData.projects.filter(p => p.featured);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Production-ready applications built with modern tech stacks and AI integration"
    >
      {/* Featured Projects */}
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 text-text-primary"
        >
          Featured Work
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

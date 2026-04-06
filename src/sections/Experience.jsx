import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

export const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="A journey of growth and impactful contributions"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent" />

        {/* Timeline items */}
        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:pr-12`}>
                <Card className="inline-block w-full md:w-auto">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="flex items-center gap-2 mb-2 md:justify-end">
                      <FaBriefcase className="text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        {exp.company}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-4 md:justify-end">
                      <FaCalendar />
                      <span>{exp.period}</span>
                    </div>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {exp.technologies.map((tech) => (
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
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark z-10" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

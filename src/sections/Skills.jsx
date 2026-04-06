import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

export const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', skills: portfolioData.skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', skills: portfolioData.skills.backend, color: 'from-green-500 to-emerald-500' },
    { title: 'AI & Machine Learning', skills: portfolioData.skills.ai, color: 'from-purple-500 to-pink-500' },
    { title: 'Tools & DevOps', skills: portfolioData.skills.tools, color: 'from-orange-500 to-red-500' },
  ];

  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return Icon || Icons.FaCode;
  };

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="A comprehensive toolkit built over years of hands-on experience"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
          >
            <Card className="h-full">
              <div className={`inline-block px-4 py-2 mb-6 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                <h3 className="text-xl font-bold text-text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      <IconComponent className="text-2xl text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-text-primary">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

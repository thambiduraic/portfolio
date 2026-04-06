import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

export const About = () => {
  const stats = [
    { icon: FaCode, value: portfolioData.personal.stats.yearsExperience + '+', label: 'Years Experience' },
    { icon: FaRocket, value: portfolioData.personal.stats.projectsCompleted + '+', label: 'Projects Delivered' },
    { icon: FaLightbulb, value: portfolioData.personal.stats.technologies + '+', label: 'Technologies' },
  ];

  return (
    <SectionWrapper id="about" className="bg-surface/50">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-6" />
            <div className="absolute inset-0 bg-surface rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-surface-light to-surface flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">TC</span>
                  </div>
                  <p className="text-text-muted text-sm">AI Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            I'm <span className="text-text-primary font-medium">Thambidurai Chennaiyan</span>, an AI Full Stack Developer leveraging <span className="text-primary">Cursor AI</span>, <span className="text-primary">Claude Code</span>, <span className="text-primary">OpenCode</span>, and <span className="text-primary">OpenClaw</span> to build scalable SaaS and AI-powered web applications.
          </p>

          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            My core expertise spans <span className="text-primary">React</span>, <span className="text-primary">Flask</span>, <span className="text-primary">Django</span>, and <span className="text-primary">PostgreSQL</span>. I've built production applications including an AI-powered expense tracker SaaS and led the frontend development of a cattle feed management system.
          </p>

          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            As <span className="text-secondary font-medium">Frontend Lead</span> on the Cattle Feed Management System, I collaborated with a Java backend team to deliver a scalable farm management solution with AI-driven feed optimization for small-to-medium farms.
          </p>

          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            During my time at <span className="text-text-primary font-medium">Nschool Academy</span>, I trained 50+ students and mentored multiple real-world projects, emphasizing clean code, scalable architecture, and AI-assisted development practices.
          </p>

          {/* Education & Training Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <FaGraduationCap className="text-primary" />
              <span className="text-sm text-text-secondary">B.E Computer Science</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <FaUsers className="text-secondary" />
              <span className="text-sm text-text-secondary">50+ Students Trained</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} hover={false} className="text-center p-4">
                <stat.icon className="text-2xl text-primary mb-2 mx-auto" />
                <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-text-muted">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-2 text-text-secondary">
            <span className="text-primary">●</span>
            <span>Available for new opportunities</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

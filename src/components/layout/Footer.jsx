import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: portfolioData.personal.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: portfolioData.personal.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-surface border-t border-white/10 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-text-primary font-semibold text-lg">
              {portfolioData.personal.name}
            </p>
            <p className="text-text-secondary text-sm mt-1">
              {portfolioData.personal.title}
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300"
          >
            Back to top <FaArrowUp />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-text-muted text-sm">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

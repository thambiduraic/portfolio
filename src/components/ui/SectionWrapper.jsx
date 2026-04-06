import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const SectionWrapper = ({ 
  children, 
  id, 
  className = '', 
  title,
  subtitle 
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-6 md:px-12 lg:px-20 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {title}
            </h2>
            {subtitle && (
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

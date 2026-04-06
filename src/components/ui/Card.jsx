import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Card = ({ 
  children, 
  className, 
  hover = true,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-surface border border-white/10 rounded-xl p-6",
        hover && "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

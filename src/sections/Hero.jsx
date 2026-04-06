import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { NeuralNetwork } from '../components/effects/NeuralNetwork';
import { Button } from '../components/ui/Button';
import { portfolioData } from '../data/portfolio';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-24">
      <NeuralNetwork />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight mt-8"
        >
          <span className="text-text-primary">Hi, I'm </span>
          <span className="gradient-text block mt-2">
            {portfolioData.personal.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {portfolioData.personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-text-muted mb-12 max-w-2xl mx-auto"
        >
          {portfolioData.personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto">
            <a href="#projects" className="flex items-center gap-2">
              View Projects
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#contact" className="flex items-center gap-2">
              Contact Me
            </a>
          </Button>
          <Button variant="ghost" size="lg" className="w-full sm:w-auto">
            <a href="/Thambidurai-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaDownload /> Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-text-muted rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mouse follower glow effect */}
      <div
        className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
    </section>
  );
};

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { portfolioData } from '../data/portfolio';
import { useState, useEffect } from 'react';
import { NeuralNetwork } from '../components/effects/NeuralNetwork';

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
      {/* 3D Neural Network Canvas Background */}
      <NeuralNetwork />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/0 via-dark/30 to-dark pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
      
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
          className="text-lg text-text-muted mb-12 max-w-2xl mx-auto font-medium"
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
            <a href={portfolioData.personal.resumeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download className="w-4 h-4" /> Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12"
        >
          <div className="animate-bounce flex justify-center">
            <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-text-muted rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mouse follower glow effect */}
      <div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
    </section>
  );
};

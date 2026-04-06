import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: FaGithub, href: portfolioData.personal.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: portfolioData.personal.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's work together to bring your ideas to life"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-text-primary">
            Let's Connect
          </h3>
          
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaEnvelope className="text-xl text-primary" />
              </div>
              <div>
                <div className="text-sm text-text-muted">Email</div>
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-text-primary hover:text-primary transition-colors"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaMapMarkerAlt className="text-xl text-primary" />
              </div>
              <div>
                <div className="text-sm text-text-muted">Location</div>
                <div className="text-text-primary">
                  {portfolioData.personal.location}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-sm text-text-muted mb-4">Follow me</div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary placeholder-text-muted"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary placeholder-text-muted"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary placeholder-text-muted resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <FaPaperPlane className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, TrendingUp } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

export const Experience = () => {
  const [activeStationId, setActiveStationId] = useState(portfolioData.experience[0].id);

  const stations = useMemo(() => {
    return portfolioData.experience.map((exp) => {
      if (exp.company === 'ReachCopilot') {
        return {
          ...exp,
          metrics: '40% Engagement Increase',
          achievements: 'Launched AI-powered marketing automation for non-technical users.',
          responsibilities: [
            'Built AI-powered marketing workflows using Cursor AI & Claude Code.',
            'Developed intuitive visual automation interfaces.',
            'Implemented robust dynamic media handling systems.'
          ]
        };
      } else {
        return {
          ...exp,
          metrics: '50+ Trained, 5+ Projects Mentored',
          achievements: 'Architected multiple SaaS dashboards from conception to deployment.',
          responsibilities: [
            'Architected full-stack dashboards using OpenCode & Cursor AI.',
            'Trained 50+ students on React, Django, and AI-assisted development.',
            'Mentored 5+ production-ready student capstone projects.'
          ]
        };
      }
    });
  }, []);

  const activeStation = stations.find((s) => s.id === activeStationId) || stations[0];

  return (
    <SectionWrapper
      id="experience"
      title="Work History & Experience"
      subtitle="Chronological track of professional employment and key business impact metrics"
      className="bg-dark relative overflow-hidden py-24"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Timeline Path (Stations Selector) */}
        <div className="lg:col-span-4 flex flex-col items-start relative pl-8 md:pl-12 border-l border-white/10 space-y-16 py-4">
          
          {/* Timeline Line Highlighter */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {stations.map((station, index) => {
            const isActive = station.id === activeStationId;
            return (
              <div key={station.id} className="relative w-full">
                
                {/* Station Node (Point) */}
                <button
                  onClick={() => setActiveStationId(station.id)}
                  className={`absolute -left-[41px] md:-left-[49px] w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 z-20 ${
                    isActive
                      ? 'bg-primary border-4 border-dark ring-4 ring-primary/25 scale-125 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                      : 'bg-surface border-2 border-white/10 hover:border-primary/50'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                </button>

                {/* Station Card Summary */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveStationId(station.id)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/10 border-primary text-text-primary shadow-sm shadow-primary/5'
                      : 'bg-surface border-white/10 text-text-secondary hover:border-white/25 hover:text-text-primary hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono">{station.period}</span>
                  </div>
                  <h4 className="text-lg font-bold">{station.company}</h4>
                  <p className="text-sm font-semibold">{station.role}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Illuminated Station Dashboard */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStationId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 backdrop-blur-md relative overflow-hidden shadow-lg border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent pointer-events-none" />

                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {activeStation.company}
                      </h3>
                      <p className="text-primary font-semibold">{activeStation.role}</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary font-bold">
                    {activeStation.period}
                  </span>
                </div>

                {/* Dashboard Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column: Responsibilities */}
                  <div>
                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" /> Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {activeStation.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed font-medium">
                          <span className="text-primary mt-1 text-xs">■</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Achievements & Metrics */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" /> Key Metrics & Impact
                      </h4>
                      <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 mb-4">
                        <span className="text-2xl font-extrabold text-primary block mb-1">
                          {activeStation.metrics}
                        </span>
                        <p className="text-xs text-text-secondary font-medium leading-relaxed">
                          {activeStation.achievements}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStation.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold bg-white/5 text-text-secondary border border-white/10 rounded-full hover:border-primary/45 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

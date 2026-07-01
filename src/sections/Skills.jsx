import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Layers, Server, Terminal, Database, Bot, Activity, Brain, GitBranch, Settings, Globe } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Code,
  Cpu,
  Layers,
  Server,
  Terminal,
  Database,
  Bot,
  Activity,
  Brain,
  GitBranch,
  Settings,
  Globe
};

// Dynamic skills list imported from centralized portfolio data config
const skillsData = portfolioData.skills;

const orbitCoordinates = {
  // Orbit 1: Inner (R=95)
  'React': { x: 95, y: 0 },
  'TypeScript': { x: 29, y: 90 },
  'JavaScript': { x: -77, y: 56 },
  'Redux': { x: -77, y: -56 },
  'Tailwind CSS': { x: 29, y: -90 },
  
  // Orbit 2: Middle (R=155) - Rebalanced for 7 nodes
  'Python': { x: 155, y: 0 },
  'Django': { x: 97, y: 121 },
  'Node.js': { x: -34, y: 151 },
  'Express.js': { x: -140, y: 67 },
  'Supabase': { x: -140, y: -67 },
  'PostgreSQL': { x: -35, y: -151 },
  'SQL': { x: 96, y: -121 },
  
  // Orbit 3: Outer (R=215)
  'Cursor AI': { x: 208, y: 56 },
  'Claude Code': { x: 108, y: 186 },
  'OpenCode': { x: -56, y: 208 },
  'OpenClaw': { x: -186, y: 108 },
  'OpenAI API': { x: -208, y: -56 },
  'Git': { x: -108, y: -186 },
  'VS Code': { x: 56, y: -208 },
  'Postman': { x: 186, y: -108 }
};

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeGroup, setActiveGroup] = useState('All');

  const groups = ['All', 'Frontend', 'Backend', 'AI', 'Database', 'Tools'];

  return (
    <SectionWrapper
      id="skills"
      title="Core Competencies & Stack"
      subtitle="Concentric technology orbital network charting frontend, backend, and AI capabilities."
      className="bg-surface/10 py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Orbital Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => {
                setActiveGroup(group);
                setSelectedSkill(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 ${
                activeGroup === group
                  ? 'bg-primary border-primary text-white font-bold ring-2 ring-primary/25 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'bg-white/5 border-white/10 text-text-secondary hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {group.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Orbital Core visualization */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[380px] xs:min-h-[420px] md:min-h-[480px] py-6 overflow-hidden">
            <div className="scale-[0.68] xs:scale-[0.8] sm:scale-90 md:scale-100 origin-center relative w-[480px] h-[480px] flex items-center justify-center transition-all duration-300">
              <style>{`
                @keyframes skillDash {
                  to {
                    stroke-dashoffset: -20;
                  }
                }
                .animate-skill-dash {
                  animation: skillDash 1.2s linear infinite;
                }
              `}</style>
              
              {/* Pulsing Glowing AI Core */}
              <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_65px_rgba(59,130,246,0.55),0_0_100px_rgba(139,92,246,0.3)] animate-pulse z-10">
                <span className="text-white text-xs font-bold font-mono tracking-wider text-center">
                  AI<br />CORE
                </span>
              </div>

              {/* Orbit paths */}
              <div className="absolute border border-dashed border-white/20 rounded-full w-[190px] h-[190px] pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.02)]" />
              <div className="absolute border border-dashed border-white/20 rounded-full w-[310px] h-[310px] pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.02)]" />
              <div className="absolute border border-dashed border-white/20 rounded-full w-[430px] h-[430px] pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.02)]" />

              {/* Constellation background and selected telemetry overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Concentric colored orbit overlay lines for 30% more visual definition */}
                <circle cx="240" cy="240" r="95" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="240" cy="240" r="155" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="240" cy="240" r="215" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" strokeDasharray="4 4" />

                {/* Floating background star particles (increased count & brightness) */}
                <circle cx="80" cy="120" r="2" className="fill-primary/30 animate-pulse" />
                <circle cx="400" cy="80" r="2.5" className="fill-secondary/25 animate-[pulse_3s_infinite]" />
                <circle cx="100" cy="380" r="2" className="fill-accent/30 animate-[pulse_4s_infinite]" />
                <circle cx="380" cy="400" r="2.5" className="fill-primary/25 animate-[pulse_2.5s_infinite]" />
                <circle cx="50" cy="240" r="2" className="fill-secondary/35 animate-[pulse_3.5s_infinite]" />
                <circle cx="430" cy="260" r="2.5" className="fill-accent/30 animate-pulse" />
                <circle cx="240" cy="50" r="1.5" className="fill-primary/20 animate-pulse" />
                <circle cx="240" cy="430" r="1.5" className="fill-secondary/20 animate-pulse" />
                <circle cx="60" cy="100" r="2" className="fill-accent/25 animate-[pulse_3s_infinite]" />
                <circle cx="420" cy="380" r="2" className="fill-primary/25 animate-[pulse_4s_infinite]" />

                {/* Laser connecting lines if skill is selected */}
                {selectedSkill && orbitCoordinates[selectedSkill.name] && (
                  <g>
                    {/* Bloom Glow laser line (Thick) */}
                    <line
                      x1="240"
                      y1="240"
                      x2={240 + orbitCoordinates[selectedSkill.name].x}
                      y2={240 + orbitCoordinates[selectedSkill.name].y}
                      stroke="#3B82F6"
                      strokeWidth="6"
                      strokeDasharray="4 4"
                      className="stroke-primary/10 blur-[3px] animate-skill-dash"
                    />
                    {/* Outer Glow Laser line (Medium) */}
                    <line
                      x1="240"
                      y1="240"
                      x2={240 + orbitCoordinates[selectedSkill.name].x}
                      y2={240 + orbitCoordinates[selectedSkill.name].y}
                      stroke="#3B82F6"
                      strokeWidth="3.5"
                      strokeDasharray="4 4"
                      className="stroke-primary/25 blur-[1px] animate-skill-dash"
                    />
                    {/* Core Laser line (Thin/Sharp) */}
                    <line
                      x1="240"
                      y1="240"
                      x2={240 + orbitCoordinates[selectedSkill.name].x}
                      y2={240 + orbitCoordinates[selectedSkill.name].y}
                      stroke="#06b6d4"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                      className="stroke-secondary animate-skill-dash"
                    />
                  </g>
                )}
              </svg>

              {/* Skills Nodes orbiting around the core */}
              {skillsData.map((skill) => {
                const Icon = iconMap[skill.icon] || Code;
                const isSelected = selectedSkill?.name === skill.name;
                const coords = orbitCoordinates[skill.name] || { x: 0, y: 0 };
                const isDimmed = activeGroup !== 'All' && skill.group !== activeGroup;

                return (
                  <motion.button
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isDimmed ? 0.25 : 1,
                      scale: isDimmed ? 0.9 : isSelected ? 1.05 : 1,
                      x: [0, Math.sin(coords.x) * 6, 0],
                      y: [0, Math.cos(coords.y) * 6, 0]
                    }}
                    transition={{
                      x: {
                        duration: 4 + (coords.x % 3),
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      y: {
                        duration: 5 + (coords.y % 2),
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 }
                    }}
                    style={{
                      position: 'absolute',
                      left: `${240 + coords.x}px`,
                      top: `${240 + coords.y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => setSelectedSkill(skill)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono transition-all duration-300 z-20 ${
                      isSelected
                        ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(59,130,246,0.3)] z-30'
                        : isDimmed
                        ? 'border-white/5 text-text-muted hover:opacity-40'
                        : 'bg-surface border-white/10 text-text-secondary hover:border-primary/50 hover:text-text-primary hover:shadow-[0_0_10px_rgba(59,130,246,0.15)]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[10px] font-semibold">{skill.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Console Details */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-8 backdrop-blur-md relative overflow-hidden font-mono text-sm shadow-lg border-white/10">
                    {/* Glowing grid effect */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none" />

                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl">
                        {(() => {
                          const Icon = iconMap[selectedSkill.icon] || Code;
                          return <Icon className="w-6 h-6" />;
                        })()}
                      </div>
                      <div>
                        <span className="text-[10px] text-primary font-bold">COMPETENCY VERIFIED</span>
                        <h3 className="text-xl font-bold text-text-primary mt-0.5">
                          {selectedSkill.name}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <span className="text-xs text-text-muted font-bold block mb-2">// TECH_CATEGORY</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-primary font-bold">
                          {selectedSkill.group.toUpperCase()}
                        </span>
                      </div>

                      <div>
                        <span className="text-xs text-text-muted font-bold block mb-2">// PRACTICAL_APPLICATIONS</span>
                        <div className="space-y-2">
                          {selectedSkill.projects.map((proj, i) => (
                            <div key={i} className="flex items-start gap-2 text-text-secondary font-medium">
                              <span className="text-primary mt-1">➔</span>
                              <span className="leading-relaxed">{proj}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center p-8 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center min-h-[300px] bg-surface/30"
                >
                  <div className="w-14 h-14 rounded-full border border-dashed border-white/10 flex items-center justify-center text-text-muted mb-4 animate-pulse">
                    📡
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 font-mono">
                    Orbital HUD Console
                  </h3>
                  <p className="text-text-secondary text-sm max-w-xs mx-auto font-mono">
                    Click any node in the Skills Universe to inspect its project deployment history and dependencies.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};

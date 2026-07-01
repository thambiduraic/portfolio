import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SceneLoader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('booting'); // 'booting', 'ready', 'fadeout'

  const onCompleteRef = useRef(onComplete);
  
  // Sync the ref with the latest prop value
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const bootSequence = [
      { text: 'Initializing Neural Network...', delay: 300 },
      { text: 'Loading 3D Core Components...', delay: 800 },
      { text: 'Compiling WebGL Interfaces...', delay: 1400 },
      { text: 'Connecting Intelligence Nodes...', delay: 2000 },
      { text: 'System Check: SUCCESS.', delay: 2500 },
      { text: 'Ready.', delay: 2900 }
    ];

    // Add logs one by one
    const timers = bootSequence.map((step) => 
      setTimeout(() => {
        setLogs((prev) => [...prev, step.text]);
      }, step.delay)
    );

    // Simulate progress bar percentage
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    // Fadeout transition triggers after all steps are complete
    const readyTimer = setTimeout(() => {
      setPhase('ready');
    }, 3300);

    const fadeoutTimer = setTimeout(() => {
      setPhase('fadeout');
    }, 3900);

    const completeTimer = setTimeout(() => {
      if (onCompleteRef.current) onCompleteRef.current();
    }, 4500);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
      clearTimeout(readyTimer);
      clearTimeout(fadeoutTimer);
      clearTimeout(completeTimer);
    };
  }, []); // Run exactly once on mount

  return (
    <AnimatePresence>
      {phase !== 'fadeout' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-[#020204] flex flex-col items-center justify-center font-mono p-6 text-sm select-none"
        >
          <div className="w-full max-w-md bg-black/40 border border-white/5 rounded-lg p-6 shadow-2xl backdrop-blur-md">
            {/* Terminal Top Bar */}
            <div className="flex items-center gap-1.5 mb-6 border-b border-white/5 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-xs text-text-muted ml-2">ai_core_init.sh</span>
            </div>

            {/* Terminal Screen Output */}
            <div className="h-44 flex flex-col justify-start gap-2 overflow-y-auto mb-6 text-left">
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary text-xs select-none">{">"}</span>
                  <span className={log === 'Ready.' ? 'text-secondary font-bold text-base' : 'text-text-secondary'}>
                    {log}
                  </span>
                </div>
              ))}
              {phase === 'booting' && (
                <span className="animate-pulse text-primary font-bold">█</span>
              )}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden mb-2">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-text-muted">
              <span>INITIALIZING SYSTEM</span>
              <span>{progress} %</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

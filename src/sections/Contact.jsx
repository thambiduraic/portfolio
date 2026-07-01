import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Terminal, Wifi } from 'lucide-react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { portfolioData } from '../data/portfolio';

// Custom Lucide-styled SVG Brand Icons
const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" h="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [consoleLogs, setConsoleLogs] = useState(['Initialized AI Command Center link.', 'Awaiting user input parameters...']);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    setConsoleLogs((prev) => [
      ...prev,
      '[SYS] Connecting to secure Telegram uplink...',
      '[SYS] Encrypting message envelope...'
    ]);

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setConsoleLogs((prev) => [
          ...prev,
          '[SYS] Routing payload through API gateway...',
          '[SYS] Transmission accepted by Telegram gateway.',
          '[SYS] Protocol completed: SUCCESS!'
        ]);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Gateway response error');
      }
    } catch (error) {
      setConsoleLogs((prev) => [
        ...prev,
        `[ERR] Transmission failed: ${error.message}`,
        '[SYS] Redirecting to backup mailto protocol routing...'
      ]);

      const subject = encodeURIComponent(`Message from Portfolio - ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (isSent) {
      setIsSent(false);
    }

    if (value && value.length === 1) {
      setConsoleLogs((prev) => {
        const logMsg = `[SYS] Buffered parameter: ${name.toUpperCase()} initialized.`;
        if (prev.includes(logMsg)) return prev;
        return [...prev, logMsg];
      });
    }
  };

  const socialLinks = [
    { icon: Github, href: portfolioData.personal.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.personal.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Contact & Command Center"
      subtitle="Get in touch for opportunities, collaborations, or direct inquiries."
      className="bg-surface/20 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.02),transparent_40%)] pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 relative z-10">

        {/* Command Center Telemetry Data */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-3xl font-extrabold mb-6 text-text-primary flex items-center gap-3">
              Telemetry Status <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> ONLINE
              </span>
            </h3>

            <p className="text-text-secondary text-base mb-8 leading-relaxed font-mono">
              // Outbound connection channel open. Specify parameter inputs on the control console to dispatch messages directly to target directory.
            </p>

            <div className="space-y-6 mb-8 font-mono text-sm">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/10 hover:border-primary/30 hover:shadow-md transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-text-muted font-bold">HOST_DIRECT_MAIL</div>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-text-primary hover:text-primary transition-colors text-sm font-semibold"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/10 hover:border-primary/30 hover:shadow-md transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-text-muted font-bold">LOCATION_GPS</div>
                  <div className="text-text-primary text-sm font-semibold">
                    {portfolioData.personal.location} (12.5266° N, 78.2149° E)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social telemetry endpoints */}
          <div>
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4 flex items-center gap-1.5 font-bold">
              <Wifi className="w-4 h-4 text-primary animate-pulse" /> Telemetry Endpoints
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="w-12 h-12 rounded-xl bg-surface border border-white/10 hover:border-primary/50 text-text-secondary hover:text-primary flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Command Console (Interactive Terminal - Kept dark for dashboard aesthetic contrast) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border border-white/10 bg-black/90 overflow-hidden relative shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#111115]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs text-slate-300">guest@ai-core:~/transmission</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Live Terminal logs */}
            <div className="px-4 sm:px-6 py-4 bg-[#050508] border-b border-white/10 h-32 overflow-y-auto font-mono text-xs text-green-400 space-y-1">
              {consoleLogs.map((log, index) => (
                <div key={index} className="leading-relaxed">
                  {log}
                </div>
              ))}
              {isSending && <span className="inline-block animate-ping">█</span>}
            </div>

            {/* Input parameters form */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6 font-mono text-sm text-slate-300">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  Your Name / PARAM_NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  Your Email / PARAM_EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  Your Message / MESSAGE_PAYLOAD
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSending}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500 transition-colors resize-none"
                  placeholder="Enter your message..."
                />
              </div>

              <div className="relative group">
                <Button
                  type="submit"
                  disabled={isSending || isSent}
                  className="w-full justify-center relative overflow-hidden font-bold flex items-center gap-2 py-3 bg-primary/20 border border-primary text-primary hover:bg-primary/30 transition-all rounded-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSending ? 'DISPATCHING MESSAGE...' : isSent ? 'TRANSMISSION COMPLETE' : 'Send Message / EXECUTE_SEND'}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

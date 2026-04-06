import { Layout } from './components/layout/Layout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { AIShowcase } from './sections/AIShowcase';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIShowcase />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;

import { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { SceneLoader } from './components/effects/SceneLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <SceneLoader onComplete={() => setIsLoading(false)} />
      ) : (
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Layout>
      )}
    </>
  );
}

export default App;

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import TechStack from './components/TechStack';
import Connect from './components/Connect';
import Background from './components/Background';

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Background />
      <Hero />
      <About />
      <TechStack />
      <Timeline />
      <Projects />
      <Connect />
    </main>
  );
}

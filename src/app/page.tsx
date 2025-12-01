import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load components for better performance
const Hero = dynamic(() => import('@/components/pages').then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const About = dynamic(() => import('@/components/pages').then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const Experience = dynamic(() => import('@/components/pages').then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const Works = dynamic(() => import('@/components/pages').then(mod => ({ default: mod.Works })), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const Contact = dynamic(() => import('@/components/pages').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

export default function Home(): React.ReactElement {
  return (
    <div className="xl:max-w-5xl mx-auto">
      <section
        id="home"
        className="min-h-screen xl:max-w-[992px] mx-auto flex items-center my-20 relative"
      >
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading hero...</div>}>
          <Hero />
        </Suspense>
      </section>
      <section id="about" className="min-h-screen py-20">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading about...</div>}>
          <About />
        </Suspense>
      </section>
      <section id="experience" className="min-h-screen py-20">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading experience...</div>}>
          <Experience />
        </Suspense>
      </section>
      <section id="work" className="min-h-screen py-20">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading works...</div>}>
          <Works />
        </Suspense>
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center py-20"
      >
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading contact...</div>}>
          <Contact />
        </Suspense>
      </section>
    </div>
  );
}

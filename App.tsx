import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Courses from './components/Courses';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Courses />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
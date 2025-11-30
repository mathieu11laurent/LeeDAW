import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';
import CEESimulator from './components/CEESimulator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-accent-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CEESimulator />
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
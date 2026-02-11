import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoGallery from './components/VideoGallery';
import AIImageEditor from './components/AIImageEditor';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Each component has a matching ID for the Navbar links */}
        <Hero />
        <div className="relative">
          <Services />
          <VideoGallery />
          <AIImageEditor />
          <Portfolio />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
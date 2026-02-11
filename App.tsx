import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import VideoGallery from './components/VideoGallery.tsx';
import AIImageEditor from './components/AIImageEditor.tsx';
import Portfolio from './components/Portfolio.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
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
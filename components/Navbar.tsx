import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'videos', 'ai-editor', 'portfolio', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust detection threshold for better responsiveness
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Videos', id: 'videos' },
    { name: 'AI Studio', id: 'ai-editor' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo Section - Optimized for mobile width */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex-shrink-0 group text-left max-w-[60%] sm:max-w-none focus:outline-none"
          >
            <div className="flex flex-col">
              <span className={`text-lg md:text-2xl font-bold font-serif tracking-tight transition-all duration-500 leading-none whitespace-nowrap ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Bhai Bhai
              </span>
              <span className={`text-[7px] md:text-[9px] uppercase tracking-[0.4em] font-bold font-sans mt-1 md:mt-1.5 transition-all duration-500 whitespace-nowrap ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>
                Decorators & Caterers
              </span>
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`group relative text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-300 ${
                  isScrolled 
                    ? (activeSection === link.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600') 
                    : (activeSection === link.id ? 'text-amber-400' : 'text-white/70 hover:text-white')
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-amber-500 transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
              }`}
            >
              HIRE US
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-all duration-300 focus:outline-none ${
                isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-md'
              }`}
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-slate-900/98 backdrop-blur-3xl h-screen transition-all duration-500 z-[110] flex flex-col px-10 pt-28 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col space-y-6">
          <p className="text-amber-500 text-[10px] font-black tracking-[0.6em] uppercase mb-2 opacity-50">Discovery</p>
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-left text-4xl font-serif transition-all duration-500 transform ${
                activeSection === link.id ? 'text-amber-500 translate-x-4' : 'text-white hover:text-amber-500'
              } ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-10 mt-5 space-y-8 border-t border-white/10">
            <div className="flex gap-8">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 font-black tracking-widest text-[9px] uppercase hover:text-white transition-colors">FB</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 font-black tracking-widest text-[9px] uppercase hover:text-white transition-colors">IG</a>
              <a href={SOCIAL_LINKS.justdial} target="_blank" rel="noopener noreferrer" className="text-slate-400 font-black tracking-widest text-[9px] uppercase hover:text-white transition-colors">JD</a>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full py-5 bg-amber-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] text-center shadow-2xl active:scale-95 transition-transform"
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
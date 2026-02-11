
import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'services', 'videos', 'ai-editor', 'portfolio', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
      const offset = 70;
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
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-2xl shadow-xl py-2 md:py-3' 
        : 'bg-transparent py-5 md:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex-shrink-0 group text-left focus:outline-none relative z-[1001]"
          >
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold font-serif tracking-tight transition-colors duration-500 leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Bhai Bhai
              </span>
              <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.35em] font-black font-sans mt-1.5 transition-colors duration-500 ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>
                Decorators & Caterers
              </span>
            </div>
          </button>
          
          <div className="hidden lg:flex space-x-6 xl:space-x-10 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`group relative text-[9px] uppercase tracking-[0.3em] font-black transition-all duration-300 ${
                  isScrolled 
                    ? (activeSection === link.id ? 'text-amber-600' : 'text-slate-500 hover:text-amber-600') 
                    : (activeSection === link.id ? 'text-amber-400' : 'text-white/70 hover:text-white')
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-amber-500 transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? 'bg-slate-900 text-white shadow-xl' 
                  : 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-2xl shadow-rose-950/20'
              }`}
            >
              INQUIRE NOW
            </button>
          </div>

          <div className="lg:hidden relative z-[1001]">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-2xl transition-all duration-300 focus:outline-none shadow-sm ${
                isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-md border border-white/10'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#0a0806] transition-all duration-500 z-[1000] flex flex-col px-10 pt-32 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col space-y-8">
          <p className="text-amber-500/50 text-[10px] font-black tracking-[0.5em] uppercase border-b border-white/5 pb-4">Menu</p>
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-left text-4xl font-serif transition-all duration-500 transform ${
                activeSection === link.id ? 'text-amber-500 translate-x-4' : 'text-white/80 hover:text-white'
              } ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-12 mt-4 border-t border-white/10">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full py-5 bg-gradient-to-r from-amber-600 to-rose-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] shadow-2xl active:scale-95 transition-transform"
            >
              RESERVE YOUR DATE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

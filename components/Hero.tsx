
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0a0806]">
      {/* Background Container with Motion */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
            alt="Grand Bengali Wedding Decor" 
            className="w-full h-full object-cover animate-ken-burns opacity-60"
          />
        </div>
        
        {/* Cinematic Overlays - Darker at top to help navbar legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-[#0a0806] z-10"></div>
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay z-10"></div>
      </div>

      <style>{`
        @keyframes ken-burns-slow {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-ken-burns {
          animation: ken-burns-slow 35s ease-out infinite alternate;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        /* Specific Fix for Bengali character rendering/clipping across all browsers */
        .bengali-line {
          display: block;
          line-height: 1.6;
          padding-bottom: 0.1em;
          margin-bottom: -0.1em;
        }
      `}</style>

      {/* Content Wrapper - Using generous pt-40 to avoid navbar logo overlap completely on mobile */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto pt-40 pb-24 md:pt-48 flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
        
        {/* Redesigned Badge - Premium Glassmorphism with better contrast */}
        <div className="mb-10 md:mb-14 inline-flex items-center justify-center gap-3 px-6 md:px-10 py-3 md:py-4 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <span className="shrink-0 w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.8)]"></span>
          <span className="text-[9px] md:text-[11px] font-black tracking-[0.5em] md:tracking-[0.7em] text-white uppercase whitespace-nowrap">
            Premium Event Concierge
          </span>
        </div>
        
        {/* Heading - Responsive scaling with specific line spacing for Bengali script */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-bold font-serif text-white mb-8 tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,1)]">
          <span className="bengali-line">আপনার অনুষ্ঠান</span>
          <span className="bengali-line text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-100 to-amber-600 italic">আমাদের দায়িত্ব</span>
        </h1>
        
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-200 font-light mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed drop-shadow-lg italic px-4">
          "Timeless elegance, authentic heritage, and cinematic grandeur for your milestone moments in Jalpaiguri."
        </p>

        <div className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center items-center w-full sm:w-auto">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="group w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-amber-600 to-rose-600 text-white rounded-full font-bold transition-all shadow-2xl shadow-rose-950/40 flex items-center justify-center gap-3 active:scale-95 hover:brightness-110"
          >
            <span className="tracking-[0.3em] uppercase text-[10px] font-black">BOOK YOUR DATE</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 bg-white/5 hover:bg-white/10 text-white backdrop-blur-xl border border-white/20 rounded-full font-bold transition-all tracking-[0.3em] uppercase text-[10px] flex items-center justify-center shadow-xl font-black active:scale-95"
          >
            EXPLORE GALLERY
          </button>
        </div>
      </div>

      {/* Floating Scroll Indicator - Adjusted for better mobile visibility */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] text-amber-500 font-black uppercase tracking-[0.6em]">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5 animate-float">
          <div className="w-1.5 h-2.5 bg-amber-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

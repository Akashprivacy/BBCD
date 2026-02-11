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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#05070a]">
      {/* Background Container with Motion */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
            alt="Elite Bengali Wedding Backdrop" 
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>
        
        {/* Dynamic Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10"></div>
        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay z-10"></div>
      </div>

      <style>{`
        @keyframes ken-burns-slow {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.15) translate(-1%, -1%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-ken-burns {
          animation: ken-burns-slow 30s ease-out infinite alternate;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .hover-shine:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shine 0.6s ease-in-out;
        }
      `}</style>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-[9px] md:text-xs font-bold tracking-[0.5em] text-amber-400 uppercase">
            West Bengal's Elite Event Partner
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold font-serif text-white mb-6 leading-[1.2] drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
          আপনার অনুষ্ঠান <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 italic">আমাদের দায়িত্ব</span>
        </h1>
        
        <p className="text-base md:text-2xl text-slate-200 font-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md opacity-90">
          "ঐতিহ্যের ছোঁয়ায় সাজাবো আপনার জীবনের শ্রেষ্ঠ দিন"
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover-shine relative group w-full sm:w-auto px-12 py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold transition-all shadow-xl shadow-amber-900/20 flex items-center justify-center gap-3 overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 tracking-[0.3em] uppercase text-[10px]">BOOK YOUR DATE</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="group w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white backdrop-blur-2xl border border-white/20 rounded-full font-bold transition-all tracking-[0.3em] uppercase text-[10px] flex items-center justify-center gap-3 cursor-pointer"
          >
            VIEW PORTFOLIO
            <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <button onClick={() => scrollToSection('services')} className="flex flex-col items-center gap-3 group animate-float cursor-pointer focus:outline-none">
          <span className="text-[9px] text-amber-500/60 uppercase tracking-[0.5em] group-hover:text-amber-500 transition-colors">Scroll</span>
          <div className="relative w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-amber-500 rounded-full animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
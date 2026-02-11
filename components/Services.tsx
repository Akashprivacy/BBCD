
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Animated BG elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-amber-50 rounded-full mb-6">
            <span className="text-[10px] font-black tracking-[0.6em] text-amber-600 uppercase">
              Our Expertise
            </span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-serif text-slate-900 leading-tight">
            The Pinnacle of <span className="text-amber-700 italic">Grandeur</span>
          </h3>
          <p className="mt-8 text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            From royal palace themes to heritage catering, we bring a touch of class to every Jalpaiguri milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="group flex flex-col h-full bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 transition-all duration-700 hover:shadow-[0_60px_100px_-30px_rgba(120,60,0,0.15)] hover:-translate-y-4"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-bold text-white uppercase tracking-widest border border-white/20">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <div className="p-12 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                   </svg>
                </div>
                <h4 className="text-2xl font-bold font-serif text-slate-900 mb-6 mt-6 group-hover:text-amber-800 transition-colors text-center">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-10 flex-grow font-light text-center text-lg">
                  {service.description}
                </p>
                <div className="pt-8 border-t border-slate-200 text-center">
                  <a href="#contact" className="inline-flex items-center text-[10px] uppercase tracking-[0.4em] font-black text-slate-900 hover:text-amber-600 transition-all group/link">
                    Explore Now 
                    <span className="ml-2 group-hover/link:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

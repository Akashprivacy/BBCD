
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PORTFOLIO.map(item => item.category))];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] font-black tracking-[0.6em] text-amber-600 uppercase mb-4 px-5 py-2 bg-white rounded-full shadow-sm">
            Our Gallery
          </span>
          <h3 className="text-4xl md:text-6xl font-bold font-serif text-slate-900 mb-10 leading-tight">
            Curated <span className="text-amber-700 italic">Excellence</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                  filter === cat 
                    ? 'bg-slate-900 border-slate-900 text-white shadow-2xl scale-110 z-10' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-amber-500 hover:text-amber-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-4 animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="inline-block bg-amber-600 text-white text-[8px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                      {item.category}
                    </span>
                    <h4 className="text-white text-3xl font-bold font-serif leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a 
            href="https://www.instagram.com/bbdceventplanner/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-amber-600 transition-all group-hover:scale-110 shadow-xl shadow-slate-900/10">
               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 group-hover:text-amber-600 transition-colors">
              Daily Updates on Instagram
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

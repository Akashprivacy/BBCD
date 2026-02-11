
import React, { useState } from 'react';
import { VIDEOS } from '../constants';

const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-32 bg-[#0d0a08] relative overflow-hidden">
      {/* Background Ambience - Replaced black with warm brown/gold hues */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale"
          alt="Floral Texture"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a08] via-transparent to-[#0d0a08]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-amber-900/30 border border-amber-500/30 rounded-full mb-6">
              <span className="text-[10px] font-black tracking-[0.6em] text-amber-400 uppercase">
                Cinematic Library
              </span>
            </div>
            <h3 className="text-4xl md:text-7xl font-bold font-serif text-white leading-tight">
              Magic in <span className="text-amber-500 italic underline decoration-amber-500/30 underline-offset-8">Motion</span>
            </h3>
          </div>
          <div className="pb-4">
            <p className="text-slate-300 text-lg font-light max-w-xs leading-relaxed border-l-2 border-amber-500 pl-6 italic">
              Experience the atmosphere of West Bengal's most exclusive celebrations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {VIDEOS.map((video, idx) => (
            <div 
              key={video.id} 
              className="group relative bg-white/5 backdrop-blur-md rounded-[3rem] overflow-hidden border border-white/10 transition-all duration-700 hover:border-amber-500/40 hover:shadow-[0_40px_100px_-20px_rgba(245,158,11,0.2)] hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {activeVideo === video.id ? (
                  <div className="w-full h-full bg-black">
                    <video 
                      src={video.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-6 right-6 z-20 bg-black/60 hover:bg-amber-600 p-3 rounded-full backdrop-blur-md transition-all"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-amber-900/80 transition-all flex items-center justify-center">
                      <button 
                        onClick={() => setActiveVideo(video.id)}
                        className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-500 shadow-2xl relative"
                      >
                        <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-ping group-hover:hidden"></div>
                        <svg className="w-10 h-10 text-white fill-current relative z-10" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
                <div className="absolute top-8 left-8 z-10">
                   <div className="flex items-center gap-2.5 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-lg">
                     <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                     <span className="text-[9px] font-black uppercase tracking-widest text-white">BBDC Showcase</span>
                   </div>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">{video.category}</span>
                  <span className="text-white/20 text-[10px] font-black">4K CINEMATIC</span>
                </div>
                <h4 className="text-2xl font-bold font-serif text-white mb-8 leading-snug">
                  {video.title}
                </h4>
                <button 
                  onClick={() => setActiveVideo(video.id)}
                  className="w-full py-4 border border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-white hover:border-amber-500 transition-all flex items-center justify-center gap-4 group/btn"
                >
                  <span className="w-6 h-px bg-white/10 group-hover/btn:bg-amber-500 transition-all group-hover/btn:w-10"></span>
                  Play Reel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;

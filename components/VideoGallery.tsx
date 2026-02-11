
import React, { useState } from 'react';
import { VIDEOS } from '../constants';

const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-32 bg-[#05070a] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.05)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold tracking-[0.6em] text-indigo-400 uppercase mb-4 px-4 py-1 border border-indigo-400/20 rounded-full">
              Cinematic Moments
            </span>
            <h3 className="text-4xl md:text-6xl font-bold font-serif text-white leading-tight">
              Stories in <span className="text-indigo-400 italic">Motion</span>
            </h3>
          </div>
          <div className="pb-2">
            <p className="text-slate-400 text-lg font-light max-w-xs leading-relaxed border-l-2 border-indigo-500 pl-6">
              Experience the atmosphere of Jalpaiguri's most exclusive celebrations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {VIDEOS.map((video, idx) => (
            <div 
              key={video.id} 
              className="group relative bg-[#0d1016] rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-700 hover:border-indigo-500/30 hover:shadow-[0_0_80px_rgba(79,70,229,0.1)]"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {activeVideo === video.id ? (
                  <div className="w-full h-full bg-black">
                    <video 
                      src={video.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-contain"
                    />
                    <button 
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <button 
                        onClick={() => setActiveVideo(video.id)}
                        className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-amber-600 group-hover:border-amber-400 transition-all duration-500 shadow-2xl relative"
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:animate-none"></div>
                        <svg className="w-8 h-8 text-white fill-current relative z-10" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
                <div className="absolute top-6 left-6 z-10">
                   <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                     <span className="text-[8px] font-black uppercase tracking-widest text-white">Live Reel</span>
                   </div>
                </div>
              </div>
              
              <div className="p-10">
                <div className="text-indigo-400 text-[9px] font-bold uppercase tracking-[0.3em] mb-3">{video.category}</div>
                <h4 className="text-xl font-bold font-serif text-white mb-6 leading-snug">
                  {video.title}
                </h4>
                <button 
                  onClick={() => setActiveVideo(video.id)}
                  className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-white transition-colors"
                >
                  <span className="w-8 h-px bg-slate-800 group-hover:bg-indigo-500 transition-all group-hover:w-12"></span>
                  Watch Reel
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


import React, { useState, useRef } from 'react';
import { editImageWithGemini } from '../services/geminiService.ts';
import { EditStatus } from '../types.ts';

const AIImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [status, setStatus] = useState<EditStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setEditedImage(null);
        setStatus('idle');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!selectedImage || !prompt) return;
    setStatus('loading');
    setErrorMessage('');
    try {
      const [header, base64Data] = selectedImage.split(',');
      const mimeType = header.match(/:(.*?);/)?.[1] || 'image/jpeg';
      const result = await editImageWithGemini(base64Data, prompt, mimeType);
      setEditedImage(result);
      setStatus('success');
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to edit image. Please try again.');
    }
  };

  const reset = () => {
    setSelectedImage(null);
    setEditedImage(null);
    setPrompt('');
    setStatus('idle');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="ai-editor" className="py-32 bg-[#120e0c] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] -mr-64 -mt-64 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[150px] -ml-64 -mb-64 animate-pulse" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-block px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
            <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-[10px]">Virtual Design Architect</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold font-serif mb-8 leading-tight">Visualize <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 italic">Instantly</span></h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Curious how a Bengali Heritage theme fits your venue? Our Gemini-powered AI Studio transforms your space in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-white/[0.03] backdrop-blur-3xl p-10 md:p-12 rounded-[3.5rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
              {!selectedImage ? (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="group border-2 border-dashed border-white/10 rounded-[2.5rem] p-12 text-center cursor-pointer hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-500"
                >
                  <div className="w-24 h-24 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                    <svg className="w-10 h-10 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3 font-serif">Upload Venue Space</h4>
                  <p className="text-slate-500 text-sm font-light">Snap a photo of your empty event hall</p>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                </div>
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-700">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <span className="text-amber-500 font-black text-[10px] tracking-[0.4em] uppercase">Venue Data Ready</span>
                    <button onClick={reset} className="text-[10px] font-black uppercase text-slate-500 hover:text-white tracking-widest underline underline-offset-4">Reset Studio</button>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Design Directives</label>
                    <textarea 
                      rows={4}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g. 'Add grand gold-plated pillars with jasmine floral strings and warm mood lighting...'"
                      className="w-full bg-black/40 border border-white/10 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 resize-none text-sm font-light leading-relaxed shadow-inner"
                    />
                  </div>
                  <button
                    onClick={handleEdit}
                    disabled={status === 'loading' || !prompt}
                    className={`w-full py-6 rounded-3xl font-black text-[10px] tracking-[0.4em] transition-all flex items-center justify-center gap-4 group ${
                      status === 'loading' 
                        ? 'bg-white/5 cursor-not-allowed text-slate-600' 
                        : 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-2xl shadow-amber-900/40 hover:-translate-y-1 active:scale-95'
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
                        <span>RENDERING VISION...</span>
                      </>
                    ) : (
                      <>
                        <span>GENERATE PREVIEW</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
            {status === 'error' && (
              <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-3xl text-rose-400 text-[10px] font-bold uppercase tracking-widest flex gap-4 items-center">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                {errorMessage}
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] md:aspect-[16/9] bg-[#1a1614] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] group">
              {!selectedImage && !editedImage && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 text-center px-12">
                  <div className="w-32 h-32 border border-white/5 rounded-full flex items-center justify-center mb-8 bg-white/[0.02]">
                    <svg className="w-12 h-12 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                  </div>
                  <p className="font-serif italic text-3xl text-slate-400">Digital Preview Canvas</p>
                  <p className="text-sm mt-4 font-light text-slate-600 max-w-sm mx-auto">Upload a photo to begin visualizing your dream event decorations with BBDC Intelligence.</p>
                </div>
              )}
              
              {selectedImage && !editedImage && (
                <div className="w-full h-full relative animate-in fade-in zoom-in-95 duration-1000">
                  <img src={selectedImage} alt="Original Space" className="w-full h-full object-cover" />
                  <div className="absolute top-10 left-10 bg-black/60 backdrop-blur-2xl px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10">Base Venue Scan</div>
                </div>
              )}

              {editedImage && (
                <div className="w-full h-full relative animate-in fade-in duration-[2s]">
                  <img src={editedImage} alt="AI Transformation" className="w-full h-full object-cover" />
                  <div className="absolute top-10 left-10 bg-amber-600 px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-2xl">BBDC Designer AI Result</div>
                  <div className="absolute bottom-10 right-10">
                    <button onClick={() => window.open(editedImage)} className="bg-white/10 hover:bg-amber-600 backdrop-blur-2xl p-5 rounded-full border border-white/20 transition-all group/dl shadow-2xl">
                      <svg className="w-7 h-7 text-white group-hover/dl:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              
              {status === 'loading' && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl flex flex-col items-center justify-center">
                  <div className="w-24 h-24 relative">
                    <div className="absolute inset-0 border-4 border-amber-500/10 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-amber-500 border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>
                  </div>
                  <p className="mt-10 text-amber-500 font-black tracking-[0.4em] uppercase text-[10px] animate-pulse">Designing with Gemini AI...</p>
                  <p className="mt-4 text-slate-500 text-[10px] italic">Simulating textures and lighting patterns</p>
                </div>
              )}
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { label: 'Royal Heritage', prompt: 'Transform this venue with royal gold and crimson drapes, ornate pillars, and grand chandelier lighting' },
                 { label: 'Tropical Fusion', prompt: 'Add heavy marigold floral chains, banana leaf accents, and vibrant ethnic patterns' },
                 { label: 'Minimalist Glow', prompt: 'Apply soft white silk drapes, fairy light curtains, and pastel floral installations' }
               ].map((preset, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setPrompt(preset.prompt)}
                  className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-amber-600/20 hover:border-amber-500/40 transition-all text-center leading-relaxed"
                 >
                   {preset.label}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImageEditor;

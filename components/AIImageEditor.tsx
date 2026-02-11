
import React, { useState, useRef } from 'react';
import { editImageWithGemini } from '../services/geminiService';
import { EditStatus } from '../types';

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
    <section id="ai-editor" className="py-24 bg-[#0a0c10] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Event Visualization Studio</span>
          <h2 className="text-3xl md:text-6xl font-bold font-serif mb-6 leading-tight">Dream It. <span className="text-indigo-400">See It.</span></h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Wondering how your venue would look with a Bengali Heritage theme? Our AI Design Studio helps you visualize decor changes instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
              {!selectedImage ? (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="group border-2 border-dashed border-slate-800 rounded-3xl p-10 text-center cursor-pointer hover:border-amber-500/50 hover:bg-amber-500/5 transition-all"
                >
                  <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Upload Venue Photo</h4>
                  <p className="text-slate-500 text-sm">Snap a photo of your event space</p>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Input Loaded</span>
                    <button onClick={reset} className="text-xs text-slate-400 hover:text-white underline">Change Photo</button>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Your Vision Prompt</label>
                    <textarea 
                      rows={3}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g. 'Add a grand flower arch with marigolds and a red velvet backdrop'"
                      className="w-full bg-black/40 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 resize-none"
                    />
                  </div>
                  <button
                    onClick={handleEdit}
                    disabled={status === 'loading' || !prompt}
                    className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 group ${
                      status === 'loading' 
                        ? 'bg-slate-800 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-amber-600 to-amber-500 hover:shadow-[0_10px_30px_rgba(217,119,6,0.3)] hover:-translate-y-1'
                    }`}
                  >
                    {status === 'loading' ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Processing with AI...</span>
                      </div>
                    ) : (
                      <>
                        <span>Visualize Transformation</span>
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
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm flex gap-3 items-center">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                {errorMessage}
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] md:aspect-[16/9] bg-[#1a1d23] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] group">
              {!selectedImage && !editedImage && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 text-center px-10">
                  <div className="w-24 h-24 border border-slate-800 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                  </div>
                  <p className="font-serif italic text-xl">Your AI Studio Canvas</p>
                  <p className="text-sm mt-2 font-light">The preview of your transformed event will appear here</p>
                </div>
              )}
              
              {selectedImage && !editedImage && (
                <div className="w-full h-full relative animate-in fade-in zoom-in-95 duration-700">
                  <img src={selectedImage} alt="Original Space" className="w-full h-full object-cover" />
                  <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Input Frame</div>
                </div>
              )}

              {editedImage && (
                <div className="w-full h-full relative animate-in fade-in duration-1000">
                  <img src={editedImage} alt="AI Transformation" className="w-full h-full object-cover" />
                  <div className="absolute top-8 left-8 bg-amber-600 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">AI Designer Result</div>
                  <div className="absolute bottom-8 right-8">
                    <button onClick={() => window.open(editedImage)} className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/20 transition-all group/dl">
                      <svg className="w-6 h-6 text-white group-hover/dl:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              
              {status === 'loading' && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center">
                  <div className="w-20 h-20 relative">
                    <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="mt-8 text-amber-500 font-bold tracking-[0.2em] uppercase animate-pulse">Designing with Gemini...</p>
                </div>
              )}
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
               {[
                 { label: 'Royal Gold', prompt: 'Apply a royal gold and deep red theme with silk drapes' },
                 { label: 'Modern Floral', prompt: 'Add massive white rose installations and warm accent lighting' },
                 { label: 'Vintage Heritage', prompt: 'Create a vintage Bengali Zamindar house style decor with lanterns' }
               ].map((preset, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setPrompt(preset.prompt)}
                  className="bg-slate-900/40 border border-white/5 p-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-amber-600/10 hover:border-amber-500/30 transition-all text-center"
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

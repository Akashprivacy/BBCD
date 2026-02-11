
import React from 'react';
import { BUSINESS_ADDRESS, PHONE_NUMBER, EMAIL } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you shortly.");
  };

  return (
    <section id="contact" className="py-32 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Info Side */}
          <div className="lg:w-1/2 w-full">
            <div className="inline-block px-4 py-1.5 bg-rose-50 rounded-full mb-6">
              <span className="text-[10px] font-black tracking-[0.6em] text-rose-600 uppercase">
                Reservation
              </span>
            </div>
            <h3 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-serif mb-12 leading-tight text-slate-900 tracking-tight">
              Let's Design <br />Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600 italic">History</span>
            </h3>
            
            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-rose-50 rounded-[2rem] flex items-center justify-center text-rose-600 shrink-0 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Line</h4>
                  <p className="text-xl md:text-2xl font-bold font-serif group-hover:text-rose-600 transition-colors">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-amber-50 rounded-[2rem] flex items-center justify-center text-amber-600 shrink-0 border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Our Studio</h4>
                  <p className="text-xl md:text-2xl font-bold font-serif group-hover:text-amber-600 transition-colors">Near Maynaguri, Jalpaiguri</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-50 p-10 md:p-14 rounded-[4rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                    <input required type="text" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Mobile Number</label>
                    <input required type="tel" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" placeholder="+91 ..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Describe Your Vision</label>
                  <textarea required rows={4} className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all resize-none" placeholder="How can we help make your event special?"></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-95">
                  SEND RESERVATION REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

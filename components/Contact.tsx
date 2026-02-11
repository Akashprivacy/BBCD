
import React from 'react';
import { BUSINESS_ADDRESS, PHONE_NUMBER, EMAIL } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-4">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif mb-8 leading-tight">Ready to Create <br /> Something Special?</h3>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              Visit our office in Mainaguri or give us a call to discuss your upcoming celebration. We are here to make your dreams a reality.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-600/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Our Location</h4>
                  <p className="text-slate-400">{BUSINESS_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-600/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call Us</h4>
                  <p className="text-slate-400">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-600/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Support</h4>
                  <p className="text-slate-400">{EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="+91 ..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Event Type</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Wedding</option>
                    <option>Catering Only</option>
                    <option>Birthday Party</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Your Message</label>
                  <textarea required rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your event details..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/20">
                  Send Inquiry
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

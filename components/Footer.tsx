import React from 'react';
import { BUSINESS_NAME, BUSINESS_ADDRESS, SOCIAL_LINKS, PHONE_NUMBER, EMAIL } from '../constants';

const Footer: React.FC = () => {
  const cleanPhone = PHONE_NUMBER.replace(/\D/g, '');

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
    <footer className="bg-[#030508] text-white py-16 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-4xl font-bold font-serif mb-6 text-amber-500 hover:text-amber-400 transition-colors text-left focus:outline-none"
            >
              {BUSINESS_NAME}
            </button>
            <p className="text-slate-400 max-w-sm mb-12 leading-relaxed text-lg font-light">
              "Your joy is our success" <br />
              Premium event planning for royal weddings and milestone celebrations across West Bengal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 px-8 py-3 bg-white/5 hover:bg-blue-600 rounded-full transition-all border border-white/10"
              >
                <span className="text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform">FACEBOOK</span>
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 px-8 py-3 bg-white/5 hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full transition-all border border-white/10"
              >
                <span className="text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform">INSTAGRAM</span>
              </a>
              <a 
                href={SOCIAL_LINKS.justdial} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 px-8 py-3 bg-white/5 hover:bg-amber-600 rounded-full transition-all border border-white/10"
              >
                <span className="text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform">JUSTDIAL</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-10">QUICK LINKS</h3>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-amber-500 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-500 transition-colors">Our Services</button></li>
              <li><button onClick={() => scrollToSection('videos')} className="hover:text-amber-500 transition-colors">Video Gallery</button></li>
              <li><button onClick={() => scrollToSection('ai-editor')} className="hover:text-amber-500 transition-colors">AI Studio</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-amber-500 transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-amber-500 transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-10">REACH US</h3>
            <ul className="space-y-6 text-slate-400 font-medium text-sm">
              <li className="flex gap-4">
                <span className="text-amber-500 shrink-0 font-bold">A:</span>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-white transition-colors"
                >
                  {BUSINESS_ADDRESS}
                </a>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500 shrink-0 font-bold">P:</span>
                <a href={`tel:${cleanPhone}`} className="hover:text-amber-500 transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500 shrink-0 font-bold">W:</span>
                <a 
                  href={`https://wa.me/${cleanPhone}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-500 transition-colors flex items-center gap-2"
                >
                  WhatsApp Available 24/7
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.284l-.548 2.038 2.058-.51c.951.533 1.94.835 3.225.835 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.76-5.766zm3.426 8.24c-.131.37-.74 1.121-1.025 1.154-.285.033-.538.102-1.684-.347-1.146-.449-2.015-1.59-2.129-1.741-.114-.151-.815-1.085-.815-2.07 0-.985.518-1.467.701-1.673.183-.206.393-.258.524-.258.13 0 .262.002.374.008.112.006.262-.043.411.32.149.363.509 1.24.554 1.332.045.092.075.199.015.32-.06.121-.091.199-.181.306-.09.107-.19.239-.271.32-.081.081-.166.17-.07.334.095.163.424.698.91 1.132.626.56 1.153.734 1.317.816.164.082.26.06.355-.045.095-.105.411-.479.521-.643.11-.163.22-.138.371-.082s.951.448 1.116.531c.164.082.274.122.316.195.042.073.042.423-.089.793zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-widest text-slate-500 uppercase">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
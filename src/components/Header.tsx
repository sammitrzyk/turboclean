import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { TEL_LINK, BUSINESS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between py-2.5 sm:py-3">
        <a href="#hero" className="flex items-center gap-2 group min-w-0">
          <img
            src="/companyLogo.png"
            alt="Turbo Clean Pressure Washing"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform sm:h-12"
          />
          <div className="flex flex-col leading-tight min-w-0">
            <span className={`font-display font-extrabold text-base sm:text-lg transition-colors truncate ${scrolled ? 'text-white' : 'text-white'}`}>
              Turbo Clean
            </span>
            <span className={`text-[10px] sm:text-xs font-medium transition-colors truncate ${scrolled ? 'text-slate-400' : 'text-brand-100'}`}>
              Pressure Washing
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href={TEL_LINK}
            className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-sm sm:text-base font-extrabold transition-all duration-300 ${
              scrolled
                ? 'opacity-100 pointer-events-auto bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/15'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{BUSINESS.phone}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

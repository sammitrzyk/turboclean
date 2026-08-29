import { Star } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/IMG_3950.JPEG"
          alt="Professional pressure washing a home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 [background:linear-gradient(to_right,rgba(0,0,0,0.8),rgba(5,10,20,0.6),rgba(5,10,20,0.4))]" />
      </div>

      <div className="container-max relative z-10 pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">
              {BUSINESS.rating} stars · {BUSINESS.reviewCount} reviews
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-4 animate-fade-in-up">
            Pressure Washing in Olympia, WA
          </h1>

          <p className="text-lg sm:text-xl text-brand-100 mb-5 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Dirty siding, stained concrete, or a grimy deck? We remove dirt, algae, mold, and buildup to restore your property's exterior.
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex flex-col items-center justify-center gap-1 w-[88%] max-w-xl mx-auto px-8 py-[18px] rounded-2xl text-white bg-red-600/90 hover:bg-red-600 transition-all duration-200 shadow-xl shadow-black/40 hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-[0.97] hover:shadow-2xl hover:shadow-red-600/40 cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white">
                Call Now For A Free Quote
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {BUSINESS.phone}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

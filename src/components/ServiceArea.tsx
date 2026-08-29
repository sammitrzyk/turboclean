import { MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function ServiceArea() {
  const mapQuery = encodeURIComponent(BUSINESS.address);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="service-area" className="py-16 bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
            {BUSINESS.areasServed}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Based in McCleary, WA — we serve homes and businesses throughout the surrounding area. Not sure if we cover you? Just reach out and ask.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-slate-800 h-80 lg:h-full min-h-[320px] bg-slate-900">
            <iframe
              title="Turbo Clean service area map"
              src={mapSrc}
              className="w-full h-full"
              style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) contrast(0.9) saturate(0.7)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4 justify-center">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Visit Us</p>
                  <p className="text-slate-200 font-medium">{BUSINESS.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-400 font-bold text-sm">Hrs</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Hours</p>
                  <p className="text-slate-200 font-medium">{BUSINESS.hours}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full text-center"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

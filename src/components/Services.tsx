import { SERVICES, ADDITIONAL_SERVICES } from '@/lib/constants';

export default function Services() {
  return (
    <section id="services" className="py-16 bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
            What We Clean
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From driveways to roofs to decks — if it's dirty, we can make it shine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-accent-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`relative ${service.imageHeight || 'h-52'} overflow-hidden`}>
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  style={{
                    objectFit: service.imageFit || 'cover',
                    objectPosition: service.imagePosition || 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <h3 className="absolute bottom-3 left-4 font-display font-extrabold text-xl text-white">
                  {service.name}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-900 rounded-xl p-5 border border-slate-800">
          <h3 className="font-display font-extrabold text-base text-white mb-3">
            Additional Exterior Cleaning Services
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {ADDITIONAL_SERVICES.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 hover:border-accent-500/50 hover:text-accent-300 transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-400 pt-3 border-t border-slate-800">
            Don't see your surface listed? <span className="font-bold text-white">Contact us for a free quote</span> — we clean many additional residential and commercial exterior surfaces.
          </p>
        </div>
      </div>
    </section>
  );
}

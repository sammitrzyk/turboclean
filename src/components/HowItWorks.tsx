import { CheckCircle2 } from 'lucide-react';
import { STEPS } from '@/lib/constants';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-slate-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="flex gap-5 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-accent-600 flex items-center justify-center text-white font-display font-extrabold text-xl shadow-md group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display font-extrabold text-xl text-white">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-500/10 text-accent-400 text-xs font-bold border border-accent-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      {step.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <img
                src="/3.webp"
                alt="Turbo Clean professional on site with pressure washing equipment"
                className="w-full h-72 object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

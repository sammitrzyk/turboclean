import { Phone, MapPin } from 'lucide-react';
import { BUSINESS, TEL_LINK } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-max py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <img
                src="/companyLogo.png"
                alt="Turbo Clean Pressure Washing"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-extrabold text-lg">Turbo Clean</span>
                <span className="text-xs text-brand-200">Pressure Washing</span>
              </div>
            </a>
            <p className="text-sm text-brand-200">
              Revitalizing property exteriors with precision and care throughout Cumberland County, PA.
            </p>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-brand-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={TEL_LINK} className="flex items-center gap-2 text-sm text-brand-100 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-accent-400" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-brand-100">
                <MapPin className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                {BUSINESS.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-brand-300">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

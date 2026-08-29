import { MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function TopBar() {
  return (
    <div className="bg-brand-900 text-white text-sm">
      <div className="container-max flex items-center justify-center py-2">
        <p className="flex items-center gap-2 text-brand-100">
          <MapPin className="w-4 h-4 text-accent-400" />
          Serving {BUSINESS.areasServed}
        </p>
      </div>
    </div>
  );
}

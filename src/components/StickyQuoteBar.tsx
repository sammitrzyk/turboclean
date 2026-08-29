import { useEffect, useState } from 'react';

export default function StickyQuoteBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById('quote-form');
    if (!target) return;

    const onScroll = () => {
      const rect = target.getBoundingClientRect();
      setVisible(rect.bottom < 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href="#quote-form"
        className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base sm:text-lg font-extrabold text-white bg-accent-600 hover:bg-accent-700 shadow-xl shadow-black/40 transition-all duration-200 hover:-translate-y-0.5"
      >
        Get a Free Quote
      </a>
    </div>
  );
}

import { useRef, useState, useCallback, useEffect } from 'react';

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => { dragging.current = false; };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current) return;
      updateFromClientX(e.touches[0].clientX);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [updateFromClientX]);

  return (
    <section className="py-16 bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
            See the Difference
          </h2>
          <p className="text-slate-400 text-sm">Drag the slider to reveal the transformation</p>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-800 select-none cursor-ew-resize"
          onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; updateFromClientX(e.touches[0].clientX); }}
        >
          <div className="relative h-[520px] sm:h-[620px]">
            {/* After (base layer) — zoomed in to match before crop, brighter + more contrast */}
            <img
              src="/IMG_8645.JPEG"
              alt="After pressure washing"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transform: 'scale(1)',
                filter: 'brightness(1.12) contrast(1.1) saturate(1.05)',
                objectPosition: 'center 40%',
              }}
            />
            <span className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-accent-600 text-white text-sm font-bold uppercase tracking-wide">
              After
            </span>

            {/* Before (top layer, clipped to left portion) — dull, dark overlay */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src="/IMG_8644.JPEG"
                alt="Before pressure washing"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.95) contrast(1) saturate(1)',
                  objectPosition: 'center 40%',
                }}
              />
              <div className="absolute inset-0 bg-black/5" />
              <span className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wide border border-white/20">
                Before
              </span>
            </div>

            {/* Divider handle */}
            <div
              className="absolute inset-y-0 z-30 pointer-events-none"
              style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-0.5 h-full bg-white/70" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none" />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium z-20 pointer-events-none">
              Grime, moss, and stains removed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

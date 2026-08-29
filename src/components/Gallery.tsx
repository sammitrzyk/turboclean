const GALLERY_IMAGES = [
  { src: '/5.webp', alt: 'Turbo Clean truck and trailer ready for job', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/1.webp', alt: 'House exterior pressure washing' },
  { src: '/6.webp', alt: 'Deck cleaning close-up' },
  { src: '/3.webp', alt: 'Pressure washing equipment setup' },
  { src: '/2.webp', alt: 'Concrete driveway cleaning' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-slate-900">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
            On the Job
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real photos from real projects across Cumberland County.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden border border-slate-800 group ${img.span ?? ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

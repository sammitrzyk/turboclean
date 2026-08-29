import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';
import FullQuoteForm from '@/components/FullQuoteForm';
import PhotoCarousel from '@/components/PhotoCarousel';
import BeforeAfter from '@/components/BeforeAfter';
import Services from '@/components/Services';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import StickyQuoteBar from '@/components/StickyQuoteBar';
import { SMS_LINK, TEL_LINK, BUSINESS } from '@/lib/constants';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <Header />
      <main>
        <Hero />

        <section id="quote-form" className="py-16 bg-slate-950">
          <div className="container-max max-w-3xl">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-2">
              Start Your Free Estimate
            </h2>
            <p className="text-slate-400 mb-8">
              Takes under 30 seconds. We'll contact you shortly with pricing.
            </p>
            <QuoteForm />
          </div>
        </section>

        <PhotoCarousel />
        <BeforeAfter />
        <Services />
        <ServiceArea />

        <section id="bottom-quote" className="py-20 bg-slate-900">
          <div className="container-max max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Let's Price Your Project
              </h2>
              <p className="text-slate-400">
                Fill out the form below for a fast, no-obligation estimate
              </p>
            </div>
            <FullQuoteForm id="bottom-quote-form" />
          </div>
        </section>
      </main>
      <Footer />
      <StickyQuoteBar />
    </div>
  );
}

export default App;

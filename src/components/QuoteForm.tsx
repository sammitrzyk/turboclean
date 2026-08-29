import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { SMS_LINK, SERVICE_OPTIONS } from '@/lib/constants';
import { fireMiniLeadTracking, fireStepOneCompletedTracking } from '@/analytics';
import { submitToNetlify } from '@/lib/netlify';

type Props = {
  id?: string;
};

type StepOneData = {
  name: string;
  phone: string;
  zip: string;
};

export default function QuoteForm({ id }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [stepOneData, setStepOneData] = useState<StepOneData | null>(null);

  function handleStepOneSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);

    if (formData.get('company')) {
      setStatus('success');
      return;
    }

    const data: StepOneData = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      zip: String(formData.get('zip') || ''),
    };

    if (!data.name || !data.phone) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    fireStepOneCompletedTracking();
    fireMiniLeadTracking();
    submitToNetlify('mini-quote-step1', data);

    setStepOneData(data);
    setStep(2);
  }

  async function handleStepTwoSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!stepOneData) return;

    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);

    const data = {
      ...stepOneData,
      service: String(formData.get('service') || ''),
      notes: String(formData.get('details') || ''),
    };

    submitToNetlify('mini-quote-final', data);

    try {
      if (!supabase) {
        throw new Error('Quote submissions are not configured yet. Please call or text us instead.');
      }
      const { error } = await supabase.from('quote_leads').insert(data);
      if (error) throw error;
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again or call us.');
    }
  }

  if (status === 'success') {
    return (
      <div id={id} className="rounded-2xl p-8 text-center border border-slate-700 bg-slate-900 shadow-lg">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9 text-green-500" />
        </div>
        <h3 className="font-display font-extrabold text-2xl mb-2 text-white">
          Quote Request Sent!
        </h3>
        <p className="mb-6 text-slate-400">
          Thanks — we'll reach out shortly. For an even faster response, text us your project photos.
        </p>
        <a href={SMS_LINK} className="btn-accent">
          Text Us Photos Now
        </a>
        <button
          onClick={() => {
            setStatus('idle');
            setStep(1);
            setStepOneData(null);
          }}
          className="block mx-auto mt-4 text-sm font-medium text-slate-500 hover:text-slate-300"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const labelClass = 'block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2';
  const inputClass = 'w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-800 text-slate-100 placeholder-slate-500 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-200 outline-none text-base';
  const selectClass = `${inputClass} appearance-none bg-slate-800 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10`;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7 sm:p-8 shadow-lg" id={id}>
      <span className="block text-xs font-bold uppercase tracking-widest text-accent-500 mb-2">
        Step {step} of 2
      </span>

      {step === 1 && (
        <>
          <h3 className="font-display font-extrabold text-xl text-white mb-4">
            Contact Information
          </h3>
          <form onSubmit={handleStepOneSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>First Name *</label>
                <input id="name" name="name" type="text" required placeholder="Jane" className={inputClass} defaultValue={stepOneData?.name} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone *</label>
                <input id="phone" name="phone" type="tel" required placeholder="(360) 000-0000" className={inputClass} defaultValue={stepOneData?.phone} />
              </div>
            </div>

            <div>
              <label htmlFor="zip" className={labelClass}>Zip Code</label>
              <input id="zip" name="zip" type="text" placeholder="98501" className={inputClass} defaultValue={stepOneData?.zip} />
            </div>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Don't fill this out if you're human:</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {errorMsg && (
              <div className="rounded-lg px-4 py-3 text-sm bg-red-500/10 border border-red-500/30 text-red-400">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-5 px-6 rounded-xl font-extrabold text-lg transition-all duration-200 bg-accent-600 hover:bg-accent-700 text-white shadow-md shadow-accent-600/20"
            >
              Continue<ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="font-display font-extrabold text-xl text-white mb-4">
            Project Details
          </h3>
          <form onSubmit={handleStepTwoSubmit} className="space-y-5">
            <div>
              <label htmlFor="service" className={labelClass}>Service *</label>
              <select id="service" name="service" required defaultValue="" className={selectClass}>
                <option value="" disabled>Select service</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="details" className={labelClass}>Additional Details (optional)</label>
              <textarea
                id="details"
                name="details"
                rows={4}
                placeholder="Tell us about your property or specific needs..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <div className="rounded-lg px-4 py-3 text-sm bg-red-500/10 border border-red-500/30 text-red-400">
                {errorMsg}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center justify-center gap-2 py-5 px-5 rounded-xl font-bold text-sm text-slate-400 hover:text-slate-200 border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />Back
              </button>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex-1 flex items-center justify-center gap-2 py-5 px-6 rounded-xl font-extrabold text-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed bg-accent-600 hover:bg-accent-700 text-white shadow-md shadow-accent-600/20"
              >
                {status === 'submitting' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" />Sending...</>
                ) : (
                  'Get My Estimate'
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { SMS_LINK, SERVICE_OPTIONS, BUSINESS, TEL_LINK } from '@/lib/constants';
import { submitToNetlify } from '@/lib/netlify';

type Props = {
  id?: string;
};

export default function FullQuoteForm({ id }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);

    if (formData.get('company')) {
      setStatus('success');
      return;
    }

    const data = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      zip: String(formData.get('zip') || ''),
      service: String(formData.get('service') || ''),
      notes: String(formData.get('details') || ''),
    };

    if (!data.name || !data.phone || !data.service) {
      setStatus('error');
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    setStatus('submitting');

    submitToNetlify('bottom-quote-form', data);

    try {
      if (!supabase) {
        throw new Error('Quote submissions are not configured yet. Please call or text us instead.');
      }
      const { error } = await supabase.from('quote_leads').insert(data);
      if (error) throw error;
      setStatus('success');
      (e.target as HTMLFormElement).reset();
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
          onClick={() => setStatus('idle')}
          className="block mx-auto mt-4 text-sm font-medium text-slate-500 hover:text-slate-300"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const labelClass = 'block text-sm font-bold text-slate-300 mb-2';
  const inputClass = 'w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-100 placeholder-slate-500 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-200 outline-none text-sm';
  const selectClass = `${inputClass} appearance-none bg-slate-800 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10`;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-lg" id={id}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="full-name" className={labelClass}>First Name *</label>
          <input id="full-name" name="name" type="text" required placeholder="Your first name" className={inputClass} />
        </div>

        <div>
          <label htmlFor="full-phone" className={labelClass}>Phone *</label>
          <input id="full-phone" name="phone" type="tel" required placeholder="(123) 456-7890" className={inputClass} />
        </div>

        <div>
          <label htmlFor="full-zip" className={labelClass}>Zip Code</label>
          <input id="full-zip" name="zip" type="text" placeholder="Your zip code" className={inputClass} />
        </div>

        <div>
          <label htmlFor="full-service" className={labelClass}>Service *</label>
          <select id="full-service" name="service" required defaultValue="" className={selectClass}>
            <option value="" disabled>Select service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="full-details" className={labelClass}>Details (Optional)</label>
          <textarea
            id="full-details"
            name="details"
            rows={4}
            placeholder="Brief description of what needs cleaning..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="full-company">Don't fill this out if you're human:</label>
          <input id="full-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {status === 'error' && (
          <div className="rounded-lg px-4 py-3 text-sm bg-red-500/10 border border-red-500/30 text-red-400">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed bg-accent-600 hover:bg-accent-700 text-white shadow-md shadow-accent-600/20"
        >
          {status === 'submitting' ? (
            <><Loader2 className="w-5 h-5 animate-spin" />Sending...</>
          ) : (
            <><Send className="w-4 h-4" />Get My Estimate</>
          )}
        </button>

        <div className="text-center text-sm text-slate-400">
          <p className="mb-1">We'll contact you within 30 minutes. Your information is secure.</p>
          <p className="font-bold text-slate-200">
            Or call now: <a href={TEL_LINK} className="text-accent-400 hover:text-accent-300 underline">{BUSINESS.phone}</a>
          </p>
        </div>
      </form>
    </div>
  );
}

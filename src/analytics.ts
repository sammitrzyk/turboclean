import { siteConfig } from '@/config';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function fireStepOneCompletedTracking() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'short_form_step_1_completed' });
}

export function fireMiniLeadTracking() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'lead_mini_submit' });

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'lead_mini_submit');

    const sendTo = siteConfig.trackingIds.miniLeadAdsSendTo;
    if (sendTo) {
      window.gtag('event', 'conversion', { send_to: sendTo });
    }
  }
}

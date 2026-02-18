// Simple wrapper for Google Analytics gtag functions
// Usage: import { GA_ID, pageview, event } from '../lib/gtag'

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Send a pageview for a given url
export const pageview = (url) => {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

// Send an event to GA
export const event = ({ action, category, label, value }) => {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

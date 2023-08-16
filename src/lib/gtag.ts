declare global {
    interface Window {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      gtag: any;
    }
  }

export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_ID ?? '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
interface EventParams {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const event = ({ action, category, label, value }: EventParams): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

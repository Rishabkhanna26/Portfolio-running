"use client";
import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { pageview, GA_ID } from '@/lib/gtag';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID || process.env.NODE_ENV !== 'production') return;
    if (pathname) pageview(pathname);
  }, [pathname]);

  // Only inject scripts in production and when GA_ID is available
  if (!GA_ID || process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

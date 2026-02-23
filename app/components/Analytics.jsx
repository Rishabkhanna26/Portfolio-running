"use client";
import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/gtag';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (pathname) pageview(pathname);
  }, [pathname]);

  // Only inject scripts in production
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1M13ZH1N7R"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1M13ZH1N7R');
        `}
      </Script>
    </>
  );
}

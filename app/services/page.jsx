import Link from 'next/link';
import MarketingShell from '../components/MarketingShell';

const serviceCards = [
  {
    title: 'WhatsApp Automation',
    keyword: 'whatsapp automation services',
    href: '/services/whatsapp-automation',
    summary: 'Automate enquiries, qualification, reminders, and handoff to sales without losing context.'
  },
  {
    title: 'AI Chatbots',
    keyword: 'ai chatbot development services',
    href: '/services/ai-chatbots',
    summary: 'Deploy conversational bots trained on your offer, pricing, and process so responses stay consistent.'
  },
  {
    title: 'Lead Generation',
    keyword: 'lead generation automation services',
    href: '/services/lead-generation',
    summary: 'Connect channels, forms, and follow-up systems so more qualified leads move into active pipelines.'
  }
];

export const metadata = {
  title: 'Services | WhatsApp Automation, AI Chatbots, Lead Generation',
  description: 'Service pages built around WhatsApp automation, AI chatbot implementation, and lead generation automation for business growth.',
  keywords: [
    'whatsapp automation services',
    'ai chatbot development services',
    'lead generation automation services'
  ]
};

export default function ServicesPage() {
  return (
    <MarketingShell>
      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl text-left">
          <p className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            Services
          </p>
          <h1 className="mt-5 break-words text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Service pages designed for rankings, lead quality, and conversion.
          </h1>
          <p className="mt-5 break-words text-base leading-8 text-slate-300 sm:text-lg">
            Each page below targets one primary keyword and one buyer intent. This structure gives search engines clear topical signals,
            gives visitors clear choices, and gives your sales process a stronger entry point.
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-3">
          {serviceCards.map((service) => (
            <article key={service.href} className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-amber-300">Main keyword: {service.keyword}</p>
              <p className="mt-3 break-words text-base leading-7 text-slate-300">{service.summary}</p>
              <Link
                href={service.href}
                className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-slate-100 px-4 py-2 text-base font-semibold text-slate-900 transition-colors hover:bg-white"
              >
                Read Full Service Page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Technical SEO checklist already implemented</h2>
          <ul className="mt-4 space-y-2 break-words text-base leading-7 text-slate-300">
            <li>- XML sitemap generation after build</li>
            <li>- robots.txt generation and sitemap declaration</li>
            <li>- route-level metadata with title and description</li>
            <li>- crawlable internal links via Next Link</li>
            <li>- mobile-first responsive page structure</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/automation-product" className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-4 py-2 text-base font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              View Automation Product Page
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-4 py-2 text-base font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

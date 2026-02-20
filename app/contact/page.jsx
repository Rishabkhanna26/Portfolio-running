import Link from 'next/link';
import MarketingShell from '../components/MarketingShell';
import Contact from '../components/Contact';

export const metadata = {
  title: 'Contact | Rishab Khanna Automation Services',
  description: 'Contact Rishab Khanna for WhatsApp automation, AI chatbot, and lead generation implementation projects.',
  keywords: [
    'contact whatsapp automation expert',
    'book ai chatbot consultation',
    'lead generation setup inquiry'
  ]
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Contact me to build your automation workflow.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Share your current lead process, response delays, and follow-up bottlenecks. I will map a practical automation plan that fits
            your team size and sales cycle.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/services/whatsapp-automation" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              WhatsApp Automation
            </Link>
            <Link href="/services/ai-chatbots" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              AI Chatbots
            </Link>
            <Link href="/services/lead-generation" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              Lead Generation
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </MarketingShell>
  );
}

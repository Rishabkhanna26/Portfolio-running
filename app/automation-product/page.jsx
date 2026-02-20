import Link from 'next/link';
import MarketingShell from '../components/MarketingShell';

export const metadata = {
  title: 'Automation Product | Client Handling System',
  description: 'Explore the Client Handling System product for lead routing, automated follow-up, and conversion visibility.',
  keywords: [
    'client handling automation product',
    'lead routing dashboard',
    'sales follow up automation system'
  ]
};

const productFeatures = [
  'Unified lead inbox from forms, WhatsApp, and campaign links',
  'Auto-assignment rules by source, city, intent, or budget',
  'Follow-up reminders and escalations to prevent leakage',
  'Conversation notes, status updates, and clear ownership',
  'Pipeline views for founders, sales teams, and operations managers'
];

export default function AutomationProductPage() {
  return (
    <MarketingShell>
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            Automation Product
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Client Handling System built for teams that want zero lead leakage.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            This product centralizes incoming leads, structures ownership, and keeps every follow-up visible.
            Instead of scattered chats and missed callbacks, teams get one workflow for action and accountability.
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">What it solves</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Sales teams usually manage leads across multiple channels with no shared process. That creates duplicate responses,
              missed opportunities, and unclear accountability. The system replaces fragmented handling with a single operating layer.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Best fit</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Agencies, local service businesses, coaching programs, and B2B teams handling recurring enquiries where speed-to-lead and
              follow-up consistency directly impact revenue.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Core Features</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
            {productFeatures.map((feature) => (
              <li key={feature}>- {feature}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              Explore Service Pages
            </Link>
            <Link href="/contact" className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

import Link from 'next/link';
import MarketingShell from '../components/MarketingShell';

export const metadata = {
  title: 'About Rishab Khanna | Automation Focused Web Developer',
  description: 'Learn how Rishab Khanna designs automation systems, AI workflows, and conversion focused web experiences for service businesses.',
  keywords: [
    'about rishab khanna',
    'automation focused web developer',
    'freelance whatsapp automation developer'
  ]
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            About
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Building practical automation systems that grow service businesses.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            I am Rishab Khanna, a web developer focused on turning manual business workflows into repeatable digital systems.
            My work combines front-end experience, API integrations, and automation logic so business owners can respond faster,
            close more leads, and spend less time on repetitive operations.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">How I Work</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Every project starts with process mapping. I identify where leads enter, where teams lose speed, and where follow-ups break.
              Then I design a system across WhatsApp, CRM, forms, and dashboards so each lead receives consistent communication,
              sales teams get clear tasks, and managers get visibility with measurable metrics.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Core Stack</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Next.js, JavaScript, WordPress, Supabase, automation APIs, and custom webhook flows. I prioritize mobile-first interfaces,
              fast response times, and clean deployment workflows so each system is maintainable long after launch.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">What You Can Explore Next</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            If you are evaluating where to start, use the service pages below. Each page is structured around one clear business outcome
            and one primary keyword focus for search visibility.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href="/services/whatsapp-automation" className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
              WhatsApp Automation Service
            </Link>
            <Link href="/services/ai-chatbots" className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
              AI Chatbot Service
            </Link>
            <Link href="/services/lead-generation" className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
              Lead Generation Service
            </Link>
            <Link href="/contact" className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

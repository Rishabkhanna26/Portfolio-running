import Link from 'next/link';
import MarketingShell from './MarketingShell';

export default function ServiceDetailPage({
  serviceLabel,
  title,
  primaryKeyword,
  intro,
  problemParagraphs,
  solutionParagraphs,
  benefits,
  faq
}) {
  return (
    <MarketingShell>
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            {serviceLabel}
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-300">Primary keyword: {primaryKeyword}</p>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{intro}</p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Problem Explanation</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
            {problemParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Solution Explanation</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
            {solutionParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Benefits</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
            {benefits.map((benefit) => (
              <li key={benefit}>- {benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">FAQ</h2>
          <div className="mt-4 space-y-4">
            {faq.map((item) => (
              <article key={item.question} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-base font-semibold text-white sm:text-lg">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Next Step</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            If you want this service implemented in your business, send your current process details and team structure.
            I will return a clear implementation roadmap with milestones and timelines.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white">
              Contact Me
            </Link>
            <Link href="/services" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              Back to Services
            </Link>
            <Link href="/automation-product" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              See Automation Product
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

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
      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            {serviceLabel}
          </p>
          <h1 className="mt-5 break-words text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 break-words text-sm font-semibold uppercase tracking-wide text-amber-300">Primary keyword: {primaryKeyword}</p>
          <p className="mt-5 break-words text-base leading-8 text-slate-300 sm:text-lg">{intro}</p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Problem Explanation</h2>
          <div className="mt-4 space-y-4 break-words text-base leading-7 text-slate-300">
            {problemParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Solution Explanation</h2>
          <div className="mt-4 space-y-4 break-words text-base leading-7 text-slate-300">
            {solutionParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Benefits</h2>
          <ul className="mt-4 space-y-2 break-words text-base leading-7 text-slate-300">
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
                <h3 className="break-words text-base font-semibold text-white sm:text-lg">{item.question}</h3>
                <p className="mt-2 break-words text-base leading-7 text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Next Step</h2>
          <p className="mt-3 break-words text-base leading-7 text-slate-300">
            If you want this service implemented in your business, send your current process details and team structure.
            I will return a clear implementation roadmap with milestones and timelines.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg bg-slate-100 px-4 py-2 text-base font-semibold text-slate-900 hover:bg-white">
              Contact Me
            </Link>
            <Link href="/services" className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-4 py-2 text-base font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              Back to Services
            </Link>
            <Link href="/automation-product" className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-4 py-2 text-base font-medium text-slate-200 hover:border-slate-500 hover:text-white">
              See Automation Product
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

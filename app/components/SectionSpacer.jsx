/**
 * SectionSpacer — a decorative divider between the hero and the first
 * content section. Matches the site's dark/gradient theme.
 *
 * Usage:  <SectionSpacer />   (drop it right after the hero <section>)
 */
export default function SectionSpacer() {
  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true">
      {/* Gradient fade from hero bottom colour to page bg */}
      <div className="h-16 sm:h-20 bg-gradient-to-b from-slate-900/0 to-slate-950/80" />

      {/* Thin glowing rule */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-6 sm:px-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="mx-4 flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-purple-500/70" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      {/* Subtle glow blob */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
        <div className="h-24 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>
    </div>
  );
}

"use client";
import { useEffect, useId, useMemo, useState } from 'react';
import { Code2, Server, Wrench, Sparkles, Search } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const technologies = [
  {
    name: 'HTML5',
    level: 95,
    category: 'Frontend',
    highlights: [
      'Semantic layouts and accessible structure (headings, landmarks, ARIA when needed)',
      'Clean, SEO-friendly markup for landing pages and marketing sites',
      'Component-friendly structure for React/Next.js projects'
    ]
  },
  {
    name: 'CSS3',
    level: 95,
    category: 'Frontend',
    highlights: [
      'Responsive layouts with modern CSS (flex, grid, fluid spacing)',
      'Polished UI with gradients, glassmorphism, and micro-interactions',
      'Mobile-first styling with predictable spacing and typography'
    ]
  },
  {
    name: 'JavaScript',
    level: 92,
    category: 'Frontend',
    highlights: [
      'Interactive UI logic, state handling, and clean component patterns',
      'API integrations and client-side performance tuning',
      'DOM work when needed without relying on heavy dependencies'
    ]
  },
  {
    name: 'React',
    level: 88,
    category: 'Frontend',
    highlights: [
      'Reusable components, hooks, and predictable UI state flows',
      'Accessible interactive components (tabs, modals, accordions)',
      'Performance-focused rendering patterns for real-world pages'
    ]
  },
  {
    name: 'Next.js',
    level: 85,
    category: 'Frontend',
    highlights: [
      'App Router pages with optimized routing and component structure',
      'SEO + performance improvements (images, metadata, caching patterns)',
      'Client/server component boundaries for clean UX'
    ]
  },
  {
    name: 'jQuery',
    level: 90,
    category: 'Frontend',
    highlights: [
      'Legacy UI enhancements and quick DOM utilities when required',
      'AJAX flows for WordPress and plugin-based websites',
      'Smooth UI behaviors without rewriting entire stacks'
    ]
  },
  {
    name: 'WordPress',
    level: 98,
    category: 'Backend',
    highlights: [
      'Custom plugins, hooks, and theme-level integrations',
      'Performance work: caching strategy, query cleanup, and asset optimization',
      'API integrations for forms, automation, and lead workflows'
    ]
  },
  {
    name: 'PHP',
    level: 93,
    category: 'Backend',
    highlights: [
      'Clean, secure server-side logic for WordPress and custom endpoints',
      'API integrations and data handling with validation and sanitization',
      'Debugging and maintaining production sites with minimal risk'
    ]
  },
  {
    name: 'Node.js',
    level: 82,
    category: 'Backend',
    highlights: [
      'API routes and backend helpers for modern web apps',
      'Automation scripts and integrations (webhooks, services, tooling)',
      'Performance-minded async flows and structured error handling'
    ]
  },
  {
    name: 'AJAX',
    level: 90,
    category: 'Backend',
    highlights: [
      'Fast UI updates with resilient request/response handling',
      'WordPress AJAX endpoints and nonce-safe interactions',
      'User-friendly loading, error, and retry states'
    ]
  },
  {
    name: 'Git',
    level: 88,
    category: 'Tools',
    highlights: [
      'Clean branching, safe merges, and understandable commit history',
      'Debugging regressions with bisect-style thinking and careful diffs',
      'Collaborative workflows with PR-ready changes'
    ]
  },
  {
    name: 'GitHub',
    level: 88,
    category: 'Tools',
    highlights: [
      'PR-based collaboration and review-friendly changes',
      'Issue-driven workflows and release hygiene',
      'CI awareness for builds, linting, and deployment checks'
    ]
  }
];

const categories = [
  { key: 'All', label: 'All', icon: Sparkles },
  { key: 'Frontend', label: 'Frontend', icon: Code2 },
  { key: 'Backend', label: 'Backend', icon: Server },
  { key: 'Tools', label: 'Tools', icon: Wrench }
];

function SkillMeter({ value }) {
  const id = useId();
  const size = 44;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, value));
  const dashOffset = circumference - (clamped / 100) * circumference;

  return (
    <div className="relative inline-flex h-11 w-11 items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 -rotate-90"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(148, 163, 184, 0.25)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={`url(#${id})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: 'stroke-dashoffset 800ms ease-out' }}
        />
      </svg>
      <span className="text-sm font-semibold text-slate-100 tabular-nums">{clamped}</span>
    </div>
  );
}

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [activeSkill, setActiveSkill] = useState(technologies[0]?.name ?? null);

  const filteredTechnologies = useMemo(() => {
    const byCategory =
      activeCategory === 'All'
        ? technologies
        : technologies.filter((tech) => tech.category === activeCategory);

    const normalized = query.trim().toLowerCase();
    if (!normalized) return byCategory;

    return byCategory.filter((tech) => tech.name.toLowerCase().includes(normalized));
  }, [activeCategory, query]);

  const spotlight = useMemo(() => {
    const direct = filteredTechnologies.find((tech) => tech.name === activeSkill);
    if (direct) return direct;
    return filteredTechnologies[0] ?? null;
  }, [activeSkill, filteredTechnologies]);

  useEffect(() => {
    if (filteredTechnologies.length === 0) return;
    const stillVisible = filteredTechnologies.some((tech) => tech.name === activeSkill);
    if (!stillVisible) setActiveSkill(filteredTechnologies[0].name);
  }, [activeSkill, filteredTechnologies]);

  return (
    <section id="skills" className="relative overflow-hidden py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="hidden lg:block absolute top-40 right-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="hidden lg:block absolute bottom-20 left-1/2 w-72 h-72 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse-slow">
                EXPERTISE
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Mastering modern technologies to build exceptional digital experiences
            </p>
          </div>

          <div className={`grid grid-cols-1 gap-4 mb-10 transition-all duration-1000 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 ${
                      activeCategory === key
                        ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 text-white shadow-lg shadow-purple-500/40'
                        : 'bg-slate-900/40 text-slate-200 hover:bg-slate-800/50 border border-slate-700/60'
                    }`}
                    aria-pressed={activeCategory === key}
                  >
                    <Icon size={18} className="opacity-90" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              <div className="w-full max-w-md">
                <label className="sr-only" htmlFor="skill-search">Search skills</label>
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                  <input
                    id="skill-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search a skill (e.g., Next.js, PHP)"
                    className="w-full rounded-2xl border border-slate-700/60 bg-slate-950/40 py-3 pl-11 pr-4 text-base text-slate-100 placeholder:text-slate-400 shadow-lg shadow-black/20 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div
              className={`lg:col-span-5 transition-all duration-1000 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/35 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-purple-500/10"></div>
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold tracking-wide text-slate-300">Skill spotlight</p>
                      <h3 className="mt-2 text-3xl font-bold text-white">{spotlight?.name ?? '—'}</h3>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/40 px-3 py-1 text-sm font-semibold text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                        <span>{spotlight?.category ?? ''}</span>
                      </div>
                    </div>

                    {spotlight?.level != null ? (
                      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/30 p-2">
                        <SkillMeter value={isInView ? spotlight.level : 0} />
                        <p className="mt-1 text-center text-xs font-semibold text-slate-300">Level</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6 space-y-3 text-base text-slate-200">
                    {(spotlight?.highlights ?? []).map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-amber-400 to-rose-400" aria-hidden="true"></span>
                        <p className="text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold text-slate-300">Tip:</span>
                    <span className="text-sm text-slate-300">Tap a card to preview details (mobile-friendly).</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredTechnologies.map((tech, index) => {
                  const isActive = tech.name === spotlight?.name;

                  return (
                    <button
                      key={tech.name}
                      type="button"
                      onClick={() => setActiveSkill(tech.name)}
                      className={`group relative overflow-hidden rounded-3xl border bg-slate-950/25 p-5 text-left backdrop-blur-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 ${
                        isActive
                          ? 'border-amber-500/50 shadow-2xl shadow-amber-500/10'
                          : 'border-slate-700/60 hover:border-amber-500/35 hover:shadow-xl hover:shadow-purple-500/10'
                      } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 35}ms` }}
                      aria-pressed={isActive}
                    >
                      <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'group-hover:opacity-100'
                      } bg-[radial-gradient(circle_at_15%_10%,rgba(245,158,11,0.16),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.14),transparent_50%)]`} />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="text-lg font-bold text-white transition-colors group-hover:text-amber-300">
                              {tech.name}
                            </h4>
                            <p className="mt-1 text-sm font-semibold text-slate-300">{tech.category}</p>
                          </div>
                          <div className="shrink-0 rounded-2xl border border-slate-700/60 bg-slate-900/30 p-2">
                            <SkillMeter value={isInView ? tech.level : 0} />
                          </div>
                        </div>

                        <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {(tech.highlights ?? []).slice(0, 2).map((line) => (
                            <div key={line} className="flex items-start gap-2 text-sm text-slate-200">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-rose-400" aria-hidden="true"></span>
                              <span>{line}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {filteredTechnologies.length === 0 ? (
                <div className="mt-8 rounded-3xl border border-slate-700/60 bg-slate-950/25 p-6 text-center text-slate-200">
                  No skills match your search. Try a different keyword.
                </div>
              ) : null}
            </div>
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="inline-block p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-amber-500/30 shadow-2xl shadow-amber-500/20">
              <p className="text-2xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                Years of Experience
              </p>
              <p className="text-6xl font-bold bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 bg-clip-text text-transparent animate-pulse-slow">
                3+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

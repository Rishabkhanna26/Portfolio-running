"use client";
import { ExternalLink, Github, Bot, Globe, Settings } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const projectGroups = [
  {
    title: 'Automation & SaaS',
    description: 'Product builds focused on automation, chat, and workflow intelligence.',
    gradient: 'from-emerald-500 to-teal-500',
    icon: Bot,
    projects: [
      {
        title: 'AlgoChat',
        description: 'AI chatbot product with billing flow, status handling, and real-time notifications.',
        tags: ['Next.js', 'SaaS', 'AI', 'Automation'],
        github: 'https://github.com/Rishabkhanna26/Algochat',
        live: 'https://algoochat.vercel.app'
      },
      {
        title: 'Algoaura Lead Generation Hub',
        description: 'Lead capture and conversion workflow hub tailored for service businesses.',
        tags: ['Next.js', 'Lead Gen', 'Automation'],
        github: 'https://github.com/Rishabkhanna26/algoaura-lead-generation-hub',
        live: 'https://algoaura.in'
      },
      {
        title: 'Client Mixend',
        description: 'Client handling dashboard with secure access, task flows, and operational tracking.',
        tags: ['Next.js', 'Dashboard', 'Security'],
        github: 'https://github.com/Rishabkhanna26/Client-Mixend',
        live: 'https://client-handler.vercel.app'
      }
    ]
  },
  {
    title: 'Brand & Marketing Sites',
    description: 'High-conversion web experiences for product and service brands.',
    gradient: 'from-purple-500 to-rose-500',
    icon: Globe,
    projects: [
      {
        title: 'Araba Cafe',
        description: 'Brand site for a cafe concept with immersive storytelling and menu discovery.',
        tags: ['Next.js', 'React', 'Tailwind'],
        github: 'https://github.com/Rishabkhanna26/araba',
        live: 'https://cafecofee.vercel.app'
      },
      {
        title: 'Pahadam Ascent',
        description: 'Organic ghee brand experience with story-led landing, trust signals, and conversion flow.',
        tags: ['Next.js', 'React', 'Frontend'],
        github: 'https://github.com/Rishabkhanna26/pahadam-ascent',
        live: 'https://apnaghee.vercel.app'
      },
      {
        title: 'Digital Pulse',
        description: 'Digital agency site focused on growth services, offers, and inquiry capture.',
        tags: ['Next.js', 'Marketing', 'UI'],
        github: 'https://github.com/Rishabkhanna26/DigitalPulse',
        live: 'https://grow-media-jal.vercel.app'
      }
    ]
  },
  {
    title: 'Portfolio & Showcase',
    description: 'Personal portfolio and showcase experience with custom visual storytelling.',
    gradient: 'from-amber-500 to-orange-500',
    icon: Settings,
    projects: [
      {
        title: 'Portfolio Running',
        description: 'Personal portfolio site featuring projects, services, and conversion-focused sections.',
        tags: ['Next.js', 'Portfolio', 'Brand'],
        github: 'https://github.com/Rishabkhanna26/Portfolio-running',
        live: 'https://rishabkhanna26.vercel.app'
      }
    ]
  }
];

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex px-4 py-2 rounded-full text-xs font-bold tracking-wider bg-slate-800 border border-slate-700 text-slate-200 mb-4">
              PROJECT SHOWCASE
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
              Work by Category
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Clear separation of WordPress builds, Next.js products, and automation systems.
            </p>
          </div>

          <div className="space-y-8">
            {projectGroups.map((group, groupIndex) => {
              const GroupIcon = group.icon;

              return (
                <section
                  key={group.title}
                  className={`relative rounded-3xl border border-slate-700/70 bg-slate-900/60 overflow-hidden transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${groupIndex * 140}ms` }}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${group.gradient}`}></div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-700/80 p-6 md:p-8 bg-slate-950/40">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.gradient} p-3 mb-5`}>
                        <GroupIcon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{group.title}</h3>
                      <p className="text-slate-300 leading-relaxed mb-5">{group.description}</p>
                      <div className="inline-flex px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold">
                        {group.projects.length} Projects
                      </div>
                    </div>

                    <div className="lg:col-span-8 p-6 md:p-8">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {group.projects.map((project, projectIndex) => (
                          <article
                            key={project.title}
                            className="group rounded-2xl border border-slate-700 bg-slate-950/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500"
                          >
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <h4 className="text-lg font-bold text-white leading-tight">{project.title}</h4>
                              <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${group.gradient} text-white`}>
                                {String(projectIndex + 1).padStart(2, '0')}
                              </span>
                            </div>

                            <p className="text-base text-slate-300 leading-relaxed mb-4 min-h-[72px]">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1 text-xs font-semibold rounded-full border border-slate-600 bg-slate-800/60 text-slate-200"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-base font-medium text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
                                  aria-label="View on GitHub"
                                >
                                  <Github size={16} />
                                  Code
                                </a>
                              )}
                              {project.live && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex min-h-11 items-center gap-2 rounded-lg bg-gradient-to-r px-3 py-2 text-base font-medium text-white transition-opacity hover:opacity-90 ${group.gradient}`}
                                  aria-label="View Live Site"
                                >
                                  <ExternalLink size={16} />
                                  Visit Site
                                </a>
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

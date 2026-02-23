"use client";
import { ExternalLink, Github, Bot, Globe, Settings } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const projectGroups = [
  {
    title: 'WordPress Projects',
    description: 'Custom WordPress builds, plugin engineering, and business-ready websites.',
    gradient: 'from-emerald-500 to-teal-500',
    icon: Settings,
    projects: [
      {
        title: 'Right IAS',
        description: 'Educational platform with courses, tests, study material, and student progress tracking.',
        tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
        github: null,
        live: 'https://rightias.com/'
      },
      {
        title: 'Asvin Trading',
        description: 'Corporate trading website with product showcases, enquiry flow, and responsive UI.',
        tags: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
        github: null,
        live: 'https://asvinttrading.com/'
      },
      {
        title: 'Indus Valley Builders',
        description: 'Construction website with portfolio pages, service content, and contact capture.',
        tags: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
        github: null,
        live: 'https://indusvalleybuilders.co.uk/'
      },
      {
        title: 'E-Commerce Plugin Suite',
        description: 'Custom plugin for payment gateway integration, inventory handling, and order workflows.',
        tags: ['WordPress', 'PHP', 'MySQL', 'AJAX'],
        github: 'https://github.com/rishabkhanna26',
        live: null
      },
      {
        title: 'Performance Optimizer',
        description: 'Plugin focused on caching, query optimization, and asset-level performance tuning.',
        tags: ['PHP', 'MySQL', 'WordPress', 'Performance'],
        github: 'https://github.com/rishabkhanna26',
        live: null
      },
      {
        title: 'Booking Management System',
        description: 'Booking and reservation solution with calendar sync, emails, and payment processing.',
        tags: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
        github: 'https://github.com/rishabkhanna26',
        live: null
      }
    ]
  },
  {
    title: 'Next.js Projects',
    description: 'Fast and modern products built with Next.js and scalable UI architecture.',
    gradient: 'from-purple-500 to-rose-500',
    icon: Globe,
    projects: [
      {
        title: 'Araba Cafe',
        description: 'Premium coffee brand site that merges cafe and automotive themes, with menu, drive-in experience, gallery, franchise, and contact pages.',
        tags: ['Next.js', 'React', 'Tailwind'],
        github: null,
        live: 'https://araba-cafe.vercel.app/'
      },
      {
        title: 'Pahadam',
        description: 'Organic Himalayan ghee brand website with story-led landing, product catalog, trust sections, testimonials, and clear shop-focused conversion flow.',
        tags: ['Next.js', 'React', 'Frontend'],
        github: null,
        live: 'https://pahadam.vercel.app/'
      }
    ]
  },
  {
    title: 'Automation & Dashboard',
    description: 'Workflow tools and dashboard systems for better client operations and tracking.',
    gradient: 'from-amber-500 to-orange-500',
    icon: Bot,
    projects: [
      {
        title: 'Client Handler',
        description: 'Automation and dashboard platform for client handling, task visibility, and process tracking.',
        tags: ['Automation', 'Dashboard', 'Client Management'],
        github: null,
        live: 'https://client-handler.vercel.app/login'
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

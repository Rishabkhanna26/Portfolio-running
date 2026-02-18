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
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="hidden lg:block absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="hidden lg:block absolute bottom-10 left-10 w-80 h-80 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-amber-600">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-amber-400 to-rose-400 bg-clip-text text-transparent">
              Project Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Separated by project type for quick review: WordPress, Next.js, and Automation.
            </p>
          </div>

          <div className="space-y-10">
            {projectGroups.map((group, groupIndex) => {
              const GroupIcon = group.icon;
              return (
                <div
                  key={group.title}
                  className={`rounded-3xl border border-slate-700/70 bg-slate-900/40 backdrop-blur-sm p-6 md:p-8 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${groupIndex * 120}ms` }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.gradient} p-3`}>
                        <GroupIcon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{group.title}</h3>
                        <p className="text-slate-300">{group.description}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-slate-800 text-slate-200 border border-slate-700">
                      {group.projects.length} Projects
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {group.projects.map((project) => (
                      <article
                        key={project.title}
                        className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:shadow-2xl"
                      >
                        <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${group.gradient}`}></div>

                        <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>

                        <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/50 text-slate-200 border border-slate-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                              aria-label="View on GitHub"
                            >
                              <Github size={18} />
                              <span className="text-sm font-medium">Code</span>
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-colors"
                              aria-label="View Live Site"
                            >
                              <ExternalLink size={18} />
                              <span className="text-sm font-medium">Visit Site</span>
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { ExternalLink, Github, Code, Palette, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const projects = [
  {
    title: 'Right IAS',
    description: 'Complete educational platform for IAS exam preparation featuring course management, online tests, study materials, and student progress tracking with an intuitive user interface.',
    tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    github: null,
    live: 'https://rightias.com/'
  },
  {
    title: 'Asvin Trading',
    description: 'Professional corporate website for a trading company with dynamic content management, product showcases, inquiry forms, and responsive design optimized for business operations.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    icon: Zap,
    gradient: 'from-emerald-500 to-teal-500',
    github: null,
    live: 'https://asvinttrading.com/'
  },
  {
    title: 'Indus Valley Builders',
    description: 'Modern construction company website featuring project portfolios, service listings, contact management, and gallery integration with a clean, professional UK-focused design.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    icon: Palette,
    gradient: 'from-orange-500 to-red-500',
    github: null,
    live: 'https://indusvalleybuilders.co.uk/'
  },
  {
    title: 'E-Commerce Plugin Suite',
    description: 'Custom WordPress plugin for advanced e-commerce functionality including payment gateway integration, inventory management, and order tracking.',
    tags: ['WordPress', 'PHP', 'MySQL', 'AJAX'],
    icon: Code,
    gradient: 'from-violet-500 to-blue-500',
    github: 'https://github.com/rishabkhanna26',
    live: null
  },
  {
    title: 'Performance Optimizer',
    description: 'WordPress plugin that optimizes database queries, implements caching strategies, and minifies assets for improved site speed.',
    tags: ['PHP', 'MySQL', 'WordPress', 'Performance'],
    icon: Zap,
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com/rishabkhanna26',
    live: null
  },
  {
    title: 'Booking Management System',
    description: 'Complete booking and reservation system with calendar integration, email notifications, and payment processing.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
    icon: Code,
    gradient: 'from-pink-500 to-rose-500',
    github: 'https://github.com/rishabkhanna26',
    live: null
  }
];

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of custom solutions and innovative web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.gradient} p-3 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-slate-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
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
                          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                          aria-label="View Live Site"
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm font-medium">Visit Site</span>
                        </a>
                      )}
                    </div>
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

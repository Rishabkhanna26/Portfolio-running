"use client";
import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const technologies = [
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 95, category: 'Frontend' },
  { name: 'JavaScript', level: 92, category: 'Frontend' },
  { name: 'React', level: 88, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'jQuery', level: 90, category: 'Frontend' },
  { name: 'WordPress', level: 98, category: 'Backend' },
  { name: 'PHP', level: 93, category: 'Backend' },
  { name: 'Node.js', level: 82, category: 'Backend' },
  { name: 'AJAX', level: 90, category: 'Backend' },
  { name: 'Git', level: 88, category: 'Tools' },
  { name: 'GitHub', level: 88, category: 'Tools' }
];

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
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

          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`min-h-11 rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredSkill(tech.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                      hoveredSkill === tech.name
                        ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white scale-110'
                        : 'bg-slate-700 text-slate-300'
                    }`}>
                      {tech.level}%
                    </span>
                  </div>

                  <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isInView ? `${tech.level}%` : '0%',
                        transitionDelay: `${index * 50 + 300}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>

                  <div className="mt-3 text-base text-slate-400 group-hover:text-slate-300 transition-colors">
                    {tech.category}
                  </div>
                </div>

                <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-500 transition-all duration-300 ${
                  hoveredSkill === tech.name ? 'scale-150 animate-ping' : ''
                }`}></div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="inline-block p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-amber-500/30 shadow-2xl shadow-amber-500/20">
              <p className="text-2xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                Years of Experience
              </p>
              <p className="text-6xl font-bold bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 bg-clip-text text-transparent animate-pulse-slow">
                2+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

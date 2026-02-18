"use client";
import { useState } from 'react';
import { Briefcase, Award, TrendingUp, Sparkles } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const experiences = [
  {
    title: ' Web Developer',
    company: 'Freelance',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Leading complex WordPress projects, specializing in custom plugin development, theme customization, and performance optimization for diverse clients worldwide.',
    achievements: [
      'Developed custom plugins for e-commerce solutions',
      'Optimized website performance resulting in 50% faster load times',
      'Integrated multiple third-party APIs and payment gateways',
      'Managed and delivered projects for clients on time successfully'
    ],
    color: 'from-amber-500 via-rose-500 to-purple-500'
  },
  {
    title: 'Administrator',
    company: 'Right IAS',
    period: '2022 - Present',
    type: 'Freelance',
    description: 'Full-stack web development focusing on PHP, JavaScript, and MySQL database management with emphasis on scalable architecture.',
    achievements: [
      'Built responsive web applications using Wordpress',
      'Monitoring and maintaining Site Health and Security',
      'Reduced bug rate by 40% through code review processes'
    ],
    color: 'from-purple-500 via-pink-500 to-rose-500'
  },
  {
    title: 'Full Stack Developer',
    company: 'Erosteps',
    period: '2023 - Present',
    type: 'Full-time',
    description: 'Started career in web development, working on client websites and learning industry standards while building foundational skills.',
    achievements: [
      'Maintained and updated 10+ client WordPress websites',
      'Implemented custom CSS and JavaScript features',
      'Collaborated with design team on UI/UX improvements',
      'Achieved client satisfaction rating'
    ],
    color: 'from-rose-500 via-orange-500 to-amber-500'
  }
];

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="hidden lg:block absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="hidden lg:block absolute bottom-0 left-1/3 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-rose-600 text-white text-sm font-bold rounded-full shadow-lg animate-pulse-slow">
                JOURNEY
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              Experience Timeline
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A progressive journey of growth, innovation, and delivering excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-rose-500 to-purple-600 hidden lg:block transform -translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 transition-all duration-1000 ${
                  isInView ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <div className={`group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 ${
                      activeIndex === index
                        ? 'border-transparent bg-gradient-to-br from-white to-purple-50 shadow-purple-500/20'
                        : 'border-slate-100'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-4 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 text-sm font-bold rounded-full">
                          {exp.type}
                        </span>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} p-2.5 transform group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                          <Briefcase className="w-full h-full text-white" />
                        </div>
                      </div>

                      <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                        activeIndex === index
                          ? 'bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent'
                          : 'text-slate-900'
                      }`}>
                        {exp.title}
                      </h3>

                      <div className="flex items-center justify-between mb-4">
                        <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </p>
                        <p className="text-slate-500 font-medium text-sm">
                          {exp.period}
                        </p>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 group/achievement"
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} p-1 transform group-hover/achievement:scale-110 transition-all duration-300`}>
                              <Award className="w-full h-full text-white" />
                            </div>
                            <p className="text-slate-700 group-hover/achievement:text-slate-900 transition-colors">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className={`mt-6 pt-6 border-t border-slate-200 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                        activeIndex === index
                          ? 'text-purple-600'
                          : 'text-slate-500'
                      }`}>
                        <TrendingUp size={18} />
                        <span>Impact & Growth</span>
                        <Sparkles size={18} className="ml-auto animate-pulse-slow" />
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} p-4 shadow-2xl transform transition-all duration-500 ${
                      activeIndex === index ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
                    }`}>
                      <Briefcase className="w-full h-full text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} shadow-lg transition-all duration-300 ${
                    activeIndex === index ? 'scale-150 ring-8 ring-white' : 'scale-100'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="inline-flex flex-wrap items-center justify-center gap-8 p-8 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl border-2 border-purple-200">
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-600 mb-1">Projects Completed</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">30+</p>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-300 to-transparent hidden sm:block"></div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-600 mb-1">On Time Delivery</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">95%</p>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-rose-300 to-transparent hidden sm:block"></div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-600 mb-1">Client Satisfaction Rate</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

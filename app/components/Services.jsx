"use client";
import { useState } from 'react';
import { Users, Zap, Globe, Palette, Settings, Bot } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const services = [
  {
    icon: Users,
    title: 'Lead Management',
    description: 'Comprehensive lead tracking and management systems that help you capture, nurture, and convert prospects into loyal customers.',
    features: ['CRM Integration', 'Lead Scoring', 'Pipeline Management', 'Analytics Dashboard'],
    color: 'from-purple-600 to-pink-600',
    delay: 0
  },
  {
    icon: Bot,
    title: 'Automation',
    description: 'Streamline your workflows with intelligent automation solutions that save time and reduce manual tasks across your business.',
    features: ['Workflow Automation', 'Email Sequences', 'Task Scheduling', 'API Integration'],
    color: 'from-amber-600 to-orange-600',
    delay: 100
  },
  {
    icon: Globe,
    title: 'Website Building',
    description: 'Custom-built, responsive websites tailored to your brand identity and business goals with modern technologies.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Mobile First'],
    color: 'from-blue-600 to-cyan-600',
    delay: 200
  },
  {
    icon: Palette,
    title: 'Website Redesigning',
    description: 'Transform your existing website with a fresh, modern design that improves user experience and drives conversions.',
    features: ['UI/UX Redesign', 'Brand Refresh', 'Performance Boost', 'Conversion Focus'],
    color: 'from-rose-600 to-pink-600',
    delay: 300
  },
  {
    icon: Settings,
    title: 'WordPress Customization',
    description: 'Expert WordPress development including custom plugins, themes, and advanced functionality tailored to your needs.',
    features: ['Custom Plugins', 'Theme Development', 'Performance Tuning', 'Security Hardening'],
    color: 'from-emerald-600 to-teal-600',
    delay: 400
  },
  {
    icon: Zap,
    title: 'Client Handling System',
    description: 'Automated client management systems that enhance communication, track projects, and improve client satisfaction.',
    features: ['Client Portal', 'Project Tracking', 'Communication Tools', 'Document Management'],
    color: 'from-violet-600 to-purple-600',
    delay: 500
  }
];

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleServiceClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="hidden lg:block absolute top-10 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="hidden lg:block absolute top-20 right-20 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="hidden lg:block absolute bottom-10 left-1/2 w-96 h-96 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-amber-600 text-white text-sm font-bold rounded-full shadow-lg animate-pulse-slow">
                WHAT I OFFER
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-amber-400 to-rose-400 bg-clip-text text-transparent">
              Premium Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your business and drive measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;
              const isClicked = clickedIndex === index;

              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${service.delay}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleServiceClick(index)}
                >
                  <div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-500 transform cursor-pointer ${
                    isClicked
                      ? 'border-amber-500 scale-105 shadow-2xl shadow-amber-500/30'
                      : isHovered
                      ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20'
                      : 'border-slate-700/50 hover:-translate-y-2 shadow-lg'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-amber-600/10 to-rose-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-3.5 mb-6 shadow-lg transition-all duration-500 ${
                        isHovered ? 'scale-110 rotate-6' : ''
                      } ${isClicked ? 'scale-125 rotate-12' : ''}`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                        isClicked
                          ? 'bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent'
                          : 'text-white group-hover:text-purple-300'
                      }`}>
                        {service.title}
                      </h3>

                      <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors">
                        {service.description}
                      </p>

                      <div className={`space-y-2 transition-all duration-500 ${
                        isClicked ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        <div className="border-t border-slate-700 pt-4 mb-4"></div>
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-sm transition-all duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {!isClicked && (
                        <div className="mt-6 pt-6 border-t border-slate-700">
                          <button className="text-sm font-semibold text-purple-400 group-hover:text-amber-400 transition-colors flex items-center gap-2">
                            Learn More
                            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                          </button>
                        </div>
                      )}

                      {isClicked && (
                        <div className="mt-6 pt-6 border-t border-slate-700">
                          <button className="w-full py-3 px-6 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
                            Get Started
                          </button>
                        </div>
                      )}
                    </div>

                    <div className={`absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-to-r ${service.color} transition-all duration-300 ${
                      isHovered ? 'scale-150 animate-ping' : ''
                    } ${isClicked ? 'scale-200' : ''}`}></div>

                    <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="inline-block p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <p className="text-slate-300 mb-4 text-lg">
                Need something custom?
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-amber-600 to-rose-600 hover:from-purple-500 hover:via-amber-500 hover:to-rose-500 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
              >
                Let's Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

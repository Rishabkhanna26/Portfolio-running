"use client";
import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const greetings = [
  'Hello',
  'नमस्ते',
  'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
  'வணக்கம்',
  'নমস্কার',
  'કેમ છો',
  'ನಮಸ್ಕಾರ',
  'नमस्कार',
  'നമസ്കാരം',
  '你好',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Olá',
  'こんにちは',
  '안녕하세요',
  'Привет',
  'Merhaba'
];

export default function Hero() {
  const { scrollProgress, isAtTop } = useScrollPosition();
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>



      <div className="container mx-auto px-4 py-20 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600 p-1 shadow-2xl shadow-purple-500/50 transition-all duration-300 ease-out overflow-hidden"
              style={{
                transform: `scale(${1 - scrollProgress * 0.5}) translate(${scrollProgress * -50}%, ${scrollProgress * -50}%)`,
                opacity: Math.max(1 - scrollProgress * 1.5, 0),
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden animate-float">
                <Image
                  src="/propic.jpg"
                  alt="Rishab Khanna"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="h-10 flex items-center justify-center">
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-300 via-rose-300 to-purple-300 bg-clip-text text-transparent transition-all duration-300">
                {greetings[greetingIndex]}
              </p>
            </div>
          </div>

          <h1 className="break-words text-4xl font-bold mb-4 animate-slide-up sm:text-5xl md:text-7xl">
           Rishab Khanna
          </h1>

          <p className="text-xl md:text-2xl bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent mb-6 animate-slide-up animation-delay-200">
            Web Developer
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-300 mb-8 animate-slide-up animation-delay-300">
            <MapPin size={20} />
            <span>Jalandhar, Punjab, India</span>
          </div>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
            I specialize in building custom plugins, integrating APIs, and optimizing performance.
            Expertise in WordPress, PHP, JavaScript, and modern web technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up animation-delay-500">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-rose-600 px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Get In Touch
            </Link>
            <Link
              href="/#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-amber-600 px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:bg-gradient-to-r hover:from-amber-600 hover:to-rose-600 hover:border-transparent hover:scale-105"
            >
              View Projects
            </Link>
          </div>

          <div className="flex justify-center gap-6 animate-slide-up animation-delay-600">
            <a
              href="https://github.com/rishabkhanna26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/rishabkhanna26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-purple-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://twitter.com/rishabkhanna26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-amber-400"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
            <a
              href="https://instagram.com/rishabkhanna26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-pink-500"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="mailto:rishabkhanna26@gmail.com"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-rose-400"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="/#skills" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-colors hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

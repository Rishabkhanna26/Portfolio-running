"use client";

import * as Icons from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rishab Khanna
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Web Developer specializing in WordPress, PHP, and modern JavaScript frameworks.
                Building custom solutions that drive results.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <Link href="/#home" className="inline-flex min-h-11 items-center text-base text-slate-400 transition-colors hover:text-white">
                  Home
                </Link>
                <Link href="/#skills" className="inline-flex min-h-11 items-center text-base text-slate-400 transition-colors hover:text-white">
                  Skills
                </Link>
                <Link href="/#experience" className="inline-flex min-h-11 items-center text-base text-slate-400 transition-colors hover:text-white">
                  Experience
                </Link>
                <Link href="/#projects" className="inline-flex min-h-11 items-center text-base text-slate-400 transition-colors hover:text-white">
                  Projects
                </Link>
                <Link href="/#contact" className="inline-flex min-h-11 items-center text-base text-slate-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com/rishabkhanna26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-white"
                  aria-label="GitHub"
                >
                  {Icons.Github ? <Icons.Github size={24} /> : <span />}
                </a>
                <a
                  href="https://linkedin.com/in/rishabkhanna26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
                  aria-label="LinkedIn"
                >
                  {Icons.Linkedin ? <Icons.Linkedin size={24} /> : <span />}
                </a>
                <a
                  href="https://twitter.com/rishabkhanna26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-blue-400"
                  aria-label="Twitter"
                >
                  {Icons.Twitter ? <Icons.Twitter size={24} /> : <span />}
                </a>
                <a
                  href="https://instagram.com/rishabkhanna26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-pink-500"
                  aria-label="Instagram"
                >
                  {Icons.Instagram ? <Icons.Instagram size={24} /> : <span />}
                </a>
              </div>
              <a
                href="mailto:rishabkhanna26@gmail.com"
                className="inline-flex min-h-11 max-w-full items-center gap-2 break-all text-base text-slate-400 transition-colors hover:text-white"
              >
                {Icons.Mail ? <Icons.Mail size={18} /> : <span />}
                <span>rishabkhanna26@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="flex items-center gap-2 text-base text-slate-400">
              Built with {Icons.Heart ? <Icons.Heart size={16} className="text-red-500 animate-pulse" /> : <span />} by Rishab Khanna
            </p>
            <p className="text-base text-slate-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
  {Icons.ArrowUp ? <Icons.ArrowUp size={24} /> : <span />}
      </button>
    </footer>
  );
}

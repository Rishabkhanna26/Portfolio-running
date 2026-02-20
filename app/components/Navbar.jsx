"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

// useScrollPosition hook - inline
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const heroHeight = window.innerHeight;
      setScrollPosition(Math.min(position / heroHeight, 1));
      setIsAtTop(position < heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollProgress: scrollPosition, isAtTop };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useScrollPosition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/automation-product', label: 'Automation Product' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 relative">
          <Link
            href="/"
            className={`flex items-center transition-all duration-300 ${
              scrolled ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-lg overflow-hidden transform transition-transform hover:scale-110">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/propic.jpg" 
                    alt="Rishab Khanna"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="ml-3 flex flex-col items-start">
                <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
                  Rishab Khanna
                </span>
                <span className="text-xs text-slate-400">Web Developer</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-amber-400 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-800 animate-slide-down">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-amber-400 transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

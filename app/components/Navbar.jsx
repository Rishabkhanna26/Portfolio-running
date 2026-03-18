"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 50);

      if (currentScrollY <= 0) {
        setIsHidden(false);
      } else if (delta > 5 && currentScrollY > 120) {
        setIsHidden(true);
      } else if (delta < -5) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      className={`site-fixed fixed top-0 left-0 right-0 z-50 transition-transform duration-300 will-change-transform ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-800/70'
          : 'bg-slate-950/70 backdrop-blur-sm'
      } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 relative">
          <Link
            href="/"
            className="flex items-center transition-all duration-300"
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
                <span className="text-sm text-slate-400">Web Developer</span>
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
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-800 animate-slide-down">
          <div className="container mx-auto px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-11 items-center text-base font-medium text-white transition-colors hover:text-amber-400"
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

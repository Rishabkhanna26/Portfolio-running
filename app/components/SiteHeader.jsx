"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/automation-product', label: 'Automation Product' },
  { href: '/contact', label: 'Contact' }
];

function isActive(pathname, href) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-base font-bold tracking-tight text-white sm:text-lg">
          Rishab Khanna
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(pathname, link.href)
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-800 bg-slate-950 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(pathname, link.href)
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

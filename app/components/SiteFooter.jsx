import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const internalLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/automation-product', label: 'Automation Product' },
  { href: '/contact', label: 'Contact' }
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <section>
          <h2 className="text-lg font-semibold text-white">Rishab Khanna</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Building WhatsApp automation, AI chatbots, and lead generation systems focused on predictable growth.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Internal Links</h2>
          <nav className="mt-3 flex flex-col gap-2">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">External Profiles</h2>
          <div className="mt-3 flex items-center gap-4">
            <a
              href="https://github.com/rishabkhanna26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rishabkhanna26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/rishabkhanna26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
          <a
            href="mailto:rishabkhanna26@gmail.com"
            className="mt-4 block text-sm text-slate-400 transition-colors hover:text-white"
          >
            rishabkhanna26@gmail.com
          </a>
        </section>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-800 px-4 pt-6 text-xs text-slate-500 sm:px-6">
        © {new Date().getFullYear()} Rishab Khanna. All rights reserved.
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT, telLink } from '../lib/contact';

const NAV_LINKS = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }} aria-label="Vertex Elevator Care home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-brand-lightBlue/60 hover:text-brand-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className="btn-secondary px-5 py-2.5 text-sm"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="btn-primary px-5 py-2.5 text-sm"
          >
            Request AMC Quote
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="btn-primary px-4 py-2.5 text-sm"
          >
            Request AMC Quote
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand-navy hover:bg-slate-100"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-96 border-t border-slate-100 shadow-soft' : 'max-h-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-brand-lightBlue/60 hover:text-brand-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-2">
            <a href={telLink()} className="btn-secondary w-full py-3 text-sm">
              <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="btn-primary w-full py-3 text-sm"
            >
              Request AMC Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

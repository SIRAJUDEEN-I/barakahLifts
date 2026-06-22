import { Phone, Mail, MapPin, MessageCircle, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT, telLink, whatsappLink } from '../lib/contact';

const SERVICES_LIST = [
  'Elevator AMC',
  'Elevator Repair',
  'Elevator Modernization',
  'Elevator Installation Support',
  'Elevator Servicing',
  'Elevator Spare Parts',
];

const SOCIALS = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
];

export function Footer() {
  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-white/95 p-3 inline-block">
              <Logo />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Barakah Lifts — a trusted elevator care and maintenance partner
              that keeps buildings safe and elevators reliable.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 ring-1 ring-white/10 transition-colors hover:bg-brand-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <a href="#services" onClick={handleNav('#services')} className="text-slate-400 transition-colors hover:text-brand-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#why-us" onClick={handleNav('#why-us')} className="text-slate-400 hover:text-brand-primary">Why Choose Us</a></li>
              <li><a href="#industries" onClick={handleNav('#industries')} className="text-slate-400 hover:text-brand-primary">Industries Served</a></li>
              <li><a href="#about" onClick={handleNav('#about')} className="text-slate-400 hover:text-brand-primary">About Us</a></li>
              <li><a href="#contact" onClick={handleNav('#contact')} className="text-slate-400 hover:text-brand-primary">Request AMC Quote</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telLink()} className="flex items-start gap-3 text-slate-400 hover:text-brand-primary">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-brand-primary">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  WhatsApp Enquiry
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 text-slate-400 hover:text-brand-primary">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Barakah Lifts. All rights reserved.</p>
          <p>Safety-first elevator maintenance &amp; AMC services.</p>
        </div>
      </div>
    </footer>
  );
}

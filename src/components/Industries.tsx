import { Building2, Briefcase, Building, Stethoscope, Factory } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const INDUSTRIES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Building2, title: 'Residential Apartments', desc: 'Safe, reliable lifts for residents & visitors' },
  { icon: Briefcase, title: 'Commercial Buildings', desc: 'High-traffic elevators kept operational' },
  { icon: Building, title: 'Offices', desc: 'Minimal downtime for busy workspaces' },
  { icon: Stethoscope, title: 'Hospitals', desc: 'Mission-critical lift availability' },
  { icon: Factory, title: 'Industrial Facilities', desc: 'Robust servicing for heavy-duty usage' },
];

export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal section-eyebrow">Industries Served</span>
          <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-bold sm:text-4xl">
            Elevator care for every building type
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-slate-600">
            Trusted by facility managers and building associations across
            residential, commercial and industrial sectors.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {INDUSTRIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} card group flex flex-col items-center gap-3 p-6 text-center hover:-translate-y-1.5 hover:shadow-card lg:items-start lg:text-left`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-lightBlue text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-base font-bold leading-tight">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </article>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-navy to-slate-800 px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Don't see your building type?</h3>
              <p className="mt-1 text-slate-300">We service all elevator systems. Let's discuss your requirements.</p>
            </div>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary shrink-0">
              Get a Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BadgeCheck, Lightbulb, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const HIGHLIGHTS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: BadgeCheck,
    title: 'Maintenance expertise',
    desc: 'Years of hands-on elevator servicing and inspection.',
  },
  {
    icon: Lightbulb,
    title: 'Technical problem solving',
    desc: 'Root-cause troubleshooting, not just quick fixes.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-focused service',
    desc: 'Clear communication and dependable turnaround.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-brand-bg py-20 md:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-200">
              <img
                src="https://images.pexels.com/photos/8961064/pexels-photo-8961064.jpeg?auto=compress&cs=tinysrgb&w=1100"
                alt="Elevator technician inspecting elevator control system"
                className="h-[300px] w-full object-cover sm:h-[440px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
            </div>
            {/* Floating experience badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-6">
              <div className="card flex items-center gap-3 px-5 py-4">
                <span className="font-display text-3xl font-extrabold text-brand-primary">15+</span>
                <span className="text-xs font-semibold leading-tight text-slate-600">
                  Years of<br />elevator experience
                </span>
              </div>
            </div>
            {/* Decorative blue accent */}
            <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-2xl bg-brand-lightBlue/70 blur-xl" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="reveal section-eyebrow">About Us</span>
            <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-bold sm:text-4xl">
              Experienced elevator service you can trust
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-lg leading-relaxed text-slate-600">
              Built on practical elevator maintenance experience, our company
              provides dependable service solutions focused on safety,
              reliability and customer satisfaction.
            </p>

            <div className="mt-8 space-y-4">
              {HIGHLIGHTS.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className={`reveal reveal-delay-${i + 1} flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-100`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-brand-navy">{h.title}</p>
                      <p className="text-sm text-slate-600">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

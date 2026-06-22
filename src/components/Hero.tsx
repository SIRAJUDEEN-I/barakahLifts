import { Phone, ShieldCheck, Wrench, Zap, ArrowRight, Star } from 'lucide-react';
import { telLink } from '../lib/contact';

const FLOATING_CARDS = [
  {
    icon: Wrench,
    title: 'Experienced Technical Support',
    sub: 'Hands-on elevator expertise',
    delay: '0s',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Maintenance',
    sub: 'Fewer breakdowns, safer rides',
    delay: '1.5s',
  },
  {
    icon: Zap,
    title: 'Fast Breakdown Response',
    sub: 'Reliable on-call support',
    delay: '3s',
  },
];

export function Hero() {
  const scrollToContact = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-brand-bg pt-24 md:pt-28">
      {/* Soft gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-lightBlue/60 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-12 py-12 md:py-20 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <div className="max-w-xl">
          <div className="reveal">
            <span className="section-eyebrow">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary" />
              Trusted Elevator Care Partner
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 mt-5 font-heading text-4xl font-bold leading-[1.1] text-brand-navy sm:text-5xl lg:text-6xl">
            Reliable Elevator Maintenance &amp;{' '}
            <span className="text-brand-primary">Safety Solutions</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-5 text-lg leading-relaxed text-slate-600">
            Professional AMC, repair and modernization services that keep your
            elevators safe, efficient and operational.
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={(e) => scrollToContact(e, '#contact')}
              className="btn-primary text-base"
            >
              Request AMC Quote
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href={telLink()} className="btn-secondary text-base">
              <Phone className="h-4 w-5" />
              Call Now
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="4.9 out of 5 rating">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-brand-navy">4.9</span>
              <span>Client rating</span>
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <p className="font-semibold text-brand-navy">Safety-first approach</p>
            <div className="h-5 w-px bg-slate-200" />
            <p className="font-semibold text-brand-navy">On-time servicing</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative reveal reveal-delay-2">
          <div className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-200">
            <img
              src="https://images.pexels.com/photos/2762082/pexels-photo-2762082.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern elevator interior in a commercial building"
              className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[540px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
          </div>

          {/* Floating trust cards — desktop: absolute floating; mobile: hidden */}
          {FLOATING_CARDS.map((c, i) => {
            const Icon = c.icon;
            const positions = [
              'absolute -left-4 top-10 sm:-left-6',
              'absolute -right-4 top-1/3 sm:-right-6',
              'absolute -left-3 bottom-8 sm:-left-6',
            ];
            return (
              <div
                key={i}
                className={`animate-float hidden sm:block ${positions[i]}`}
                style={{ animationDelay: c.delay }}
              >
                <div className="card flex items-center gap-3 px-4 py-3 backdrop-blur-md" style={{ minWidth: '210px' }}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-lightBlue text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-navy leading-tight">{c.title}</p>
                    <p className="text-xs text-slate-500">{c.sub}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Trust cards strip — mobile only */}
          <div className="mt-5 flex gap-3 overflow-x-auto pb-1 sm:hidden" style={{ scrollbarWidth: 'none' }}>
            {FLOATING_CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="card flex shrink-0 items-center gap-3 px-4 py-3" style={{ minWidth: '200px' }}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-lightBlue text-brand-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-navy leading-tight">{c.title}</p>
                    <p className="text-xs text-slate-500">{c.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom stat badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0">
            <div className="card flex items-center gap-3 px-5 py-3">
              <span className="font-display text-2xl font-extrabold text-brand-primary">24/7</span>
              <span className="text-xs font-semibold text-slate-600">Breakdown<br />support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

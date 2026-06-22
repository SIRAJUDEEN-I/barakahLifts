import { ClipboardCheck, Wrench, RefreshCw, HardHat, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: 'Elevator AMC',
    description:
      'Scheduled maintenance plans designed to keep elevators safe and operational.',
    accent: 'Annual Maintenance Contracts',
  },
  {
    icon: Wrench,
    title: 'Elevator Repair',
    description:
      'Professional diagnosis and repair for elevator faults and breakdowns.',
    accent: 'Faults & breakdown support',
  },
  {
    icon: RefreshCw,
    title: 'Elevator Modernization',
    description:
      'Upgrade existing elevators with improved performance and safety.',
    accent: 'Performance upgrades',
  },
  {
    icon: HardHat,
    title: 'Elevator Installation Support',
    description:
      'Support for new elevator requirements in residential and commercial buildings.',
    accent: 'New installs & commissioning',
  },
];

export function Services() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="bg-brand-bg py-20 md:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="reveal section-eyebrow">Our Services</span>
            <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-bold sm:text-4xl">
              Complete elevator care, end to end
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-slate-600">
              From routine AMC servicing to modernization and installation
              support, we keep every elevator dependable.
            </p>
          </div>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="reveal reveal-delay-2 hidden shrink-0 items-center gap-2 font-semibold text-brand-primary hover:gap-3 md:inline-flex"
          >
            Talk to our team <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden card p-7 hover:-translate-y-2 hover:shadow-card`}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-lightBlue/50 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-glow">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-5 text-xl font-bold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                  {s.description}
                </p>
                <p className="relative mt-4 text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {s.accent}
                </p>
              </article>
            );
          })}
        </div>

        {/* Secondary services strip */}
        <div className="reveal reveal-delay-3 mt-8 grid gap-4 sm:grid-cols-2">
          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lightBlue text-brand-primary">
              <Wrench className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-brand-navy">Elevator Servicing</p>
              <p className="text-sm text-slate-600">Planned servicing to keep rides smooth and compliant.</p>
            </div>
          </div>
          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lightBlue text-brand-primary">
              <ClipboardCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-brand-navy">Elevator Spare Parts</p>
              <p className="text-sm text-slate-600">Genuine parts supply for reliable, long-lasting repairs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

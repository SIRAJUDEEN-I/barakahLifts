import { Cog, Search, ShieldCheck, Clock } from 'lucide-react';

const CARDS = [
  {
    icon: Cog,
    title: 'Technical Expertise',
    description:
      'Hands-on elevator maintenance knowledge and practical troubleshooting experience.',
  },
  {
    icon: Search,
    title: 'Preventive Maintenance',
    description:
      'Regular inspections and servicing to reduce unexpected breakdowns.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description:
      'Maintenance practices focused on passenger safety and elevator reliability.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description:
      'Reliable support when elevator issues need immediate attention.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal section-eyebrow">Why Choose Us</span>
          <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-bold sm:text-4xl">
            A partner you can trust with your elevators
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-slate-600">
            We combine deep elevator engineering knowledge with a safety-first
            mindset to keep your building moving reliably.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className={`reveal reveal-delay-${i + 1} card group p-7 hover:-translate-y-1.5 hover:shadow-card`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lightBlue text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

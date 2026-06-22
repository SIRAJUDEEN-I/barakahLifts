export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy shadow-soft">
        <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none" aria-hidden="true">
          <rect x="18" y="10" width="28" height="44" rx="4" stroke="#3A77EF" strokeWidth="3" />
          <line x1="32" y1="14" x2="32" y2="50" stroke="#DBEAFE" strokeWidth="2" />
          <circle cx="32" cy="22" r="2.5" fill="#DBEAFE" />
          <circle cx="32" cy="32" r="2.5" fill="#3A77EF" />
          <circle cx="32" cy="42" r="2.5" fill="#DBEAFE" />
        </svg>
      </span>
      <div className="leading-none">
        <p className="font-display text-lg font-extrabold tracking-tight text-brand-navy">
          Barakah<span className="text-brand-primary">Lifts</span>
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          Elevator Care &amp; Maintenance
        </p>
      </div>
    </div>
  );
}

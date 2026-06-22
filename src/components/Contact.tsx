import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitEnquiry } from '../lib/supabase';
import type { ServiceRequired } from '../lib/supabase';
import { CONTACT, whatsappLink, telLink } from '../lib/contact';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const SERVICES: { value: ServiceRequired; label: string }[] = [
  { value: 'AMC', label: 'AMC' },
  { value: 'Repair', label: 'Repair' },
  { value: 'Modernization', label: 'Modernization' },
  { value: 'Installation', label: 'Installation' },
];

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  building_name: '',
  location: '',
  number_of_elevators: 1,
  service_required: 'AMC' as ServiceRequired,
  message: '',
};

export function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      await submitEnquiry({
        ...form,
        number_of_elevators: Number(form.number_of_elevators) || 1,
      });
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try calling or WhatsApping us.'
      );
    }
  };

  return (
    <section id="contact" className="relative bg-brand-navy py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
      </div>

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-lightBlue ring-1 ring-white/15">
            <span className="h-2 w-2 rounded-full bg-brand-primary" />
            Get in touch
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-bold text-white sm:text-4xl">
            Need reliable elevator service?
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-slate-300">
            Contact us for AMC, repair and maintenance support.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <aside className="reveal lg:col-span-2">
            <div className="space-y-4">
              <ContactInfo
                icon={Phone}
                label="Phone"
                value={CONTACT.phoneDisplay}
                href={telLink()}
              />
              <ContactInfo
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with us instantly"
                href={whatsappLink()}
              />
              <ContactInfo
                icon={Mail}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactInfo
                icon={MapPin}
                label="Location"
                value={CONTACT.location}
              />
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">Service hours</p>
              <p className="mt-1 text-sm text-slate-300">{CONTACT.hours}</p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full py-3 text-sm">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Enquiry
              </a>
            </div>

            {/* Embedded map */}
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <iframe
                title="Barakah Lifts location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.99!2d79.8481989!3d13.0478169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          {/* Form */}
          <div className="reveal reveal-delay-1 lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold">Enquiry received!</h3>
                  <p className="mt-2 max-w-sm text-slate-600">
                    Thank you for reaching out. Our elevator care team will
                    contact you shortly to discuss your requirements.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-6 text-sm"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" required>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Phone Number" required>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email">
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="name@email.com"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Building / Company Name" required>
                      <input
                        type="text"
                        required
                        value={form.building_name}
                        onChange={(e) => update('building_name', e.target.value)}
                        placeholder="e.g. Skyline Apartments"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Location" required>
                      <input
                        type="text"
                        required
                        value={form.location}
                        onChange={(e) => update('location', e.target.value)}
                        placeholder="City / Area"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Number of Elevators" required>
                      <input
                        type="number"
                        min={1}
                        max={500}
                        required
                        value={form.number_of_elevators}
                        onChange={(e) => update('number_of_elevators', Number(e.target.value))}
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <Field label="Service Required" required>
                    <select
                      required
                      value={form.service_required}
                      onChange={(e) => update('service_required', e.target.value as ServiceRequired)}
                      className="form-input"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message">
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us about your elevator requirements or current issues..."
                      className="form-input resize-none"
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      <p>{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    We'll respond within one business day. Your information stays private.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          background-color: #F8FAFC;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #111827;
          transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .form-input::placeholder { color: #94a3b8; }
        .form-input:focus {
          outline: none;
          border-color: #3A77EF;
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(58, 119, 239, 0.12);
        }
      `}</style>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/10">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
        <p className="mt-0.5 font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return content;
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-brand-navy">
        {label}
        {required && <span className="text-brand-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}

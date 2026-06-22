import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { telLink, whatsappLink } from '../lib/contact';

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={telLink()}
        aria-label="Call now"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy p-3 text-white shadow-card transition-transform hover:scale-105 hover:bg-slate-800"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp enquiry"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-card transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

// Tailwind h-13/w-13 not available; using h-12/w-12 above with p-3.

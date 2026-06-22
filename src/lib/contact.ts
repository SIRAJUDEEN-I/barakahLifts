export const CONTACT = {
  phoneDisplay: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsapp: '919876543210',
  email: 'care@barakahlifts.com',
  location: 'Chennai, Tamil Nadu, India',
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM',
};

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I'd like to know more about Barakah Lifts elevator AMC and maintenance services."
);

export function whatsappLink(message?: string) {
  const msg = message ? encodeURIComponent(message) : WHATSAPP_MESSAGE;
  return `https://wa.me/${CONTACT.whatsapp}?text=${msg}`;
}

export function telLink() {
  return `tel:${CONTACT.phoneRaw}`;
}

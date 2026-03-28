import { MessageCircle } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../constants';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello, I want to order from The Rooftop Restaurant");
  const whatsappUrl = `https://wa.me/${RESTAURANT_DETAILS.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

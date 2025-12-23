import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919826820824?text=Hello%20Apna%20Fruit%20Box!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 bg-whatsapp-green hover:bg-whatsapp-dark text-white rounded-full p-3 sm:p-4 shadow-premium hover:shadow-gold-glow transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center group min-h-[52px] min-w-[52px] sm:min-h-[56px] sm:min-w-[56px]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      <span className="absolute left-16 sm:left-20 bg-brand-deep text-white px-3 py-2 sm:px-4 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-premium hidden sm:block">
        Chat with us!
      </span>
    </a>
  );
}

import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const go = (page: string) => {
    if (onNavigate) onNavigate(page);
    else window.location.hash = `#${page}`;
  };

  return (
    <footer className="bg-brand-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img src="/logov2.svg" alt="Logo" className="w-auto h-24 sm:w-auto sm:h-24" />
            </div>
              <p className="text-sm sm:text-base leading-relaxed text-link-light">
              Fresh, seasonal fruit boxes — thoughtfully packed and delivered to your door.
            </p>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6 tracking-luxury">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <button onClick={() => go('home')} className="hover:text-fruit-yellow transition-colors duration-300 inline-block min-h-[44px] flex items-center">Home</button>
              </li>
                <li>
                <button onClick={() => go('about')} className="hover:text-fruit-yellow transition-colors duration-300 inline-block min-h-[44px] flex items-center">About Us</button>
              </li>
              <li>
                <button onClick={() => go('contact')} className="hover:text-fruit-yellow transition-colors duration-300 inline-block min-h-[44px] flex items-center">Contact Us</button>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6 tracking-luxury">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-fruit-yellow" />
                  <a href="tel:+919826820824" className="text-link-light hover:text-fruit-yellow transition-colors min-h-[44px] flex items-center">+91 98268 20824</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-fruit-yellow" />
                  <a href="mailto:apnafruitbox@gmail.com" className="text-link-light break-all hover:text-fruit-yellow transition-colors">apnafruitbox@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-fruit-yellow" />
                  <span className="text-link-light leading-relaxed">Civic centre Bhilai (C.G.) 490023</span>
              </li>
            </ul>
          </div>
        </div>

          <div className="border-t border-brand-primary mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
            <p className="text-link-light">&copy; {new Date().getFullYear()} Apna Fruit Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

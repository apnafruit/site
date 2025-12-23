import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-pure-white shadow-sm sticky top-0 z-50 border-b border-card-hover">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <img src="/logo.svg" alt="Logo" className="w-12 h-12 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-display font-bold text-brand-primary tracking-luxury">Apna fruit box</span>
              <span className="text-xs text-text-gray hidden sm:block">Freshness you can see and taste</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-sm font-medium transition-all duration-300 tracking-luxury min-h-[44px] px-2 ${
                  currentPage === 'home' 
                    ? 'text-brand-primary font-semibold border-b-2 border-fruit-yellow' 
                    : 'text-brand-primary hover:text-brand-soft'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`text-sm font-medium transition-all duration-300 tracking-luxury min-h-[44px] px-2 ${
                currentPage === 'about' 
                  ? 'text-brand-primary font-semibold border-b-2 border-fruit-yellow' 
                  : 'text-brand-primary hover:text-brand-soft'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className={`text-sm font-medium transition-all duration-300 tracking-luxury min-h-[44px] px-2 ${
                currentPage === 'contact' 
                  ? 'text-brand-primary font-semibold border-b-2 border-fruit-yellow' 
                  : 'text-brand-primary hover:text-brand-soft'
              }`}
            >
              Contact Us
            </button>
            
            <button
              onClick={() => handleNavigate('cart')}
              className="relative p-3 hover:bg-card-hover rounded-full transition-all duration-300 hover:shadow-premium min-w-[44px] min-h-[44px]"
            >
              <ShoppingCart className={`w-6 h-6 transition-colors ${totalItems > 0 ? 'text-brand-primary' : 'text-brand-primary'}`} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-fruit-yellow text-brand-deep text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-premium animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavigate('cart')}
              className="relative p-2 hover:bg-card-hover rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ShoppingCart className={`w-5 h-5 transition-colors ${totalItems > 0 ? 'text-brand-primary' : 'text-brand-primary'}`} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-fruit-yellow text-brand-deep text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-premium animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-card-hover rounded-lg transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-primary" />
              ) : (
                <Menu className="w-6 h-6 text-brand-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-card-hover animate-fade-in">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavigate('home')}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-300 tracking-luxury min-h-[44px] ${
                  currentPage === 'home' 
                    ? 'bg-card-hover text-brand-primary font-semibold' 
                    : 'text-brand-primary hover:bg-card-hover/50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-300 tracking-luxury min-h-[44px] ${
                  currentPage === 'about' 
                    ? 'bg-card-hover text-brand-primary font-semibold' 
                    : 'text-brand-primary hover:bg-card-hover/50'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-300 tracking-luxury min-h-[44px] ${
                  currentPage === 'contact' 
                    ? 'bg-card-hover text-brand-primary font-semibold' 
                    : 'text-brand-primary hover:bg-card-hover/50'
                }`}
              >
                Contact Us
              </button>
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

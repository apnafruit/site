import { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  const handleAddToCart = () => {
    const unitPrice = product.price || 0; // price in ₹
    addToCart(product, quantity, unitPrice);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
    setQuantity(1);
  };

  return (
    <div className="card-premium overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in">
      <div className="h-56 sm:h-64 md:h-72 overflow-hidden relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-primary mb-2 sm:mb-3 tracking-luxury">{product.name}</h3>
        <p className="text-text-gray text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{product.description}</p>

        <div className="mb-4 sm:mb-6">
          <h4 className="text-xs sm:text-sm font-semibold text-brand-primary mb-2 sm:mb-3 tracking-luxury">Key Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {product.benefits.map((benefit, index) => (
              <span
                key={index}
                className="text-xs bg-card-hover text-brand-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium transition-all duration-300 hover:bg-brand-soft hover:text-white"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="text-xs sm:text-sm font-semibold text-text-gray block mb-2 sm:mb-3 tracking-luxury">Price</label>
            <div className="flex items-center gap-4">
              <div className="text-sm sm:text-base font-semibold"><span className="text-brand-deep">₹{product.price ?? '--'}</span></div>
            </div>
          </div>

          <div>
            <label className="text-xs sm:text-sm font-semibold text-brand-primary block mb-2 sm:mb-3 tracking-luxury">Quantity</label>
            <div className="flex items-center gap-3 sm:gap-4 justify-center bg-card-hover rounded-xl p-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pure-white border-2 border-brand-soft text-brand-soft hover:bg-brand-soft hover:text-white transition-all duration-300 font-bold text-lg sm:text-xl flex items-center justify-center min-w-[44px] min-h-[44px]"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 sm:w-20 h-10 sm:h-12 text-center text-lg sm:text-xl font-bold font-semibold border-2 border-brand-soft rounded-xl focus:border-fruit-yellow focus:outline-none transition-colors bg-pure-white"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pure-white border-2 border-brand-soft text-brand-soft hover:bg-brand-soft hover:text-white transition-all duration-300 font-bold text-lg sm:text-xl flex items-center justify-center min-w-[44px] min-h-[44px]"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 min-h-[48px] sm:min-h-[52px] text-sm sm:text-base ${
              showAdded
                ? 'bg-fruit-yellow text-brand-deep shadow-gold-glow'
                : 'bg-fruit-yellow hover:bg-yellow-dark text-brand-deep shadow-premium hover:shadow-gold-glow hover:scale-[1.02]'
            }`}
          >
            {showAdded ? (
              <>
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                Added to Cart
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

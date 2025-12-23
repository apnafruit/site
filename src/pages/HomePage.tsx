import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { PRODUCTS } from '../types';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

// Lightweight vector fruit icons (clean shapes, small footprint)
// Note: fruitSVG is kept for potential future use but currently not exported
/* Disabled - not currently used in component
function _fruitSVG(type: string, size = 48, color = '#FF6B6B') {
  const common = { width: size, height: size };
  switch (type) {
    case 'apple':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="36" r="16" fill={color} stroke="#efefef" strokeWidth="1" />
          <path d="M36 18c0 4-6 6-6 6s-2-6 2-10 8 0 8 4z" fill="#2d6a31" />
        </svg>
      );
    case 'orange':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="18" fill="#FFA94D" stroke="#fff2e6" strokeWidth="1" />
        </svg>
      );
    case 'banana':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 44s14-6 28-2 18 6 22 0c0 0-4 14-22 16S12 44 12 44z" fill="#FFEB99" stroke="#f5d86a" strokeWidth="1" />
        </svg>
      );
    case 'grapes':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="#7C3AED">
            <circle cx="36" cy="24" r="6" />
            <circle cx="28" cy="30" r="6" />
            <circle cx="40" cy="34" r="6" />
            <circle cx="30" cy="40" r="6" />
            <circle cx="38" cy="44" r="6" />
          </g>
        </svg>
      );
    case 'berries':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="#F43F5E">
            <circle cx="24" cy="30" r="5" />
            <circle cx="32" cy="26" r="6" />
            <circle cx="40" cy="30" r="5" />
          </g>
        </svg>
      );
    case 'mango':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 34c4-12 18-14 28-8 6 4 6 12 2 18-6 8-18 10-28 6-4-2-6-10-2-16z" fill="#FF9F43" />
        </svg>
      );
    case 'kiwi':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="16" fill="#97C24A" stroke="#6b8f2a" strokeWidth="1" />
          <circle cx="32" cy="32" r="8" fill="#2c2c2c" opacity="0.9" />
        </svg>
      );
    case 'pomegranate':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="34" r="12" fill="#D21F3C" />
        </svg>
      );
    case 'watermelon':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 36c8 12 40 12 48 0v6H8v-6z" fill="#FF6B6B" />
          <path d="M8 36c8-12 40-12 48 0" fill="#34D399" opacity="0.06" />
          <g fill="#2d2d2d">
            <circle cx="28" cy="34" r="1" />
            <circle cx="36" cy="36" r="1" />
            <circle cx="22" cy="38" r="1" />
          </g>
        </svg>
      );
    case 'dryfruits':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse cx="24" cy="36" rx="6" ry="10" fill="#C68642" />
            <ellipse cx="36" cy="30" rx="5" ry="8" fill="#D99A4A" />
            <ellipse cx="44" cy="40" rx="4" ry="7" fill="#B36B2B" />
          </g>
        </svg>
      );
    case 'shake':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="10" width="20" height="36" rx="4" fill="#FDE68A" />
          <rect x="24" y="8" width="16" height="6" rx="2" fill="#E2B05A" />
          <circle cx="32" cy="26" r="6" fill="#fff" opacity="0.14" />
        </svg>
      );
    case 'leaf':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 44c10-20 36-28 40-28" fill="none" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'juice':
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="12" width="20" height="36" rx="4" fill="#7CCCF5" />
          <circle cx="32" cy="28" r="6" fill="#fff" opacity="0.18" />
        </svg>
      );
    default:
      return (
        <svg {...common} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="14" fill={color} />
        </svg>
      );
  }
}
*/

// sideArtwork helper function disabled - not currently used in component

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { getTotalItems } = useCart();
  const hasItems = getTotalItems() > 0;

  // Carousel state and behavior
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

const slides = [
  {
    key: 'mixed-box',
    kicker: 'Fresh Fruit Boxes',
    title: 'Handpicked fruit boxes for everyday freshness',
    subtitle:
      'Seasonal fruits carefully selected, packed, and delivered fresh — perfect for daily nutrition and gifting.',
    cta: 'Explore Fruit Boxes',
    image:
      'h1.png',
    fruits: [],
  },
  {
    key: 'seasonal-offers',
    kicker: 'Seasonal Combos',
    title: 'Curated fruit box offers for every season',
    subtitle:
      'Special seasonal fruit combinations and value packs — enjoy freshness with added savings.',
    cta: 'View Offers',
    image:
      'h2.png',
    fruits: [],
  },
  {
    key: 'juice-range',
    kicker: 'Fresh Juices',
    title: 'Cold-pressed fruit juices, bottled naturally',
    subtitle:
      'Pure fruit juices made fresh — no preservatives, no added sugar, just natural taste.',
    cta: 'Shop Juices',
    image:
      'h3.png',
    fruits: [],
  },
  {
    key: 'dried-fruits',
    kicker: 'Dried Fruits & Powders',
    title: 'Naturally dried fruits & fruit powders',
    subtitle:
      'Premium dried fruits and fruit powders — perfect for snacks, smoothies, and daily wellness.',
    cta: 'Browse Dried Fruits',
    image:
      'h4.png',
    fruits: [],
  },
  {
    key: 'shakes-blends',
    kicker: 'Smooth Blends',
    title: 'Smooth fruit shakes & healthy blends',
    subtitle:
      'Creamy fruit shakes and blended drinks crafted for taste, nutrition, and satisfaction.',
    cta: 'Try Shakes',
    image:
      'h5.png',
    fruits: [],
  },
];
  // Autoplay (5s) with reduced-motion support
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return;
    const t = setInterval(() => {
      setActiveIndex((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [isPaused, slides.length]);

  // Carousel navigation via state setters

  // Scroll helper to take user to the products section
  function scrollToProducts() {
    const el = typeof document !== 'undefined' ? document.getElementById('products') : null;
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion.current ? 'auto' : 'smooth', block: 'start' });
  }

  function handlePointerMove(e: any) {
    const el = document.getElementById('carousel');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty('--mx', `${mx}px`);
    el.style.setProperty('--my', `${my}px`);
  }

  // Slider refs and swipe handling
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef(0);
  const startTranslateRef = useRef(0);
  const isDraggingRef = useRef(false);

  function clampIndex(i: number) {
    if (i < 0) return slides.length - 1;
    if (i >= slides.length) return 0;
    return i;
  }

  function onPointerDown(e: React.PointerEvent) {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    startXRef.current = e.clientX;
    const style = window.getComputedStyle(slider);
    // parse current translateX safely
    const transform = style.transform === 'none' ? '' : style.transform;
    let current = 0;
    try {
      const m = new DOMMatrix(transform || 'matrix(1,0,0,1,0,0)');
      current = m.m41 || 0;
    } catch {
      const match = /matrix\(([-0-9., ]+)\)/.exec(transform || '');
      if (match) {
        const parts = match[1].split(',').map((p) => parseFloat(p.trim()));
        current = parts.length >= 6 ? parts[4] : 0;
      }
    }
    startTranslateRef.current = current;
    isDraggingRef.current = true;
    try {
      (e.target as Element).setPointerCapture(e.pointerId);
    } catch {}
  }

  function onPointerMoveSlide(e: React.PointerEvent) {
    if (!isDraggingRef.current || !sliderRef.current) return;
    const delta = e.clientX - startXRef.current;
    const translate = startTranslateRef.current + delta;
    sliderRef.current.style.transition = 'none';
    sliderRef.current.style.transform = `translateX(${translate}px)`;
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!sliderRef.current) return;
    if (!isDraggingRef.current) return;
    const delta = e.clientX - startXRef.current;
    const width = window.innerWidth || ((sliderRef.current.clientWidth / slides.length) || 1);
    // threshold: 20% of slide width
    const threshold = width * 0.2;
    if (delta < -threshold) {
      setActiveIndex((p) => clampIndex(p + 1));
    } else if (delta > threshold) {
      setActiveIndex((p) => clampIndex(p - 1));
    } else {
      // snap back
      setActiveIndex((p) => p);
    }
    // restore
    isDraggingRef.current = false;
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
  }

  // ensure mouse hover pause doesn't cancel autoplay while dragging
  // (mouseenter should only pause when not actively dragging)

  // Ensure slider positions to active index when not dragging
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isDraggingRef.current) return;
    const vw = window.innerWidth || (slider.clientWidth / slides.length) || 1;
    const translate = -activeIndex * vw;
    slider.style.transition = prefersReducedMotion.current ? 'none' : 'transform 800ms cubic-bezier(.22,.9,.37,1)';
    slider.style.transform = `translateX(${translate}px)`;
  }, [activeIndex, slides.length]);

  // Keep slider sizing and translate accurate on resize
  useEffect(() => {
    function handleResize() {
      const slider = sliderRef.current;
      if (!slider) return;
      // force recompute transform to align to viewport width
      const vw = window.innerWidth || (slider.clientWidth / slides.length) || 1;
      const translate = -activeIndex * vw;
      slider.style.transition = prefersReducedMotion.current ? 'none' : 'transform 300ms linear';
      slider.style.transform = `translateX(${translate}px)`;
    }
    window.addEventListener('resize', handleResize);
    // initial call
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, slides.length]);
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Interactive Carousel Hero (5 slides) */}
      <section className="relative bg-cream-50 py-8 sm:py-6 md:py-4 lg:py-4 overflow-hidden text-black min-h-screen md:min-h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FAFAF7" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g1)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 z-10 h-full">
          <div
            id="carousel"
            className="relative overflow-hidden rounded-xl sm:rounded-2xl"
            onMouseEnter={() => { if (!isDraggingRef.current) setIsPaused(true); }}
            onMouseLeave={() => setIsPaused(false)}
            onPointerMove={(e) => handlePointerMove(e)}
            style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
          >
            {/* Announcement bar */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 bg-yellow-soft/90 backdrop-blur-sm text-brand-deep rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-sm z-20">
              Fresh Fruit Sale Started — Seasonal Fruits Now Available
            </div>

            {/* Horizontal swipeable slider — editorial white canvas, accent shape morphs */}
            <div className="relative w-full min-h-screen md:h-screen">
              {/* shared accent shape that morphs between slides */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-4 sm:left-8 top-8 sm:top-10 rounded-[48%] opacity-80 transition-all duration-1000"
                style={{
                  width: '40%',
                  height: '64%',
                  filter: 'blur(36px)'
                }}
              />

              <div className="relative h-full overflow-hidden">
                <div
                  ref={sliderRef}
                  className="flex h-full will-change-transform"
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMoveSlide}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                >
                  {slides.map((s) => (
                    <div key={s.key} className="flex-shrink-0 w-screen h-full">
                      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center h-full py-6 px-3 sm:px-4 md:py-12`}>
                        <div className="md:col-span-1 text-center md:text-left flex flex-col justify-center">
                          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2 sm:mb-3 text-gray-500">
                            {s.kicker}
                          </p>
                          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-2 sm:mb-3 text-slate-900" style={{ letterSpacing: '-0.02em' }}>
                            {s.title}
                          </h2>
                          <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-lg mb-4 sm:mb-6 line-clamp-3">{s.subtitle}</p>

                          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 flex-wrap">
                            <button
                              onClick={() => scrollToProducts()}
                              className="bg-brand-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-transform duration-220 ease-in-out transform hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 text-xs sm:text-sm min-h-[44px] flex items-center justify-center"
                            >
                              Explore Products
                            </button>
                          </div>
                        </div>

                        <div className="md:col-span-2 relative flex items-center justify-center">
                          <div className="relative w-full max-w-4xl h-56 sm:h-64 md:h-full flex items-center justify-center">
                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 120px 120px -60px rgba(255,255,255,0.7)' }} />

                            <div className="relative w-full h-full flex items-center justify-center">
                              <img
                                src={s.image}
                                alt={s.title}
                                className="relative rounded-xl sm:rounded-2xl object-cover shadow-xl sm:shadow-2xl w-full h-full max-w-[90%]"
                                onError={(ev) => {
                                  const el = ev.currentTarget as HTMLImageElement;
                                  const fallback = slides[0]?.image || '';
                                  if (el.src !== fallback) el.src = fallback;
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation: chevrons (edges) + pagination dots (center) */}
              <button
                aria-label="Previous slide"
                onClick={() => {
                  const newIdx = (activeIndex - 1 + slides.length) % slides.length;
                  setActiveIndex(newIdx);
                  const slider = sliderRef.current;
                  if (slider) {
                    const vw = window.innerWidth || ((slider.clientWidth / slides.length) || 1);
                    const translate = -newIdx * vw;
                    slider.style.transition = prefersReducedMotion.current ? 'none' : 'transform 600ms cubic-bezier(.22,.9,.37,1)';
                    slider.style.transform = `translateX(${translate}px)`;
                  }
                }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-30 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 sm:p-3 shadow-md flex items-center justify-center focus:outline-none transition-all hover:scale-110 min-w-[44px] min-h-[44px]"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                aria-label="Next slide"
                onClick={() => {
                  const newIdx = (activeIndex + 1) % slides.length;
                  setActiveIndex(newIdx);
                  const slider = sliderRef.current;
                  if (slider) {
                    const vw = window.innerWidth || ((slider.clientWidth / slides.length) || 1);
                    const translate = -newIdx * vw;
                    slider.style.transition = prefersReducedMotion.current ? 'none' : 'transform 600ms cubic-bezier(.22,.9,.37,1)';
                    slider.style.transform = `translateX(${translate}px)`;
                  }
                }}
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-30 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 sm:p-3 shadow-md flex items-center justify-center focus:outline-none transition-all hover:scale-110 min-w-[44px] min-h-[44px]"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Minimal pagination (dots only) */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Slide ${idx + 1}`}
                    onClick={() => {
                      setActiveIndex(idx);
                      // force immediate transform for snappy response
                      const slider = sliderRef.current;
                      if (slider) {
                        const vw = window.innerWidth || ((slider.clientWidth / slides.length) || 1);
                        const translate = -idx * vw;
                        slider.style.transition = prefersReducedMotion.current ? 'none' : 'transform 600ms cubic-bezier(.22,.9,.37,1)';
                        slider.style.transform = `translateX(${translate}px)`;
                      }
                    }}
                    className={`transition-all duration-350 ${
                      activeIndex === idx ? 'bg-slate-800 w-2 sm:w-3 h-2 sm:h-3 rounded-full' : 'bg-slate-400/40 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full'
                    }`}
                  />
                ))}
              </div>

              {/* Inline keyframes for slow motion and drift */}
              <style>{`
                @keyframes drift { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fruite Box — expanded with logo, sample code, image gallery, and detailed points */}
      <section className="py-12 sm:py-16 md:py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 tracking-luxury text-black">
                Why Choose Fruite Box
              </h2>
              <p className="text-slate-700 mb-6 max-w-prose">
                We curate seasonal fruit boxes with quiet care — focused on freshness, provenance, and an effortless experience. Small rituals, big flavor.
              </p>

              {/* logo + small floating animation */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-28 h-28 flex items-center justify-center mx-0">
                  <img src="/logo.svg" alt="Fruite Box" className="w-30 h-30 object-contain animate-float" />
                </div>
                <p className="font-bold text-black mb-6">
                Freshness you can see and taste
              </p>
              <p className="font-bold text-black mb-6">
                 Thoughtfully packed and delivered to your door.
              </p>

              </div>

              {/* small intro */}
              <p className="text-sm text-slate-600 mb-6">
                Our boxes are designed to make fresh fruit approachable — whether you're ordering for one or gifting a family. We keep things thoughtful and simple.
              </p>

              {/* four elaborated points as a subsection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white/60 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1">Freshness Guaranteed</h4>
                  <p className="text-sm text-slate-600">We harvest or source at peak ripeness, pack with care, and move quickly so your box tastes its best.</p>
                </div>

                <div className="p-4 bg-white/60 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1">Farm Direct</h4>
                  <p className="text-sm text-slate-600">We work with trusted growers; fewer hands between field and doorstep keeps quality higher.</p>
                </div>

                <div className="p-4 bg-white/60 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1">Thoughtful Packing</h4>
                  <p className="text-sm text-slate-600">Every box is arranged to protect delicate fruit and present it attractively on arrival.</p>
                </div>

                <div className="p-4 bg-white/60 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1">Flexible & Simple</h4>
                  <p className="text-sm text-slate-600">Choose from curated boxes, schedule deliveries, and manage preferences with ease.</p>
                </div>
              </div>
            </div>

            {/* Right column: clean fruit-box image gallery + captions */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src="/w3.jpg" alt="Fruit box 1" className="w-full h-44 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src="/w2.jpg" alt="Fruit box 2" className="w-full h-44 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg col-span-2">
                  <img src="/w1.jpg" alt="Fruit box 3" className="w-full h-56 object-cover" />
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">What’s inside</h4>
                  <p className="text-sm text-slate-600">A curated mix of seasonal fruits, carefully packed to travel well and arrive ready to enjoy. We include handling notes and storage tips where helpful.</p>
                </div>
                <div className="w-28">
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    <img src="/w4.jpg" alt="Shake pack" className="w-full h-28 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0) } }
            .animate-float { animation: float 6s ease-in-out infinite; }
          `}</style>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-off-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mb-6 sm:mb-8 md:mb-12 tracking-luxury text-black">
            Our Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {PRODUCTS.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Cart Button */}
      {hasItems && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
          <button
            onClick={() => onNavigate('cart')}
            className="bg-brand-primary hover:bg-green-dark text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full shadow-premium hover:shadow-green-glow font-semibold text-xs sm:text-sm md:text-base flex items-center gap-2 transition-all duration-300 transform hover:scale-105 animate-pulse-glow min-h-[44px] sm:min-h-[48px]"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-14"></div>

        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 sm:mb-4 md:mb-6 tracking-luxury text-white">
            Get Fresh Fruit Delivered
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed text-white max-w-2xl mx-auto">
            Explore our selection. Freshness, provenance, and convenience — delivered.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={() => scrollToProducts()}
              className="bg-fruit-yellow text-brand-deep hover:bg-yellow-dark px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 shadow-gold-glow hover:shadow-premium-lg hover:scale-[1.02] min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm md:text-base"
            >
              Explore
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm md:text-base"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

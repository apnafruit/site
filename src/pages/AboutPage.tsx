import { Leaf, Target, Heart, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-organic py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/banners/about-hero.jpg')] bg-cover bg-center opacity-12"></div>
        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-primary mb-3 sm:mb-4 md:mb-6 tracking-luxury animate-fade-in">
            About Apna Fruit Box
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-soft font-display leading-relaxed animate-slide-up">
            Seasonal fruit boxes, thoughtfully packed and delivered to your door
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-pure-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-text-gray text-sm sm:text-base md:text-lg leading-relaxed">
            <p className="animate-fade-in">
              Apna Fruit Box began with a simple belief: fresh, seasonal fruit should be accessible and
              enjoyable for everyone. We curate boxes that highlight local and seasonal produce, and
              deliver them in packaging designed to protect and present the fruit beautifully.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Life is busy — we make it easy to eat better. Choose from curated boxes, single-fruit packs,
              or subscribe for regular deliveries. Behind every box is a partnership with growers who
              share our values for freshness and traceability.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center text-brand-primary mb-6 sm:mb-8 md:mb-12 tracking-luxury">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="card-premium p-4 sm:p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 text-center animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-card-hover rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-premium">
                <Leaf className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand-soft" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-brand-primary mb-2 sm:mb-3 md:mb-4 tracking-luxury">Freshness Guaranteed</h3>
              <p className="text-text-gray text-xs sm:text-sm leading-relaxed">
                We work with growers to source fruit at peak ripeness and move it quickly so your box arrives fresh.
              </p>
            </div>

            <div className="card-premium p-4 sm:p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-card-hover rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-premium">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand-soft" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-brand-primary mb-2 sm:mb-3 md:mb-4 tracking-luxury">Farm Direct</h3>
              <p className="text-text-gray text-xs sm:text-sm leading-relaxed">
                We partner directly with trusted growers so fewer hands touch your fruit and provenance is clear.
              </p>
            </div>

            <div className="card-premium p-4 sm:p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-card-hover rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-premium">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand-soft" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-brand-primary mb-2 sm:mb-3 md:mb-4 tracking-luxury">Thoughtful Packing</h3>
              <p className="text-text-gray text-xs sm:text-sm leading-relaxed">
                Every box is packed to protect delicate fruits and make unpacking a pleasant experience.
              </p>
            </div>

            <div className="card-premium p-4 sm:p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-card-hover rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-premium">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand-soft" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-brand-primary mb-2 sm:mb-3 md:mb-4 tracking-luxury">Flexible & Simple</h3>
              <p className="text-text-gray text-xs sm:text-sm leading-relaxed">
                Subscribe, schedule, or order a one-off box. Our ordering options are built to be flexible and simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-pure-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center text-brand-primary mb-6 sm:mb-8 md:mb-12 tracking-luxury">Our Story</h2>
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-text-gray text-sm sm:text-base md:text-lg leading-relaxed">
            <p className="animate-fade-in">
              Apna Fruit Box started as a small effort to connect people with seasonal, flavorful fruit from
              nearby farms. What began as a local delivery service grew into a community of people who
              value freshness and simple, honest food.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              We curate boxes to highlight variety and seasonality — from single-fruit selections to mixed
              boxes for families. Our team works closely with growers to select fruit that travels well and
              tastes exceptional.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Today, Apna Fruit Box serves households who want better access to fresh produce without the
              fuss. We're proud to deliver consistently and to make fruit a simple, delightful part of daily life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 sm:mb-4 md:mb-6 tracking-luxury text-white">Join Our Community</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed text-link-light">
            Join the Apna Fruit Box community — subscribe for regular deliveries, get seasonal recipes,
            and receive priority access to special boxes and offers.
          </p>
        </div>
      </section>
    </div>
  );
}

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-organic py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-primary mb-3 sm:mb-4 md:mb-6 tracking-luxury animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-soft font-display leading-relaxed animate-slide-up">
            We'd love to hear from you. Reach out with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-brand-primary mb-6 sm:mb-8 md:mb-10 tracking-luxury">Contact Information</h2>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 card-premium hover:scale-[1.02] transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-card-hover rounded-full flex items-center justify-center flex-shrink-0 shadow-premium">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-brand-soft" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-brand-primary mb-1 tracking-luxury">Phone</h3>
                    <a
                      href="tel:+919826820824"
                      className="text-text-gray hover:text-brand-soft transition-colors text-sm sm:text-base md:text-lg min-h-[44px] flex items-center"
                    >
                      +91 98268 20824
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 card-premium hover:scale-[1.02] transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-card-hover rounded-full flex items-center justify-center flex-shrink-0 shadow-premium">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-brand-soft" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-brand-primary mb-1 tracking-luxury">Email</h3>
                    <a
                      href="mailto:apnafruitbox@gmail.com"
                      className="text-text-gray hover:text-brand-soft transition-colors break-all text-sm sm:text-base md:text-lg"
                    >
                      apnafruitbox@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 card-premium hover:scale-[1.02] transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-card-hover rounded-full flex items-center justify-center flex-shrink-0 shadow-premium">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-brand-soft" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-brand-primary mb-1 tracking-luxury">Address</h3>
                    <p className="text-text-gray leading-relaxed text-sm sm:text-base md:text-lg">
                      Civic centre Bhilai (C.G.)<br />
                      490023
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-whatsapp-green hover:bg-whatsapp-dark text-white rounded-lg sm:rounded-xl shadow-premium hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold mb-1 tracking-luxury">WhatsApp</h3>
                    <p className="text-link-light mb-2 sm:mb-3 leading-relaxed text-xs sm:text-sm">Chat with us directly on WhatsApp for quick responses</p>
                    <a
                      href="https://wa.me/919826820824"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-whatsapp-green px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-premium hover:shadow-premium-lg hover:scale-[1.02] min-h-[44px] text-xs sm:text-sm md:text-base"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-brand-primary mb-6 sm:mb-8 md:mb-10 tracking-luxury">Business Hours</h2>
              <div className="card-premium p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b-2 border-card-hover">
                    <span className="font-semibold text-brand-primary text-sm sm:text-base md:text-lg tracking-luxury">Monday - Saturday</span>
                    <span className="text-text-gray text-xs sm:text-sm md:text-lg">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3">
                    <span className="font-semibold text-brand-primary text-sm sm:text-base md:text-lg tracking-luxury">Sunday</span>
                    <span className="text-text-gray text-xs sm:text-sm md:text-lg">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-soft border-2 border-brand-soft/30 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-semibold text-brand-primary mb-2 sm:mb-3 md:mb-4 tracking-luxury">Quick Response</h3>
                <p className="text-text-gray leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                  We strive to respond to all inquiries within 24 hours during business days.
                  For urgent matters, please contact us via WhatsApp for the fastest response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

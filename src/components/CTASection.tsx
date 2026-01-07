import { ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const CTASection = () => {
  const whatsappLink = buildWhatsAppUrl();

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Ready to Elevate Your{' '}
            <span className="text-accent">Digital Presence?</span>
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with us to build technology solutions that drive growth. 
            Schedule a consultation with our team today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Our Experts
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-primary-foreground/10">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Complimentary Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>24-Hour Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

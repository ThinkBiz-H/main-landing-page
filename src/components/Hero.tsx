import { ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const Hero = () => {
  const whatsappLink = buildWhatsAppUrl();

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted by Leading Enterprises Across Bahrain
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up animate-delay-100 text-primary">
              Enterprise-Ready{' '}
              <span className="gradient-text">IT Solutions</span>{' '}
              Tailored for Bahrain
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              Reliable technology partnerships for forward-thinking businesses. 
              We deliver secure, scalable digital solutions that drive measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 text-lg">
                Request a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp justify-center text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to Our Experts
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-border animate-fade-in-up animate-delay-400">
              <div>
                <div className="font-display font-bold text-3xl text-primary">500+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-display font-bold text-3xl text-primary">98%</div>
                <div className="text-muted-foreground text-sm">Client Retention</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-display font-bold text-3xl text-primary">4+</div>
                <div className="text-muted-foreground text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up animate-delay-200">
  <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
    <img
      src="/herosection.jpeg"
      alt="Mobile App Preview"
      className="w-full h-full object-cover"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

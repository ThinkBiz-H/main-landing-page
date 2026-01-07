import { Users, Search, Smartphone, DollarSign, Headphones, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Senior Engineering Team',
      description: 'Our experienced professionals bring 8+ years of expertise delivering enterprise solutions.',
    },
    {
      icon: Search,
      title: 'SEO-Optimized Development',
      description: 'Every project is engineered with search visibility in mind for maximum organic reach.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Architecture',
      description: 'We prioritize responsive design ensuring optimal experience across all devices.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Engagement',
      description: 'Clear pricing, detailed proposals, and milestone-based delivery with no hidden costs.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Round-the-clock maintenance and support to ensure your systems run flawlessly.',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-section-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Why Partner With Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
              Your Long-Term{' '}
              <span className="gradient-text">Technology Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We build lasting partnerships with Bahrain businesses, delivering 
              reliable technology solutions that drive measurable growth and operational excellence.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div 
                  key={reason.title}
                  className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1 text-primary">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
              <h3 className="font-display font-bold text-2xl mb-8 text-center text-primary">
                Proven Track Record
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-section-light">
                  <div className="font-display font-bold text-4xl text-accent mb-2">500+</div>
                  <div className="text-muted-foreground font-medium">Projects Delivered</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-section-light">
                  <div className="font-display font-bold text-4xl text-accent mb-2">98%</div>
                  <div className="text-muted-foreground font-medium">Client Retention</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-section-light">
                  <div className="font-display font-bold text-4xl text-accent mb-2">50+</div>
                  <div className="text-muted-foreground font-medium">Expert Engineers</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-section-light">
                  <div className="font-display font-bold text-4xl text-accent mb-2">24/7</div>
                  <div className="text-muted-foreground font-medium">Support Coverage</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>ISO 27001 Certified Development</span>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-accent/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

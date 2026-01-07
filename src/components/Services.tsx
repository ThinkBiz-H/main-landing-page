import { Globe, Smartphone, ShoppingCart, PenTool, Code2, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Enterprise-grade web solutions built with modern technologies. Secure, scalable platforms designed for performance and reliability.',
      features: ['React & Next.js', 'Enterprise CMS', 'Custom Backend'],
    },
    {
      icon: PenTool,
      title: 'Digital Design',
      description: 'Professional, conversion-focused designs that establish credibility. We create interfaces that reflect your brand\'s excellence.',
      features: ['UI/UX Design', 'Brand Identity', 'Responsive Design'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform applications delivering seamless experiences across iOS and Android platforms.',
      features: ['iOS & Android', 'React Native', 'Flutter Solutions'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platforms',
      description: 'Secure online commerce solutions with robust payment integration and inventory management tailored for the Bahrain market.',
      features: ['Shopify & WooCommerce', 'Custom Stores', 'Payment Gateway'],
    },
    {
      icon: Sparkles,
      title: 'UI/UX Consulting',
      description: 'Strategic design consulting that transforms complex requirements into intuitive, user-centered digital experiences.',
      features: ['User Research', 'Wireframing', 'Usability Testing'],
    },
    {
      icon: Code2,
      title: 'Custom Software',
      description: 'Bespoke software solutions engineered to address your unique business challenges. APIs, integrations, and SaaS development.',
      features: ['API Development', 'System Integration', 'SaaS Solutions'],
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Our Expertise
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            Comprehensive Digital Solutions{' '}
            <span className="gradient-text">for Bahrain Enterprises</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to execution, we deliver end-to-end technology solutions 
            that position your business for sustained success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 md:p-8 border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              <h3 className="font-display font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

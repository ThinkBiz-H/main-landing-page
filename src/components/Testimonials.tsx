import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Al-Khalifa',
      role: 'CEO, Bahrain Financial Group',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      review: 'ThinkBiz delivered an exceptional banking platform that transformed our digital presence. Their professionalism, attention to security, and understanding of our regulatory requirements was outstanding.',
    },
    {
      name: 'Fatima Al-Mahmood',
      role: 'Managing Director, Gulf Retail Solutions',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
      rating: 5,
      review: 'Our e-commerce platform went from concept to launch in just 8 weeks. The attention to detail and commitment to quality resulted in a 200% increase in online sales within the first quarter.',
    },
    {
      name: 'Mohammed Hassan',
      role: 'CTO, Manama Healthcare',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 5,
      review: 'The mobile application ThinkBiz developed for our healthcare network is exactly what we envisioned. They understood our compliance requirements and delivered a secure, user-friendly solution.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Client Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            Trusted by{' '}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from business leaders across Bahrain who have partnered with us 
            to transform their digital capabilities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 md:p-8 border border-border relative card-hover"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <h4 className="font-display font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

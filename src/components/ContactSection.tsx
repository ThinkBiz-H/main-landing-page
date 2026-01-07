import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { buildWhatsAppUrl, openWhatsAppWithFormData, type ContactFormData } from '@/lib/whatsapp';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppWithFormData(formData);
  };

  const whatsappLink = buildWhatsAppUrl();

  return (
    <section id="contact" className="section-padding bg-section-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            Let's Discuss Your{' '}
            <span className="gradient-text">Technology Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your digital capabilities? Connect with our team 
            to explore how we can support your business objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-2xl mb-6 text-primary">Contact Our Team</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We welcome the opportunity to discuss your requirements. Whether you have 
              questions about our services or are ready to begin, our team is here to assist.
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href="tel:+918512001218" 
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm text-muted-foreground">Phone</div>
                  <div className="font-display font-semibold text-primary">+91 85120 01218</div>
                </div>
              </a>

              <a 
                href="mailto:info@thinkbizhightech.com" 
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm text-muted-foreground">Email</div>
                  <div className="font-display font-semibold text-primary">info@thinkbizhightech.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm text-muted-foreground">Office</div>
                  <div className="font-display font-semibold text-primary">B-46, B Block, Sector 63, Noida, UP 201301</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-lg py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Connect via WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <h3 className="font-display font-bold text-xl mb-6 text-primary">Request Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-medium text-sm mb-2 text-primary">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block font-medium text-sm mb-2 text-primary">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium text-sm mb-2 text-primary">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="+973 XXXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block font-medium text-sm mb-2 text-primary">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Design">Digital Design</option>
                  <option value="Mobile Applications">Mobile Applications</option>
                  <option value="E-commerce Platforms">E-commerce Platforms</option>
                  <option value="UI/UX Consulting">UI/UX Consulting</option>
                  <option value="Custom Software">Custom Software</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-medium text-sm mb-2 text-primary">
                  Project Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                  placeholder="Please describe your project requirements..."
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg">
                <Send className="w-5 h-5" />
                Submit Inquiry
              </button>

              <p className="text-muted-foreground text-sm text-center">
                You will be connected to WhatsApp to complete your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

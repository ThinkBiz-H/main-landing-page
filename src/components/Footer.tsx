import { Facebook, Instagram, ArrowUp } from 'lucide-react';
import logo from "../assets/logo.webp";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
  <img src={logo} alt="ThinkBiz High Tech" className="h-50 " />
</a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Enterprise-ready IT solutions for forward-thinking businesses. 
              Your trusted technology partner in Bahrain and beyond.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/ThinkBizHT/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/thinkbizht/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Digital Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Mobile Applications
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  E-commerce Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  UI/UX Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#why-us" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Our Methodology
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a href="tel:+918512001218" className="hover:text-accent transition-colors">
                  +91 85120 01218
                </a>
              </li>
              <li>
                <a href="mailto:info@thinkbizhightech.com" className="hover:text-accent transition-colors">
                  info@thinkbizhightech.com
                </a>
              </li>
              <li>
                B-46, B Block, Sector 63,<br />
                Noida, Uttar Pradesh 201301, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ThinkBiz High Tech Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-[hsl(43,74%,45%)] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.webp';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappLink = buildWhatsAppUrl();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="ThinkBiz High Tech" className="h-10 md:h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+918512001218" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 85120 01218</span>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get a Custom Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-center mt-2">
                Get a Custom Quote
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const PHONE_NUMBER = '0755305100';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#prestations', label: 'Prestations' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#accueil" className="text-xl md:text-2xl font-bold text-white">
            Mr Barber <span className="text-white">94</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Phone size={18} />
              <span>Appeler</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 border-t border-neutral-800' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-neutral-300 hover:text-white transition-colors font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-semibold px-4 py-3 rounded-lg transition-colors w-full"
          >
            <Phone size={18} />
            <span>Appeler maintenant</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

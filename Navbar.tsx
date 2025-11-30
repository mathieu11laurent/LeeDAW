import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Nos Expertises', href: '#services' },
    { name: 'Réalisations', href: '#projects' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-primary-900 p-2 rounded-lg">
                <Sun className="h-6 w-6 text-accent-500" />
              </div>
              <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
                LEEDAW
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#simulator"
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Estimer mon projet
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-accent-500 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <a
                href="#simulator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-accent-500 text-white px-5 py-3 rounded-lg font-bold shadow-md"
              >
                Estimer mes aides
              </a>
              <a
                 href="tel:0123456789"
                 className="mt-3 block w-full text-center border border-primary-900 text-primary-900 px-5 py-3 rounded-lg font-bold flex justify-center items-center gap-2"
              >
                <Phone size={18} />
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
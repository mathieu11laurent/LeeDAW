import React from 'react';
import { Sun, Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-800 p-2 rounded-lg">
                <Sun className="h-6 w-6 text-accent-500" />
              </div>
              <span className="font-bold text-2xl tracking-tight">LEEDAW</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leedaw est votre partenaire de confiance pour la transition énergétique. Certifiés RGE, nous vous accompagnons vers un habitat plus durable et économique.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">À propos de nous</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Nos solutions</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Réalisations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Blog Énergie</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Nos Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Panneaux Photovoltaïques</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Pompes à Chaleur</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Isolation Thermique</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Bornes de Recharge</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">Audit Énergétique</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span>123 Avenue de l'Innovation,<br />75008 Paris, France</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span>contact@leedaw.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 Leedaw. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Mentions Légales</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Politique de Confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
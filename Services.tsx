import React from 'react';
import { Sun, Thermometer, BrickWall, Euro, ArrowRight, LucideIcon } from 'lucide-react';
import { ServiceItem } from '../types';

const iconMap: Record<string, LucideIcon> = {
  Sun,
  Thermometer,
  BrickWall,
  Euro,
};

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Solaire Photovoltaïque',
    description: 'Produisez votre propre électricité verte, revendez le surplus et devenez indépendant face à la hausse des prix.',
    iconName: 'Sun',
  },
  {
    id: '2',
    title: 'Pompe à Chaleur',
    description: 'Remplacez votre vieille chaudière fioul ou gaz par une solution aérothermique performante et économique.',
    iconName: 'Thermometer',
  },
  {
    id: '3',
    title: 'Isolation Thermique',
    description: 'Combles, murs, sols : supprimez les ponts thermiques pour gagner en confort et réduire vos besoins de chauffage.',
    iconName: 'BrickWall',
  },
  {
    id: '4',
    title: 'Primes CEE & MaPrimeRénov',
    description: 'Nous gérons l\'intégralité de vos dossiers administratifs pour maximiser vos aides d\'état.',
    iconName: 'Euro',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-900 font-extrabold text-3xl md:text-4xl mb-4">
            Nos Expertises Énergie
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des solutions clés en main pour transformer votre habitat en une maison économe et écologique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-200 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-900 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-900 group-hover:text-accent-500 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-accent-600 font-semibold group-hover:text-accent-500">
                  En savoir plus <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
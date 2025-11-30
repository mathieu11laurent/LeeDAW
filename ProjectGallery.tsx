import React from 'react';
import { GalleryItem } from '../types';

const projects: GalleryItem[] = [
  { id: 1, title: 'Installation Solaire 6kWc', category: 'Lyon (69)', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'Pompe à Chaleur Air/Eau', category: 'Bordeaux (33)', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Isolation Extérieure', category: 'Lille (59)', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Carport Solaire', category: 'Montpellier (34)', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'Rénovation Globale', category: 'Nantes (44)', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: 6, title: 'Panneaux sur toiture plate', category: 'Paris (75)', imageUrl: 'https://picsum.photos/600/400?random=6' },
];

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-primary-900 font-extrabold text-3xl md:text-4xl mb-4">
              Nos dernières réalisations
            </h2>
            <p className="text-gray-600 text-lg">
              Ils nous ont fait confiance pour leur transition énergétique.
            </p>
          </div>
          <button className="text-primary-900 font-bold border-b-2 border-accent-500 hover:text-accent-600 transition-colors pb-1">
            Voir tous les projets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-w-3 aspect-h-2 w-full h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent-400 text-sm font-semibold mb-1 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
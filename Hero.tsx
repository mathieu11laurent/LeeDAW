import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Panneaux solaires sur un toit moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            <span className="text-accent-400 text-sm font-semibold tracking-wide uppercase">Leader de la rénovation 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Pour une énergie <span className="text-accent-500">éthique</span>, vertueuse et <span className="text-accent-500">rentable</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Leedaw vous accompagne de A à Z : étude, financement via les primes CEE, et installation de vos solutions solaires et thermiques. Réduisez votre facture dès aujourd'hui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#simulator"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-accent-600 hover:bg-accent-700 transition-all shadow-lg hover:shadow-accent-500/30"
            >
              Simuler mes aides
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/20 hover:border-white text-lg font-semibold rounded-lg text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Découvrir nos solutions
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-accent-500 w-5 h-5" />
              <span>Certifié RGE QualiPV</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-accent-500 w-5 h-5" />
              <span>Accompagnement administratif</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
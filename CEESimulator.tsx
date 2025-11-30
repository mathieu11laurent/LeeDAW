import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { SimulationFormData, ProjectType, HousingType, StepProps } from '../types';

const INITIAL_DATA: SimulationFormData = {
  projectType: '',
  zipCode: '',
  housingType: HousingType.HOUSE,
  constructionYear: '',
  incomeRange: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const Step1: React.FC<StepProps> = ({ formData, updateFields, errors }) => (
  <div className="animate-fade-in">
    <h3 className="text-xl font-bold text-gray-800 mb-6">Votre Projet</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Type de travaux envisagés</label>
        <select
          value={formData.projectType}
          onChange={(e) => updateFields({ projectType: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all ${
            errors.projectType ? 'border-red-500' : 'border-gray-200'
          }`}
        >
          <option value="">Sélectionnez une option</option>
          {Object.values(ProjectType).map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Code Postal du logement</label>
        <input
          type="text"
          value={formData.zipCode}
          onChange={(e) => updateFields({ zipCode: e.target.value.replace(/\D/g, '').slice(0, 5) })}
          placeholder="Ex: 75001"
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all ${
            errors.zipCode ? 'border-red-500' : 'border-gray-200'
          }`}
        />
        {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
      </div>
    </div>
  </div>
);

const Step2: React.FC<StepProps> = ({ formData, updateFields, errors }) => (
  <div className="animate-fade-in">
    <h3 className="text-xl font-bold text-gray-800 mb-6">Votre Logement</h3>
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Type de logement</label>
        <div className="grid grid-cols-2 gap-4">
          {Object.values(HousingType).map((type) => (
            <label
              key={type}
              className={`flex items-center justify-center px-4 py-3 border rounded-lg cursor-pointer transition-all ${
                formData.housingType === type
                  ? 'border-accent-500 bg-accent-50 text-accent-700 font-semibold ring-1 ring-accent-500'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="housingType"
                value={type}
                checked={formData.housingType === type}
                onChange={(e) => updateFields({ housingType: e.target.value })}
                className="hidden"
              />
              {type}
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Année de construction</label>
        <select
          value={formData.constructionYear}
          onChange={(e) => updateFields({ constructionYear: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-accent-500 outline-none ${errors.constructionYear ? 'border-red-500' : 'border-gray-200'}`}
        >
          <option value="">Sélectionnez</option>
          <option value="more_15">Plus de 15 ans</option>
          <option value="2_to_15">Entre 2 et 15 ans</option>
          <option value="less_2">Moins de 2 ans</option>
        </select>
        {errors.constructionYear && <p className="text-red-500 text-xs mt-1">{errors.constructionYear}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Revenu Fiscal de Référence</label>
        <select
          value={formData.incomeRange}
          onChange={(e) => updateFields({ incomeRange: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-accent-500 outline-none ${errors.incomeRange ? 'border-red-500' : 'border-gray-200'}`}
        >
          <option value="">Sélectionnez votre tranche</option>
          <option value="very_low">Très modeste</option>
          <option value="low">Modeste</option>
          <option value="intermediate">Intermédiaire</option>
          <option value="high">Supérieur</option>
        </select>
        {errors.incomeRange && <p className="text-red-500 text-xs mt-1">{errors.incomeRange}</p>}
      </div>
    </div>
  </div>
);

const Step3: React.FC<StepProps> = ({ formData, updateFields, errors }) => (
  <div className="animate-fade-in">
    <h3 className="text-xl font-bold text-gray-800 mb-6">Vos Coordonnées</h3>
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-accent-500 ${errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-accent-500 ${errors.lastName ? 'border-red-500' : 'border-gray-200'}`}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-accent-500 ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-accent-500 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
    </div>
    <div className="mt-4 flex items-start gap-2">
      <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
      <p className="text-xs text-gray-500">
        Vos données sont sécurisées et traitées conformément au RGPD. En soumettant ce formulaire, vous acceptez d'être recontacté pour votre étude énergétique.
      </p>
    </div>
  </div>
);

const Success: React.FC = () => (
  <div className="text-center py-10 animate-fade-in">
    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <Check className="w-10 h-10 text-green-600" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Demande envoyée !</h3>
    <p className="text-gray-600 max-w-md mx-auto">
      Votre dossier d'éligibilité a bien été enregistré. Un expert Leedaw va analyser votre situation et vous recontactera sous 24h ouvrées.
    </p>
  </div>
);

const CEESimulator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof SimulationFormData, string>>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFields = (fields: Partial<SimulationFormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
    // Clear error for field being updated
    const fieldKey = Object.keys(fields)[0] as keyof SimulationFormData;
    if (errors[fieldKey]) {
      setErrors(prev => ({ ...prev, [fieldKey]: '' }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof SimulationFormData, string>> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.projectType) newErrors.projectType = 'Veuillez choisir un type de projet.';
      if (!formData.zipCode || formData.zipCode.length !== 5) newErrors.zipCode = 'Code postal invalide (5 chiffres).';
    }

    if (currentStep === 2) {
      if (!formData.constructionYear) newErrors.constructionYear = 'Champ requis.';
      if (!formData.incomeRange) newErrors.incomeRange = 'Champ requis.';
    }

    if (currentStep === 3) {
      if (!formData.firstName) newErrors.firstName = 'Prénom requis.';
      if (!formData.lastName) newErrors.lastName = 'Nom requis.';
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide.';
      if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Numéro invalide.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
      // Simulation of API call
      setTimeout(() => {
        setIsSuccess(true);
      }, 500);
    }
  };

  if (isSuccess) {
    return (
      <section id="simulator" className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <Success />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="simulator" className="py-20 bg-primary-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
         <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-500 blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent-400 font-bold tracking-wider uppercase text-sm">Gratuit et sans engagement</span>
          <h2 className="text-white font-extrabold text-3xl md:text-4xl mt-2 mb-4">
            Estimez vos aides en 1 minute
          </h2>
          <p className="text-blue-100 text-lg">
            Découvrez le montant de vos primes CEE et MaPrimeRénov pour financer vos travaux.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          {/* Left Side: Info Panel (Hidden on small screens) */}
          <div className="hidden md:flex flex-col justify-between bg-gray-50 w-1/3 p-8 border-r border-gray-100">
            <div>
              <div className="mb-8">
                <p className="text-sm text-gray-500 uppercase font-semibold mb-2">Étapes</p>
                <div className="space-y-4">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= s ? 'bg-accent-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {step > s ? <Check size={16} /> : s}
                      </div>
                      <span className={`text-sm font-medium ${step >= s ? 'text-gray-900' : 'text-gray-400'}`}>
                        {s === 1 && 'Le Projet'}
                        {s === 2 && 'Le Logement'}
                        {s === 3 && 'Mes Infos'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-primary-900 font-bold text-sm mb-1">Le saviez-vous ?</p>
              <p className="text-primary-800 text-xs">
                Jusqu'à 90% de vos travaux peuvent être financés par les aides de l'État selon vos revenus.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col">
            <div className="flex-grow">
              {step === 1 && <Step1 formData={formData} updateFields={updateFields} errors={errors} />}
              {step === 2 && <Step2 formData={formData} updateFields={updateFields} errors={errors} />}
              {step === 3 && <Step3 formData={formData} updateFields={updateFields} errors={errors} />}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
              {step > 1 ? (
                <button
                  onClick={() => setStep(prev => prev - 1)}
                  className="text-gray-500 font-semibold hover:text-gray-800 transition-colors"
                >
                  Retour
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={step === 3 ? handleSubmit : handleNext}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-accent-500/30 flex items-center gap-2"
              >
                {step === 3 ? 'Calculer mes primes' : 'Suivant'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEESimulator;
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Sun' | 'Thermometer' | 'BrickWall' | 'Euro' | 'Leaf';
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export enum ProjectType {
  SOLAR = 'Solaire Photovoltaïque',
  HEATING = 'Pompe à Chaleur',
  INSULATION = 'Isolation Thermique',
  GLOBAL = 'Rénovation Globale'
}

export enum HousingType {
  HOUSE = 'Maison',
  APARTMENT = 'Appartement'
}

export interface SimulationFormData {
  projectType: string;
  zipCode: string;
  housingType: string;
  constructionYear: string;
  incomeRange: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface StepProps {
  formData: SimulationFormData;
  updateFields: (fields: Partial<SimulationFormData>) => void;
  errors: Partial<Record<keyof SimulationFormData, string>>;
}
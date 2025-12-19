
export enum ProductCategory {
  BATH_MATS = 'Bath Mats',
  CUSHIONS = 'Cushions',
  PILLOW_COVERS = 'Pillow Covers',
  PRINTED_CARPETS = 'Printed Carpets',
  HAND_WOVEN_CARPETS = 'Hand Woven Carpets',
  DOORMATS = 'Doormats',
  OUTDOOR_POOL_MATS = 'Outdoor & Pool Mats',
  RUNNERS = 'Runners',
  TABLE_MATS = 'Table Mats',
  FLOOR_RUGS = 'Floor Rugs',
  YOGA_EXERCISE_MATS = 'Yoga & Exercise Mats',
  ACUPRESSURE_MATS = 'Acupressure Mats',
  CUSTOMIZED_RUGS = 'Customized Rugs',
  CARPET_RUNNERS = 'Carpet Runners'
}

export enum Material {
  WOOL = 'Wool',
  COTTON = 'Cotton',
  JUTE = 'Jute',
  HEMP = 'Hemp',
  ABACA = 'Abaca',
  SILK = 'Silk',
  BAMBOO_SILK = 'Bamboo Silk'
}

export interface InquiryForm {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  requirement: string;
  productTitle?: string;
}

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  material: Material[];
  image: string;
  description: string;
  specs: string[];
}

import { ProductCategory, Material } from './types';

export const BRAND_NAME = "Alam Exports";
export const WHATSAPP_NUMBER = "+919000000000"; // Placeholder for client
export const EMAIL_CONTACT = "export@alamexports.com";

export const CATEGORIES = Object.values(ProductCategory);
export const MATERIALS = Object.values(Material);

export const NAV_LINKS = [
  { name: 'Home', path: '#/' },
  { name: 'About Us', path: '#/about' },
  { name: 'Products', path: '#/products', isMega: true },
  { name: 'Custom Rugs', path: '#/custom-rugs' },
  { name: 'Materials', path: '#/materials' },
  { name: 'Contact', path: '#/contact' },
];

export const FOOTER_LINKS = [
  { name: 'Privacy Policy', path: '#/privacy' },
  { name: 'Terms & Conditions', path: '#/terms' },
  { name: 'Disclaimer', path: '#/disclaimer' },
];

// Seed data for initial layout testing
export const SAMPLE_PRODUCTS = [
  {
    id: 'pr-1',
    title: 'Natural Fiber Jute Runner',
    category: ProductCategory.RUNNERS,
    material: [Material.JUTE],
    image: 'https://picsum.photos/seed/rug1/800/800',
    description: 'Expertly hand-braided runners using premium grade golden jute fibers.',
    specs: ['Ethically hand-woven', 'Durable for high traffic', 'Natural variations']
  }
];
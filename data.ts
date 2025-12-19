import { ProductCategory, Material, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'pr-jute-01',
    title: 'Heritage Jute Floor Rug',
    category: ProductCategory.FLOOR_RUGS,
    material: [Material.JUTE],
    image: 'https://picsum.photos/seed/jute1/800/800',
    description: 'A heavy-duty, hand-braided jute rug designed for high-traffic export markets. Features natural golden hues and superior tensile strength.',
    specs: ['Weight: 2500 GSM', 'Thickness: 10mm', 'Anti-static properties', 'Available in custom sizes']
  },
  {
    id: 'pr-wool-01',
    title: 'Artisan Wool Hand Woven Carpet',
    category: ProductCategory.HAND_WOVEN_CARPETS,
    material: [Material.WOOL, Material.COTTON],
    image: 'https://picsum.photos/seed/wool1/800/800',
    description: 'Premium New Zealand wool blended with Indian cotton for a soft touch and high durability. Ideal for luxury hospitality projects.',
    specs: ['80% Wool, 20% Cotton', 'Hand-loomed in Bhadohi', 'Colorfast dyes', 'Export grade backing']
  },
  {
    id: 'pr-bath-01',
    title: 'Cotton Tufted Bath Mat',
    category: ProductCategory.BATH_MATS,
    material: [Material.COTTON],
    image: 'https://picsum.photos/seed/bath1/800/800',
    description: 'High-absorbency tufted bath mats with non-slip finish. Specifically manufactured for department store volume orders.',
    specs: ['100% Ring-spun cotton', 'Machine washable', 'Anti-skid coating available', 'Standard sizes: 50x80cm']
  },
  {
    id: 'pr-cushion-01',
    title: 'Textured Cotton Pillow Cover',
    category: ProductCategory.PILLOW_COVERS,
    material: [Material.COTTON, Material.SILK],
    image: 'https://picsum.photos/seed/pillow1/800/800',
    description: 'Sophisticated pillow covers featuring intricate hand-guided embroidery and silk highlights.',
    specs: ['YKK Hidden zippers', 'Reinforced seams', 'Material: Cotton duck with silk embroidery', 'Size: 45x45cm']
  },
  {
    id: 'pr-hemp-01',
    title: 'Sustainable Hemp Runner',
    category: ProductCategory.RUNNERS,
    material: [Material.HEMP],
    image: 'https://picsum.photos/seed/hemp1/800/800',
    description: 'Eco-conscious hemp runners with a focus on durability and rustic aesthetic. Perfect for minimalist interior catalogs.',
    specs: ['Raw hemp fibers', 'Natural weave', 'UV resistant', 'High durability']
  },
  {
    id: 'pr-silk-01',
    title: 'Bamboo Silk Floor Rug',
    category: ProductCategory.FLOOR_RUGS,
    material: [Material.BAMBOO_SILK, Material.COTTON],
    image: 'https://picsum.photos/seed/silkrug1/800/800',
    description: 'A luxury floor rug with high sheen and velvet-like texture. Manufactured for premium showrooms and luxury residential projects.',
    specs: ['Bamboo Silk pile', 'Hand-knotted finish', 'Intricate patterns', 'Luxury market positioning']
  }
];

export const CATEGORY_METADATA = [
  { 
    category: ProductCategory.BATH_MATS, 
    image: 'https://picsum.photos/seed/cat_bath/600/600',
    description: 'Specialized high-absorbency tufted and woven bath mats for global retail chains and hospitality sectors. Focus on durability and rapid-dry technology.'
  },
  { 
    category: ProductCategory.CUSHIONS, 
    image: 'https://picsum.photos/seed/cat_cushion/600/600',
    description: 'Decorative textile cushions featuring artisanal embroidery, heavy-duty stitching, and premium filling options for boutique wholesalers.'
  },
  { 
    category: ProductCategory.PILLOW_COVERS, 
    image: 'https://picsum.photos/seed/cat_pillow/600/600',
    description: 'Artisanal pillow covers manufactured with precision using cotton duck, velvet, and blended fabrics. Ideal for seasonal home decor collections.'
  },
  { 
    category: ProductCategory.PRINTED_CARPETS, 
    image: 'https://picsum.photos/seed/cat_print/600/600',
    description: 'Advanced digital and screen-printed carpets offering intricate patterns and high color fidelity for high-traffic commercial and residential spaces.'
  },
  { 
    category: ProductCategory.HAND_WOVEN_CARPETS, 
    image: 'https://picsum.photos/seed/cat_woven/600/600',
    description: 'Traditional hand-woven carpets from heritage weaving clusters. Each piece showcases centuries-old techniques with export-grade finishing.'
  },
  { 
    category: ProductCategory.DOORMATS, 
    image: 'https://picsum.photos/seed/cat_door/600/600',
    description: 'Resilient coir, rubber, and jute doormats designed for extreme weather conditions and high-traffic entryways in international markets.'
  },
  { 
    category: ProductCategory.OUTDOOR_POOL_MATS, 
    image: 'https://picsum.photos/seed/cat_outdoor/600/600',
    description: 'UV-stabilized and mildew-resistant floor solutions for outdoor decks, poolside areas, and garden patios. Engineered for longevity.'
  },
  { 
    category: ProductCategory.RUNNERS, 
    image: 'https://picsum.photos/seed/cat_runner/600/600',
    description: 'Narrow-width floor coverings for hallways and transitions. Available in various piles and materials including jute, wool, and recycled blends.'
  },
  { 
    category: ProductCategory.TABLE_MATS, 
    image: 'https://picsum.photos/seed/cat_table/600/600',
    description: 'Heat-resistant and washable table mats for fine dining and casual home setups. Crafted from natural fibers and easy-care synthetics.'
  },
  { 
    category: ProductCategory.FLOOR_RUGS, 
    image: 'https://picsum.photos/seed/cat_floor/600/600',
    description: 'Our flagship range of large-format area rugs. From minimalist textures to ornate designs, manufactured to meet global size standards.'
  },
  { 
    category: ProductCategory.YOGA_EXERCISE_MATS, 
    image: 'https://picsum.photos/seed/cat_yoga/600/600',
    description: 'Functional cotton and natural rubber-based yoga mats for fitness distributors. Emphasis on grip, comfort, and hypoallergenic properties.'
  },
  { 
    category: ProductCategory.ACUPRESSURE_MATS, 
    image: 'https://picsum.photos/seed/cat_acu/600/600',
    description: 'Specialized wellness mats with precise mechanical designs for therapeutic use. Manufactured under strict quality control for medical importers.'
  },
  { 
    category: ProductCategory.CUSTOMIZED_RUGS, 
    image: 'https://picsum.photos/seed/cat_custom/600/600',
    description: 'Bespoke manufacturing services for project-specific requirements. We translate your designs into high-quality textile realities.'
  },
  { 
    category: ProductCategory.CARPET_RUNNERS, 
    image: 'https://picsum.photos/seed/cat_crunner/600/600',
    description: 'Heavy-duty wall-to-wall style runners for commercial installations, staircases, and high-frequency hospitality corridors.'
  },
];
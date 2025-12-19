import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data';
import { CATEGORIES, MATERIALS } from '../constants';
import { ProductCategory, Material } from '../types';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);

  // Check for category in URL on mount (e.g., from Mega Menu)
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.split('?')[1]);
    const catParam = params.get('category');
    if (catParam && CATEGORIES.includes(catParam as ProductCategory)) {
      setSelectedCategory(catParam as ProductCategory);
    }
  }, []);

  const toggleMaterial = (mat: Material) => {
    setSelectedMaterials(prev => 
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const materialMatch = selectedMaterials.length === 0 || 
        product.material.some(m => selectedMaterials.includes(m));
      return categoryMatch && materialMatch;
    });
  }, [selectedCategory, selectedMaterials]);

  return (
    <div className="bg-white min-h-screen">
      {/* Catalog Hero */}
      <section className="relative py-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/catalog_hero/1920/600" 
            alt="Manufacturing Line" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-4">
            Direct-from-Source
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-6">
            Master Export Catalog
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">
            Access our complete technical specifications for international distribution. 
            All products are manufactured to ISO and global retail standards.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0 space-y-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6 border-b pb-2">
                Categories
              </h3>
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className={`text-left text-sm py-1 transition-colors ${selectedCategory === 'All' ? 'font-bold text-neutral-900 underline' : 'text-neutral-500 hover:text-neutral-900'}`}
                >
                  All Collections
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat as ProductCategory)}
                    className={`text-left text-sm py-1 transition-colors ${selectedCategory === cat ? 'font-bold text-neutral-900 underline' : 'text-neutral-500 hover:text-neutral-900'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6 border-b pb-2">
                Material Specs
              </h3>
              <div className="space-y-3">
                {MATERIALS.map(mat => (
                  <label key={mat} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      className="w-4 h-4 border-neutral-300 rounded focus:ring-neutral-900 accent-neutral-900"
                      checked={selectedMaterials.includes(mat as Material)}
                      onChange={() => toggleMaterial(mat as Material)}
                    />
                    <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors uppercase tracking-tight font-medium">
                      {mat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-6 bg-stone-50 border border-neutral-100">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 mb-2">Technical Support</h4>
              <p className="text-[11px] text-neutral-500 leading-normal">
                Need CAD drawings or physical swatches? Contact our samples desk.
              </p>
              <a href="#/contact" className="mt-4 block text-[10px] font-bold uppercase tracking-widest text-neutral-900 underline">
                Contact Samples Unit
              </a>
            </div>
          </aside>

          {/* Catalog Grid */}
          <main className="flex-grow">
            <div className="flex justify-between items-center mb-10 pb-4 border-b border-neutral-100">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Displaying {filteredProducts.length} Results
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[10px] uppercase font-bold text-neutral-300">Layout: High-Density</span>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-32 text-center bg-stone-50 border border-dashed border-neutral-200">
                <p className="text-neutral-400 font-bold uppercase tracking-widest">No Products Match Filters</p>
                <button 
                  onClick={() => { setSelectedCategory('All'); setSelectedMaterials([]); }}
                  className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-900 underline"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination/Load More (Visual Only for B2B) */}
            <div className="mt-20 flex justify-center">
              <div className="flex flex-col items-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
                  Showing 1-{filteredProducts.length} of {filteredProducts.length} collections
                </p>
                <div className="h-0.5 w-32 bg-neutral-100 relative">
                  <div className="absolute top-0 left-0 h-full w-full bg-neutral-900"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Sourcing Banner */}
      <section className="bg-neutral-50 py-24 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 border border-neutral-200 bg-white">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Bulk Logistics</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              FCL and LCL shipping expertise. We handle all export documentation for seamless delivery to USA, EU, and Oceania ports.
            </p>
          </div>
          <div className="p-8 border border-neutral-200 bg-white">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Quality Audits</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Every shipment undergoes a 3nd-party or internal 5-step quality verification process to ensure zero-defect distribution.
            </p>
          </div>
          <div className="p-8 border border-neutral-200 bg-white">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Private Labeling</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Custom wash-care labels, branded backing, and custom packaging available for volume-contract retail partners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
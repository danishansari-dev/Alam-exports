import React, { useMemo, useState } from 'react';
import { PRODUCTS, CATEGORY_METADATA } from '../data';
import { ProductCategory, Material } from '../types';
import { MATERIALS } from '../constants';
import ProductCard from '../components/ProductCard';

const CategoryPage: React.FC = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);

  // Extract category from hash: #/category/Category%20Name
  const currentCategory = useMemo(() => {
    const hash = window.location.hash;
    const parts = hash.split('/');
    if (parts.length < 3) return null;
    // Handle query params if present in the hash string
    const categoryPart = parts[2].split('?')[0];
    return decodeURIComponent(categoryPart) as ProductCategory;
  }, [window.location.hash]);

  const categoryMeta = useMemo(() => {
    return CATEGORY_METADATA.find(m => m.category === currentCategory);
  }, [currentCategory]);

  const toggleMaterial = (mat: Material) => {
    setSelectedMaterials(prev => 
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const filteredProducts = useMemo(() => {
    let results = PRODUCTS;
    if (currentCategory) {
      results = results.filter(p => p.category === currentCategory);
    }
    if (selectedMaterials.length > 0) {
      results = results.filter(p => 
        p.material.some(m => selectedMaterials.includes(m))
      );
    }
    return results;
  }, [currentCategory, selectedMaterials]);

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-20 pb-16 border-b border-neutral-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400 mb-4 block">Manufacturing Line</span>
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter text-neutral-900 mb-8 leading-none">
              {currentCategory || 'All Products'}
            </h1>
            {categoryMeta?.description && (
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-neutral-900"></div>
                <p className="text-neutral-600 leading-relaxed text-xl font-light italic">
                  {categoryMeta.description}
                </p>
              </div>
            )}
          </div>
          <div className="bg-neutral-900 text-white px-6 py-6 border-l-4 border-neutral-400">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60 text-center">Batch Inventory</p>
            <p className="text-3xl font-bold text-center tracking-tighter">{filteredProducts.length}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1 opacity-60 text-center">Active SKUs</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-12 flex flex-wrap items-center gap-6 p-6 bg-stone-100 border border-neutral-200">
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Sort & Filter By Material Specs:</span>
        <div className="flex flex-wrap gap-2">
          {MATERIALS.map(mat => (
            <button
              key={mat}
              onClick={() => toggleMaterial(mat as Material)}
              className={`px-4 py-2 border text-[10px] font-bold uppercase tracking-widest transition-all ${
                selectedMaterials.includes(mat as Material)
                  ? 'bg-neutral-900 border-neutral-900 text-white'
                  : 'bg-white border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
              }`}
            >
              {mat}
            </button>
          ))}
          {selectedMaterials.length > 0 && (
            <button 
              onClick={() => setSelectedMaterials([])}
              className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 underline underline-offset-4 ml-4 hover:opacity-70"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-neutral-50 border border-neutral-100 p-24 text-center">
          <h3 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-widest">Specifications Not Found</h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            We currently do not have stock SKUs matching these criteria. Please contact our custom fabrication unit for bespoke development.
          </p>
          <button 
            onClick={() => setSelectedMaterials([])}
            className="inline-block bg-neutral-900 text-white px-10 py-4 font-bold uppercase tracking-widest text-xs shadow-md"
          >
            Clear Selected Specs
          </button>
        </div>
      )}
      
      {/* B2B Compliance Note */}
      <div className="mt-32 p-10 border border-neutral-200 bg-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-2">Technical Documentation Notice</h4>
          <p className="text-xs text-neutral-500 leading-relaxed uppercase tracking-wide">
            Detailed weaving schematics and yarn certification documents are available for all products in the <span className="font-bold">{currentCategory}</span> collection. 
            Color variants are calibrated to Pantone TCX standards.
          </p>
        </div>
        <a href="#/contact" className="whitespace-nowrap bg-neutral-900 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest shadow-lg">
          Request Compliance Docs
        </a>
      </div>
    </div>
  );
};

export default CategoryPage;
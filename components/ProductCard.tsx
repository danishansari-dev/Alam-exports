
import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white border border-neutral-200 group flex flex-col h-full shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out">
      {/* Image Section - Fixed Aspect Ratio */}
      <a href={`#/product/${product.id}`} className="block relative overflow-hidden aspect-square bg-neutral-100 border-b border-neutral-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.material.map(m => (
            <span key={m} className="bg-white/95 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest border border-neutral-200 text-neutral-600 shadow-sm">
              {m}
            </span>
          ))}
        </div>
      </a>
      
      {/* Content Section - Flex Grow used to push footer to bottom */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
            {product.category}
          </div>
          <h3 className="text-base font-bold text-neutral-900 mb-3 tracking-tight leading-tight group-hover:text-neutral-700 transition-colors">
            {product.title}
          </h3>
          <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
            {product.description}
          </p>
        </div>
        
        {/* Footer Section - Anchored to bottom with mt-auto */}
        <div className="mt-auto pt-5 border-t border-neutral-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <a 
              href={`#/product/${product.id}`}
              className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors flex items-center"
            >
              Technical Specs
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-[9px] font-bold text-neutral-300 uppercase tracking-tighter">Export Grade</span>
          </div>
          
          <a 
            href={`#/contact?product=${encodeURIComponent(product.title)}`}
            className="w-full text-center py-3 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-sm active:scale-[0.98]"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

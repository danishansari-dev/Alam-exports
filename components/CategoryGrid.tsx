import React from 'react';
import { CATEGORY_METADATA } from '../data';

const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {CATEGORY_METADATA.map(({ category, image }) => (
        <a 
          key={category} 
          href={`#/category/${encodeURIComponent(category)}`}
          className="group relative h-[350px] overflow-hidden bg-neutral-100 border border-neutral-200"
        >
          <img 
            src={image} 
            alt={category} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-2 leading-tight">{category}</h3>
            <p className="text-neutral-300 text-[9px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
              Technical Details →
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CategoryGrid;
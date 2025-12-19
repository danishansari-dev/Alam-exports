
import React from 'react';
import { MATERIALS } from '../constants';

const Materials: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold uppercase tracking-tighter mb-12">Material Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {MATERIALS.map(material => (
          <div key={material} className="p-8 border border-neutral-100 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{material}</h3>
            <div className="h-40 bg-neutral-50 mb-4 border border-dashed border-neutral-200"></div>
            <p className="text-sm text-neutral-500">Sourcing and technical properties placeholder.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;

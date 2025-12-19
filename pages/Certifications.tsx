
import React from 'react';

const Certifications: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8">Compliance & Standards</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="p-12 border border-neutral-200 text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full mx-auto mb-6"></div>
            <h3 className="font-bold uppercase tracking-widest text-sm">Audit Certificate Placeholder</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

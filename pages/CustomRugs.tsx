
import React from 'react';

const CustomRugs: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8">Bespoke Manufacturing</h1>
      <div className="bg-neutral-900 text-white p-20 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-6">CUSTOM DESIGN SERVICES</h2>
        <p className="max-w-2xl text-neutral-400 mb-10 leading-relaxed">
          We offer full customization for hospitality projects, buying agents, and private labels.
        </p>
        <button className="border border-white px-8 py-4 font-bold uppercase tracking-widest text-sm">Start Consultation</button>
      </div>
    </div>
  );
};

export default CustomRugs;

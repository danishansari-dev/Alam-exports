import React from 'react';
import { CATEGORIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-neutral-900 overflow-hidden flex items-center">
        <img 
          src="https://picsum.photos/seed/rug_facility/1920/1080" 
          alt="Manufacturing Facility" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-7xl mx-auto px-6 w-full text-white">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4 bg-white/10 px-4 py-1 backdrop-blur-sm">
            Established Manufacturer & Exporter
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            PREMIUM INDIAN<br />CRAFTSMANSHIP
          </h1>
          <p className="text-xl text-neutral-300 max-w-xl mb-10 font-light leading-relaxed">
            Supplying global wholesalers and importers with artisan rugs, carpets, and home furnishings. 
            Directly from our facility to your distribution points.
          </p>
          <div className="flex space-x-4">
            <a href="#/products" className="bg-white text-neutral-900 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-neutral-200 transition-colors">
              Explore Range
            </a>
            <a href="#/contact" className="border border-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-neutral-900 transition-colors">
              Inquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-2">Our Product Verticals</h2>
            <p className="text-neutral-500">Curated collections for overseas distribution.</p>
          </div>
          <a href="#/products" className="text-sm font-bold border-b-2 border-neutral-900 pb-1 uppercase tracking-widest">View All</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.slice(0, 6).map((cat, idx) => (
            <a 
              key={cat} 
              href={`#/category/${encodeURIComponent(cat)}`}
              className="group relative h-[400px] overflow-hidden bg-neutral-100"
            >
              <img 
                src={`https://picsum.photos/seed/carpet_${idx}/800/800`} 
                alt={cat} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{cat}</h3>
                <p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">Explore Collection →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://picsum.photos/seed/detail_weave/1000/1000" 
              alt="Quality Manufacturing" 
              className="w-full aspect-square object-cover shadow-2xl border-[16px] border-white"
            />
            <p className="mt-4 text-[10px] text-neutral-400 uppercase tracking-widest">Factory Facility - Weaving Section 04</p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase">B2B EXPORT STANDARDS</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2 uppercase text-xs tracking-widest">Large Scale Production</h4>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  Equipped with modern looms and printing technology to handle bulk container orders with consistent quality control.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2 uppercase text-xs tracking-widest">Customized Branding</h4>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  White labeling and custom packaging services available for overseas distributors and large retail chains.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2 uppercase text-xs tracking-widest">Global Logistics</h4>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  Streamlined export documentation and logistical support for smooth port-to-port or door-to-door delivery.
                </p>
              </div>
            </div>
            <a href="#/about" className="inline-block mt-12 bg-neutral-900 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-neutral-800 transition-colors">
              Our Facility Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
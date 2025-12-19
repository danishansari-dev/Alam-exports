import React, { useMemo } from 'react';
import { PRODUCTS } from '../data';
import ProductImageGallery from '../components/ProductImageGallery';
import InquiryForm from '../components/InquiryForm';

const ProductDetailPage: React.FC = () => {
  const product = useMemo(() => {
    const hash = window.location.hash;
    const parts = hash.split('/');
    // Get the ID correctly handling potential query params at the end
    const idWithParams = parts[parts.length - 1];
    const id = idWithParams.split('?')[0];
    return PRODUCTS.find(p => p.id === id);
  }, [window.location.hash]);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest">Product Not Found</h2>
        <a href="#/products" className="text-neutral-500 underline mt-4 inline-block">Back to Collections</a>
      </div>
    );
  }

  const galleryImages = [
    product.image,
    `https://picsum.photos/seed/${product.id}-texture/800/800`,
    `https://picsum.photos/seed/${product.id}-edge/800/800`,
    `https://picsum.photos/seed/${product.id}-backing/800/800`,
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      {/* Breadcrumb */}
      <nav className="mb-12 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
        <a href="#/" className="hover:text-neutral-900">Home</a>
        <span className="mx-2">/</span>
        <a href="#/products" className="hover:text-neutral-900">Products</a>
        <span className="mx-2">/</span>
        <span className="text-neutral-900">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <ProductImageGallery images={galleryImages} />
        
        <div className="flex flex-col">
          <div className="mb-10 pb-10 border-b border-neutral-100">
            <span className="inline-block bg-neutral-900 text-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] mb-4">
              Export Only SKU: {product.id.toUpperCase()}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-neutral-900 mb-6 leading-none">
              {product.title}
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          {/* Technical and Material Grid */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b border-neutral-100 pb-1">
                Technical Data
              </h3>
              <ul className="space-y-3">
                {product.specs.map((spec, i) => (
                  <li key={i} className="text-sm text-neutral-800 font-medium">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b border-neutral-100 pb-1">
                Material Composition
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.material.map(m => (
                  <span key={m} className="px-2 py-1 bg-neutral-50 border border-neutral-200 text-[10px] font-bold uppercase text-neutral-600">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* New Manufacturing Specifications Section */}
          <div className="mb-12">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b border-neutral-100 pb-1">
              Manufacturing Specifications
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[9px] font-bold uppercase text-neutral-400 tracking-tighter">Production Capacity</p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Monthly manufacturing output of 15,000+ square meters for standard hand-loomed and tufted qualities. Facility scalability available for high-volume contract orders.
                </p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase text-neutral-400 tracking-tighter">Export Lead Times</p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Sample prototypes delivered in 14-21 days. Bulk production cycles typically range from 60 to 75 days post-approval, depending on seasonal demand.
                </p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase text-neutral-400 tracking-tighter">Quality Verification</p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Rigorous 3-stage inspection protocol: Pre-weaving yarn strength testing, mid-process loom auditing, and final post-wash finishing grade certification.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-between p-4 bg-stone-50 border border-neutral-200">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Minimum Order (MOQ)</span>
              <span className="text-xs font-bold text-neutral-900">500 Units / 20ft Container</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-stone-50 border border-neutral-200">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Standard Lead Time</span>
              <span className="text-xs font-bold text-neutral-900">60-90 Days ARO</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-stone-50 border border-neutral-200">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Compliance</span>
              <span className="text-xs font-bold text-neutral-900">REACH / Oeko-Tex Ready</span>
            </div>
          </div>

          <a 
            href="#contact-section"
            className="w-full bg-neutral-900 text-white text-center py-5 font-bold uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all shadow-xl active:scale-[0.99]"
          >
            Request B2B Quotation
          </a>
          
          <p className="mt-6 text-[10px] text-neutral-400 italic text-center uppercase tracking-widest">
            *This product is strictly for bulk export. No retail inquiries accepted.
          </p>
        </div>
      </div>

      {/* Technical Drawing / Schematic Placeholder */}
      <section className="mb-32 bg-neutral-50 p-12 md:p-20 border border-neutral-200 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-10">Manufacturing Detail</h2>
        <div className="max-w-4xl mx-auto border-4 border-dashed border-neutral-200 h-64 flex items-center justify-center bg-white">
           <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Detailed CAD / Weaving Schematic Placeholder</span>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
           <div>
             <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Backing Detail</h4>
             <p className="text-xs text-neutral-500 leading-relaxed">Available in natural latex, action back, or recycled PET backing depending on market requirements.</p>
           </div>
           <div>
             <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Edge Binding</h4>
             <p className="text-xs text-neutral-500 leading-relaxed">Heavy-duty serging or tape binding options to ensure structural integrity in high-traffic commercial environments.</p>
           </div>
           <div>
             <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Color Fastness</h4>
             <p className="text-xs text-neutral-500 leading-relaxed">Tested to ISO 105 standards for light and wash fastness. Certificates provided with every production batch.</p>
           </div>
        </div>
      </section>

      {/* Inquiry Form Anchor */}
      <div id="contact-section" className="max-w-4xl mx-auto pt-24 border-t-4 border-neutral-900">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-neutral-400 mb-2 block">Direct Export Inquiry</span>
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-neutral-900">Wholesale Sourcing Request</h2>
          <p className="text-neutral-500 mt-4 max-w-md mx-auto">
            Submit your specific requirements for <span className="text-neutral-900 font-bold">{product.title}</span>. 
            Our regional manager will respond with a technical worksheet.
          </p>
        </div>
        <InquiryForm productTitle={product.title} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
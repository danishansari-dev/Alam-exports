import React, { useState } from 'react';

interface Props {
  images: string[];
}

const ProductImageGallery: React.FC<Props> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Feature Container with Subtler Zoom Effect */}
      <div className="aspect-square bg-neutral-100 border border-neutral-200 overflow-hidden cursor-crosshair">
        <img 
          src={activeImage} 
          alt="Product Detail" 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`aspect-square border-2 transition-all overflow-hidden ${activeImage === img ? 'border-neutral-900' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="bg-neutral-50 p-4 border border-neutral-100 mt-6 flex items-center justify-center space-x-3">
        <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
          Rollover image to examine weave detail
        </p>
      </div>
    </div>
  );
};

export default ProductImageGallery;
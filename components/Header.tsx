import React, { useState } from 'react';
import { BRAND_NAME, NAV_LINKS, CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#/" className="text-2xl font-bold tracking-tighter text-neutral-900">
          {BRAND_NAME.toUpperCase()}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.path} 
              className="relative group"
              onMouseEnter={() => link.isMega && setIsMegaOpen(true)}
              onMouseLeave={() => link.isMega && setIsMegaOpen(false)}
            >
              <a 
                href={link.path}
                className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors uppercase tracking-widest py-8"
              >
                {link.name}
              </a>
              
              {link.isMega && isMegaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white border border-neutral-200 shadow-xl p-8 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2">
                  <div className="col-span-1 border-r border-neutral-100 pr-6 flex flex-col justify-center">
                    <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Export Catalog</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed italic">
                      "Excellence in textile manufacturing for international distribution."
                    </p>
                    <div className="mt-6 pt-6 border-t border-neutral-100 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      Standard Compliance: ISO 9001
                    </div>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-3">
                    {CATEGORIES.map((cat) => (
                      <a 
                        key={cat} 
                        href={`#/category/${encodeURIComponent(cat)}`}
                        className="text-sm text-neutral-600 hover:text-neutral-900 hover:translate-x-1 transition-all flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-neutral-200 rounded-full mr-2 group-hover:bg-neutral-900"></span>
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          className="lg:hidden p-2 text-neutral-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 p-6 flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.path} 
              href={link.path} 
              className="text-lg font-semibold text-neutral-900 uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

import React from 'react';
import { BRAND_NAME, FOOTER_LINKS, EMAIL_CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-800 pb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter mb-6">{BRAND_NAME.toUpperCase()}</h2>
          <p className="text-neutral-400 max-w-md leading-relaxed mb-6">
            Premier manufacturer and exporter of rugs and home furnishings from India. 
            Supplying high-quality, handmade products to global markets including 
            USA, Germany, UK, France, Australia, and Canada.
          </p>
          <div className="space-y-2">
            <p className="text-sm font-semibold">Manufacturing Facility:</p>
            <p className="text-neutral-400 text-sm">Industrial Hub, Panipat / Bhadohi, India</p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Inquiry</h3>
          <ul className="space-y-4 text-sm">
            <li><span className="text-neutral-500">Email:</span> <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-neutral-300">{EMAIL_CONTACT}</a></li>
            <li><span className="text-neutral-500">Hours:</span> Mon - Sat, 9AM - 7PM IST</li>
            <li className="pt-4">
              <span className="bg-neutral-800 px-3 py-1 rounded text-xs text-neutral-400">Export Only</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Legal</h3>
          <ul className="space-y-4 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.path}>
                <a href={link.path} className="text-neutral-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
        <p>No Online Payments | Wholesale Inquiries Only</p>
      </div>
    </footer>
  );
};

export default Footer;

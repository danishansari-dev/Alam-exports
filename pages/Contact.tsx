import React, { useMemo } from 'react';
import InquiryForm from '../components/InquiryForm';

const Contact: React.FC = () => {
  const productFromQuery = useMemo(() => {
    const hash = window.location.hash;
    const queryString = hash.split('?')[1];
    if (!queryString) return undefined;
    const params = new URLSearchParams(queryString);
    return params.get('product') || undefined;
  }, [window.location.hash]);

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-tighter">B2B Inquiry</h1>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          Connect with our export department for bulk orders, custom samples, and distribution partnerships.
        </p>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Direct Line</p>
            <p className="text-lg">+91 900 000 0000</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Email</p>
            <p className="text-lg">export@alamexports.com</p>
          </div>
        </div>
      </div>
      <InquiryForm productTitle={productFromQuery} />
    </div>
  );
};

export default Contact;
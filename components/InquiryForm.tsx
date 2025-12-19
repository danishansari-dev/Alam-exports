
import React, { useState } from 'react';
import { InquiryForm as InquiryType } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface Props {
  productTitle?: string;
  onClose?: () => void;
}

const InquiryForm: React.FC<Props> = ({ productTitle, onClose }) => {
  const [form, setForm] = useState<InquiryType>({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    requirement: '',
    productTitle: productTitle || 'General Inquiry'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `B2B Inquiry from Website:
Product: ${form.productTitle}
Name: ${form.name}
Company: ${form.company}
Country: ${form.country}
Email: ${form.email}
Phone: ${form.phone}
Requirement: ${form.requirement}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encoded}`, '_blank');
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 border border-neutral-200 shadow-sm">
      <h3 className="text-xl font-bold text-neutral-900 border-b pb-4 mb-6">Send Inquiry</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          required
          type="text" 
          placeholder="Contact Name"
          className="w-full p-3 border border-neutral-300 focus:outline-neutral-900"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
        />
        <input 
          required
          type="text" 
          placeholder="Company Name"
          className="w-full p-3 border border-neutral-300 focus:outline-neutral-900"
          value={form.company}
          onChange={e => setForm({...form, company: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          required
          type="text" 
          placeholder="Country"
          className="w-full p-3 border border-neutral-300 focus:outline-neutral-900"
          value={form.country}
          onChange={e => setForm({...form, country: e.target.value})}
        />
        <input 
          required
          type="email" 
          placeholder="Email Address"
          className="w-full p-3 border border-neutral-300 focus:outline-neutral-900"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />
      </div>

      <input 
        required
        type="tel" 
        placeholder="Phone (incl. Country Code)"
        className="w-full p-3 border border-neutral-300 focus:outline-neutral-900"
        value={form.phone}
        onChange={e => setForm({...form, phone: e.target.value})}
      />

      <textarea 
        required
        rows={4}
        placeholder="Detail your requirements (Quantity, Material, Sizes...)"
        className="w-full p-3 border border-neutral-300 focus:outline-neutral-900"
        value={form.requirement}
        onChange={e => setForm({...form, requirement: e.target.value})}
      ></textarea>

      <button 
        type="submit"
        className="w-full bg-neutral-900 text-white font-bold py-4 hover:bg-neutral-800 transition-colors uppercase tracking-widest text-sm"
      >
        Submit to WhatsApp
      </button>
      
      <p className="text-[10px] text-center text-neutral-400 italic">
        *No data is stored. Your inquiry is sent directly to our export department via WhatsApp.
      </p>
    </form>
  );
};

export default InquiryForm;

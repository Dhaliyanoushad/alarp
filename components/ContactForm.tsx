"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    concern: 'Compliance',
    message: ''
  });

  const concerns = [
    "Compliance",
    "Workplace Safety Audit",
    "Training",
    "High-Risk Operations",
    "Permit Systems",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. A safety consultant will contact you shortly.');
  };

  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-2xl border border-slate-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-slate-900 uppercase tracking-wider">Full Name</label>
            <input 
              required
              type="text" 
              id="name"
              placeholder="John Doe"
              className="w-full px-5 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-bold text-slate-900 uppercase tracking-wider">Company</label>
            <input 
              required
              type="text" 
              id="company"
              placeholder="Your Business Name"
              className="w-full px-5 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all"
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="industry" className="text-sm font-bold text-slate-900 uppercase tracking-wider">Industry</label>
            <input 
              required
              type="text" 
              id="industry"
              placeholder="e.g. Construction"
              className="w-full px-5 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all"
              onChange={(e) => setFormData({...formData, industry: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="concern" className="text-sm font-bold text-slate-900 uppercase tracking-wider">Primary Concern</label>
            <select 
              id="concern"
              className="w-full px-5 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all appearance-none cursor-pointer"
              value={formData.concern}
              onChange={(e) => setFormData({...formData, concern: e.target.value})}
            >
              {concerns.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-slate-900 uppercase tracking-wider">Message</label>
          <textarea 
            required
            id="message"
            rows={5}
            placeholder="How can we assist with your safety requirements?"
            className="w-full px-5 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all"
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#E30613] hover:bg-[#c40510] text-white font-bold py-4 md:py-5 rounded-lg text-base md:text-lg transition-all shadow-xl shadow-red-600/20 uppercase tracking-widest"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState, useCallback, memo } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    concern: "Compliance",
    message: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: "" });


  const concerns = [
    "Compliance",
    "Workplace Safety Audit",
    "Training",
    "High-Risk Operations",
    "Permit Systems",
    "Other",
  ];

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7,15}$/; // Standard mobile numeric validation

    if (!formData.name.trim()) return "Full name is required";
    if (!formData.company.trim()) return "Company name is required";
    if (!formData.industry.trim()) return "Industry is required";
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address";
    if (!phoneRegex.test(formData.phone)) return "Please enter a valid phone number (numeric only)";
    if (!formData.message.trim()) return "Message is required";
    
    return null;
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    // Allow only numbers for phone field
    if (id === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData(prev => ({ ...prev, [id]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
    // Clear status when user starts typing
    if (status.type) setStatus({ type: null, message: "" });
  }, [status.type]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setStatus({ type: 'error', message: error });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC;

    if (!serviceId || !templateId || !publicKey || serviceId === 'xxxx') {
      setStatus({ type: 'error', message: "Mail configuration is missing. Please contact support." });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          company: formData.company,
          industry: formData.industry,
          concern: formData.concern,
          message: formData.message,
          email: formData.email,
          phone: formData.phone,
        },
        publicKey
      )
      .then(() => {
        setStatus({ type: 'success', message: "Thank you! Your inquiry has been sent successfully." });
        setFormData({
          name: "",
          company: "",
          industry: "",
          concern: "Compliance",
          message: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({ type: 'error', message: "Failed to send message. Please try again later." });
      })
      .finally(() => setLoading(false));
  }, [formData]);

  return (
    <div className="bg-white p-4 xxs:p-6 md:p-12 rounded-2xl shadow-2xl border border-slate-100">
      <form onSubmit={handleSubmit} className="space-y-4 xxs:space-y-6">
        {/* Row 1: Name & Company */}
        <div className="grid md:grid-cols-2 gap-4 xxs:gap-6">
          <div className="space-y-1.5 xs:space-y-2">
            <label htmlFor="name" className="text-[11px] xxs:text-xs xs:text-sm font-bold text-slate-900 uppercase tracking-wider">
              Full Name *
            </label>
            <input
              required
              type="text"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              className="w-full px-3 py-3 xxs:px-5 xxs:py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all text-sm xxs:text-base"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1.5 xs:space-y-2">
            <label htmlFor="company" className="text-[11px] xxs:text-xs xs:text-sm font-bold text-slate-900 uppercase tracking-wider">
              Company *
            </label>
            <input
              required
              type="text"
              id="company"
              placeholder="Your Business Name"
              value={formData.company}
              className="w-full px-3 py-3 xxs:px-5 xxs:py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all text-sm xxs:text-base"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid md:grid-cols-2 gap-4 xxs:gap-6">
          <div className="space-y-1.5 xs:space-y-2">
            <label htmlFor="email" className="text-[11px] xxs:text-xs xs:text-sm font-bold text-slate-900 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              required
              type="email"
              id="email"
              placeholder="name@domain.com"
              value={formData.email}
              className="w-full px-3 py-3 xxs:px-5 xxs:py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all text-sm xxs:text-base"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1.5 xs:space-y-2">
            <label htmlFor="phone" className="text-[11px] xxs:text-xs xs:text-sm font-bold text-slate-900 uppercase tracking-wider">
              Phone Number *
            </label>
            <input
              required
              type="tel"
              id="phone"
              placeholder="0400 000 000"
              value={formData.phone}
              className="w-full px-3 py-3 xxs:px-5 xxs:py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all text-sm xxs:text-base"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 3: Industry & Concern */}
        <div className="grid md:grid-cols-2 gap-4 xxs:gap-6">
          <div className="space-y-1.5 xs:space-y-2">
            <label htmlFor="industry" className="text-[11px] xxs:text-xs xs:text-sm font-bold text-slate-900 uppercase tracking-wider">
              Industry *
            </label>
            <input
              required
              type="text"
              id="industry"
              placeholder="e.g. Construction"
              value={formData.industry}
              className="w-full px-3 py-3 xxs:px-5 xxs:py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all text-sm xxs:text-base"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1.5 xs:space-y-2">
            <label htmlFor="concern" className="text-[11px] xxs:text-xs xs:text-sm font-bold text-slate-900 uppercase tracking-wider">
              Primary Concern *
            </label>
            <div className="relative">
              <select
                id="concern"
                className="w-full px-3 py-3 xxs:px-5 xxs:py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all appearance-none cursor-pointer text-sm xxs:text-base"
                value={formData.concern}
                onChange={handleChange}
              >
                {concerns.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5 xs:space-y-2">
          <label htmlFor="message" className="text-[11px] xxs:text-xs xs:text-sm font-bold text-slate-900 uppercase tracking-wider">
            Message *
          </label>
          <textarea
            required
            id="message"
            rows={4}
            placeholder="How can we assist with your safety requirements?"
            value={formData.message}
            className="w-full px-3 py-3 xxs:px-5 xxs:py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] outline-none transition-all text-sm xxs:text-base min-h-[100px]"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Inline Feedback */}
        {status.message && (
          <div className={`p-4 rounded-lg text-sm font-medium ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            <div className="flex items-center gap-2">
              {status.type === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
              {status.message}
            </div>
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#E30613] hover:bg-[#c40510] text-white font-bold h-12 py-3 xxs:h-auto xxs:py-4 md:py-5 rounded-lg text-xs xs:text-base md:text-lg transition-all shadow-xl shadow-red-600/20 uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}

export default memo(ContactForm);

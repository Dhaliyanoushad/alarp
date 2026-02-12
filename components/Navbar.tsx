"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navyColor = "text-[#002D4B]";
  const redColor = "text-[#E30613]";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "High-Risk Expertise", href: "/high-risk-expertise" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-24 flex items-center justify-between">
          
          {/* 1. Left Section: Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex flex-col leading-none">
              <span className={`${redColor} font-black text-xl sm:text-2xl tracking-tighter`}>ALARP</span>
              <span className={`${navyColor} font-bold text-[8px] sm:text-[10px] tracking-[0.2em] uppercase`}>Safety Partners</span>
            </div>
          </Link>

          {/* 2. Middle Section: Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className={`text-[15px] font-bold ${navyColor} hover:text-[#E30613] transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 3. Right Section: Actions */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            <Link 
              href="tel:1300761935" 
              className={`hidden md:flex items-center gap-2 font-bold ${navyColor} hover:text-[#E30613] transition-colors`}
            >
              <Phone size={18} className="text-[#E30613]" fill="currentColor" />
              <span>1300 761 935</span>
            </Link>

            {/* Vertical Divider */}
            <div className="h-10 w-[1px] bg-gray-200 hidden md:block" />

            {/* Boxed Menu Button */}
            <Link 
              href="/contact"
              className={`flex items-center gap-2 border-2 border-slate-900 px-3 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold ${navyColor} hover:bg-slate-900 hover:text-white transition-all text-xs sm:text-sm`}
            >
              <span>Request Audit</span>
            </Link>
            
            <button 
              className="lg:hidden text-slate-900 p-1 sm:p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} className="sm:w-[28px] sm:h-[28px]" /> : <Menu size={24} className="sm:w-[28px] sm:h-[28px]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              className={`text-2xl font-bold ${navyColor} hover:text-[#E30613] transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="w-full max-w-xs h-[1px] bg-gray-100 my-4" />
          
          <Link 
            href="tel:1300761935" 
            className={`flex items-center gap-3 text-xl font-bold ${navyColor}`}
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              <Phone size={20} className="text-[#E30613]" />
            </div>
            <span>1300 761 935</span>
          </Link>
          
          <Link 
            href="/contact"
            className="w-full max-w-xs text-center border-2 border-slate-900 py-4 rounded-full font-bold bg-slate-900 text-white"
            onClick={() => setIsOpen(false)}
          >
            Request Audit
          </Link>
        </div>
      </div>
    </>
  );
}

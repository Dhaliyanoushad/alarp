import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';

export default function Navbar() {
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
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="max-w-[1600px] mx-auto px-8 h-24 flex items-center justify-between">
        
        {/* 1. Left Section: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex flex-col leading-none">
            <span className={`${redColor} font-black text-2xl tracking-tighter`}>ALARP</span>
            <span className={`${navyColor} font-bold text-[10px] tracking-[0.2em] uppercase`}>Safety Partners</span>
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
        <div className="flex items-center gap-6">
          <Link 
            href="tel:1300761935" 
            className={`hidden sm:flex items-center gap-2 font-bold ${navyColor} hover:text-[#E30613] transition-colors`}
          >
            <Phone size={18} className="text-[#E30613]" fill="currentColor" />
            <span>1300 761 935</span>
          </Link>

          {/* Vertical Divider */}
          <div className="h-10 w-[1px] bg-gray-200 hidden md:block" />

          {/* Boxed Menu Button */}
          <Link 
            href="/contact"
            className={`flex items-center gap-3 border-2 border-slate-900 px-6 py-2.5 rounded-full font-bold ${navyColor} hover:bg-slate-900 hover:text-white transition-all`}
          >
            <span>Request Audit</span>
          </Link>
          
          <button className="lg:hidden text-slate-900">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

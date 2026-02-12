import Link from 'next/link';
import { ChevronDown, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  const navyColor = "text-[#002D4B]";
  const redColor = "text-[#E30613]";

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 font-sans px-auto">
      {/* Container with horizontal padding to prevent screen-touching */}
      <div className="max-w-[1600px] mx-auto px-8 h-24 flex items-center justify-between">
        
        {/* 1. Left Section: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E30613]">
            <path d="M10.5 0C4.7 0 0 4.7 0 10.5V40H6V10.5C6 8 8 6 10.5 6H16C21.8 6 26.5 10.7 26.5 16.5C26.5 22.3 21.8 27 16 27H6V33H16C25.1 33 32.5 25.6 32.5 16.5C32.5 7.4 25.1 0 16 0H10.5Z" fill="currentColor"/>
          </svg> */}
          <span className={`${redColor} font-bold text-lg tracking-wider`}>PENINSULA</span>
        </Link>

        {/* 2. Middle Section: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <NavItem label="HR" hasDropdown navyColor={navyColor} />
          <NavItem label="Health & Safety" hasDropdown navyColor={navyColor} />
          <NavItem label="Employment Law" navyColor={navyColor} />
          <NavItem label="Events" navyColor={navyColor} />
          <NavItem label="Pricing" navyColor={navyColor} />
        </div>

        {/* 3. Right Section: Actions */}
        <div className="flex items-center gap-6">
          <Link 
            href="tel:1300761935" 
            className={`flex items-center gap-2 font-bold ${navyColor} hover:text-[#E30613] transition-colors`}
          >
            <Phone size={18} className="text-[#E30613]" fill="currentColor" />
            <span>Contact Us</span>
          </Link>

          {/* Vertical Divider */}
          <div className="h-10 w-[1px] bg-gray-200 hidden md:block" />

          {/* Boxed Menu Button */}
          <button className={`flex items-center gap-3 border-[1.5px] border-black px-5 py-2 rounded-md font-bold ${navyColor} hover:bg-gray-50 transition-all`}>
            <span>Menu</span>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
  navyColor: string;
}

// Sub-component for cleaner code
function NavItem({ label, hasDropdown, navyColor }: NavItemProps) {
  return (
    <div className={`flex items-center gap-1 cursor-pointer group`}>
      <span className={`text-[15px] font-bold ${navyColor} group-hover:text-[#E30613] transition-colors`}>
        {label}
      </span>
      {hasDropdown && (
        <ChevronDown size={14} className="text-gray-400 group-hover:text-[#E30613] transition-colors" />
      )}
    </div>
  );
}
import Link from 'next/link';

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[88px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg 
            width="32" 
            height="44" 
            viewBox="0 0 32 44" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#E30613]"
          >
            <path 
              d="M31.2 13.2C31.2 20.4 25.2 26.4 18 26.4H12V44H0V0H18C25.2 0 31.2 6 31.2 13.2ZM12 15.2H18C19.1 15.2 20 14.3 20 13.2C20 12.1 19.1 11.2 18 11.2H12V15.2Z" 
              fill="currentColor"
            />
          </svg>
          <span className="text-[#E30613] font-bold text-lg tracking-wider">PENINSULA</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="text-[15px] font-semibold text-[#1a1a1a] hover:text-[#E30613] transition-colors">HR</span>
            <div className="text-gray-400 group-hover:text-[#E30613]">
              <ChevronDown />
            </div>
          </div>
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="text-[15px] font-semibold text-[#1a1a1a] hover:text-[#E30613] transition-colors">Health & Safety</span>
            <div className="text-gray-400 group-hover:text-[#E30613]">
              <ChevronDown />
            </div>
          </div>
          <Link href="/services" className="text-[15px] font-semibold text-[#1a1a1a] hover:text-[#E30613] transition-colors">
            Employment Law
          </Link>
          <Link href="/expertise" className="text-[15px] font-semibold text-[#1a1a1a] hover:text-[#E30613] transition-colors">
            Events
          </Link>
          <Link href="/services" className="text-[15px] font-semibold text-[#1a1a1a] hover:text-[#E30613] transition-colors">
            Pricing
          </Link>
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-8">
          <Link 
            href="tel:1300761935" 
            className="flex items-center gap-3 text-[15px] font-bold text-[#1a1a1a] hover:text-[#E30613] transition-colors group"
          >
            <div className="text-[#E30613]">
              <PhoneIcon />
            </div>
            <span>Contact Us</span>
          </Link>
          
          <div className="h-10 w-[1px] bg-gray-200 hidden md:block" />

          <button className="flex items-center gap-2 group cursor-pointer border-none bg-transparent">
            <span className="text-[15px] font-semibold text-[#1a1a1a] group-hover:text-[#E30613] transition-colors">Menu</span>
            <div className="text-[#1a1a1a] group-hover:text-[#E30613]">
              <MenuIcon />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

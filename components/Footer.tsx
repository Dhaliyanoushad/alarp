"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const handleLinkClick = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-8 grid md:grid-cols-4 gap-16 mb-20">
        <div>
          <Link 
            href="/" 
            className="flex flex-col mb-8 leading-none"
            onClick={() => handleLinkClick('/')}
          >
            <span className="text-[#E30613] font-black text-2xl tracking-tighter">ALARP</span>
            <span className="text-white font-bold text-[10px] tracking-[0.2em] uppercase">Safety Partners</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">
            Providing expert WHS and risk-mitigation advice 24/7. Part of the Global Safety Partners Group, dedicated to protecting high-stakes operations.
          </p>
          <div className="flex gap-4">
             {['twitter', 'linkedin', 'facebook'].map(social => (
                <div key={social} className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:bg-[#E30613] hover:text-white transition-all cursor-pointer">
                   <span className="text-[10px] uppercase font-bold tracking-widest">{social[0]}</span>
                </div>
              ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="/" onClick={() => handleLinkClick('/')} className="hover:text-[#E30613] transition-colors">Home</Link></li>
            <li><Link href="/about" onClick={() => handleLinkClick('/about')} className="hover:text-[#E30613] transition-colors">About Us</Link></li>
            <li><Link href="/services" onClick={() => handleLinkClick('/services')} className="hover:text-[#E30613] transition-colors">Technical Services</Link></li>
            <li><Link href="/high-risk-expertise" onClick={() => handleLinkClick('/high-risk-expertise')} className="hover:text-[#E30613] transition-colors">High-Risk Expertise</Link></li>
            <li><Link href="/contact" onClick={() => handleLinkClick('/contact')} className="hover:text-[#E30613] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Expertise</h4>
           <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="/high-risk-expertise" onClick={() => handleLinkClick('/high-risk-expertise')} className="hover:text-[#E30613] transition-colors">Systems & Compliance</Link></li>
            <li><Link href="/high-risk-expertise" onClick={() => handleLinkClick('/high-risk-expertise')} className="hover:text-[#E30613] transition-colors">Major Hazard Facilities</Link></li>
            <li><Link href="/high-risk-expertise" onClick={() => handleLinkClick('/high-risk-expertise')} className="hover:text-[#E30613] transition-colors">Logistics Safety</Link></li>
            <li><Link href="/high-risk-expertise" onClick={() => handleLinkClick('/high-risk-expertise')} className="hover:text-[#E30613] transition-colors">Permit Systems</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Contact Us</h4>
          <p className="text-sm font-bold text-slate-400 mb-2">Technical Helpline</p>
          <p className="text-2xl font-black text-[#E30613] mb-6 transition-transform hover:scale-105 cursor-pointer w-fit underline decoration-2 underline-offset-8">1300 761 935</p>
          <Link href="/contact" onClick={() => handleLinkClick('/contact')} className="bg-[#E30613] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-slate-900 transition-all text-center block shadow-lg shadow-red-600/10">
             Book a Consultation
          </Link>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-8 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} ALARP SAFETY PARTNERS. National Technical Advisory.</p>
        <div className="flex gap-10">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

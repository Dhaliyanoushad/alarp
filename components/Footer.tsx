import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container grid md:grid-cols-4 gap-16 mb-20">
        <div>
          <Link href="/" className="text-2xl font-black tracking-tighter text-red-600 flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center text-white font-black text-xl">A</div>
            ALARP
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed font-semibold mb-8">
            Providing expert WHS and risk-mitigation advice 24/7. Part of the Global Safety Partners Group, dedicated to protecting high-stakes operations.
          </p>
          <div className="flex gap-4">
             {['twitter', 'linkedin', 'instagram', 'facebook'].map(social => (
                <div key={social} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                   <span className="text-[10px] transform -rotate-45">➤</span>
                </div>
             ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-widest text-xs">Services</h4>
          <ul className="space-y-4 text-sm font-semibold text-gray-600">
            <li><Link href="/services" className="hover:text-red-600 transition-colors">Health and Safety</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">HR and Employment Law</Link></li>
            <li><Link href="/expertise" className="hover:text-red-600 transition-colors">Risk Management</Link></li>
            <li><Link href="/expertise" className="hover:text-red-600 transition-colors">EAP and Wellbeing</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-widest text-xs">Resources</h4>
           <ul className="space-y-4 text-sm font-semibold text-gray-600">
            <li><Link href="/about" className="hover:text-red-600 transition-colors">About ALARP</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition-colors">Our Heritage</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition-colors">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">Technical Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
          <p className="text-sm font-bold text-gray-900 mb-2">Technical Helpline</p>
          <p className="text-2xl font-black text-red-600 mb-6 transition-transform hover:scale-105 cursor-pointer w-fit">1300 761 935</p>
          <Link href="/contact" className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-600 transition-all text-center block">
             Book Consultation
          </Link>
        </div>
      </div>
      
      <div className="container pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold text-gray-400">
        <p>&copy; {new Date().getFullYear()} ALARP SAFETY PARTNERS. Part of Global Safety Partners.</p>
        <div className="flex gap-10">
          <Link href="#" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-red-600 transition-colors">Terms of Use</Link>
          <Link href="#" className="hover:text-red-600 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}

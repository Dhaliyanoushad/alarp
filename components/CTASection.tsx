import Link from 'next/link';

export default function CTASection({ 
  title = "Make Safety Your Competitive Advantage.",
  theme = "dark" 
}: { 
  title?: string;
  theme?: "dark" | "light" 
}) {
  const isDark = theme === "dark";
  
  return (
    <section className={`${isDark ? 'bg-slate-950 text-white' : 'bg-[#F0F5FA] text-slate-900'} py-24 relative overflow-hidden`}>
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E30613]/5 -skew-x-12 translate-x-1/2" />
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">
          {title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link 
            href="/contact" 
            className="bg-[#3D5ADA] hover:bg-[#2F47B8] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-blue-900/20 transition-all flex items-center gap-3"
          >
            <span>Book a Consultation</span>
          </Link>
          
          <Link 
            href="/contact" 
            className={`${isDark ? 'border-white/20 hover:border-white' : 'border-slate-300 hover:border-slate-900'} border-2 px-10 py-5 rounded-full font-bold text-lg transition-all backdrop-blur-sm`}
          >
            Request a Safety Audit
          </Link>
        </div>
      </div>
    </section>
  );
}

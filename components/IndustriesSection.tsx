import { Building2, Package, Truck, Construction } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    { title: "Construction", icon: <Construction className="w-12 h-12" />, desc: "Tier 1 and 2 high-risk project protocols." },
    { title: "Warehousing", icon: <Package className="w-12 h-12" />, desc: "Logistics and automated system compliance." },
    { title: "High-Risk/MHF", icon: <Building2 className="w-12 h-12" />, desc: "Major hazard facility safety case delivery." },
    { title: "Logistics", icon: <Truck className="w-12 h-12" />, desc: "Chain of responsibility and transport safety." }
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-sm font-bold uppercase tracking-[0.4em] mb-4">Industries We Protect</h2>
          <div className="h-1 w-20 bg-[#E30613] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, index) => (
            <div 
              key={index}
              className="group p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-center"
            >
              <div className="text-white/40 group-hover:text-[#E30613] transition-colors mb-6 flex justify-center">
                {ind.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{ind.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

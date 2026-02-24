import { Mountain, Anchor, Factory, Truck, Construction, Box, Activity, Lock } from 'lucide-react';

export default function HighRiskGrid() {
  const categories = [
    {
      title: "Technical Work Environments",
      icon: <Mountain className="w-8 h-8 text-red" />,
      items: ["Working at Heights & Confined Spaces", "Working Above Water", "Major Hazard Facilities"]
    },
    {
      title: "Industrial Logistics & Equipment",
      icon: <Construction className="w-8 h-8 text-red" />,
      items: ["Motorised Vehicle Operations (Cranes, Forklifts, Trucks)", "Lifting Operations", "Warehousing Safety Standards"]
    },
    {
      title: "Critical Control",
      icon: <Lock className="w-8 h-8 text-red" />,
      items: ["Permit to Work Systems", "Critical Risk Inventories", "Safety Case Development"]
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 font-sans">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">High-Risk Expertise</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Authoritative and technical safety management for the most dangerous operational environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-100 hover:bg-slate-900 transition-all duration-500"
            >
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">{cat.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-white mb-4 sm:mb-6 transition-colors">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 group-hover:text-slate-300 font-medium transition-colors">
                    <span className="text-red font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

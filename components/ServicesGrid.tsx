import { ShieldCheck, HardHat, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ServicesGrid() {
  const services = [
    {
      title: "Systems & Compliance",
      icon: <ShieldCheck className="w-10 h-10 text-red" />,
      items: ["HSEMS Implementation", "Legal Compliance", "Procedure Reviews"]
    },
    {
      title: "Onsite Operations",
      icon: <HardHat className="w-10 h-10 text-red" />,
      items: ["Workplace Inspections", "Contractor Management", "Incident Investigation"]
    },
    {
      title: "Documentation & Training",
      icon: <FileText className="w-10 h-10 text-red" />,
      items: ["Staff Inductions & Training", "SWI Development", "Toolbox Talks"]
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 font-sans">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Core Services</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive HSE solutions tailored for high-risk industrial environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">{service.title}</h3>
              <ul className="space-y-4 mb-8">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 font-medium">
                    <span className="text-red">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/services" 
                className="inline-block text-red font-bold text-sm uppercase tracking-wider hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

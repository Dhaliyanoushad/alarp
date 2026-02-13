import CTASection from '@/components/CTASection';
import { ShieldCheck, HardHat, FileText, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function ServicesPage() {
  // ... (deepServices definition)
  const deepServices = [
    {
      category: "Systems & Compliance",
      icon: <ShieldCheck className="w-12 h-12 text-[#E30613]" />,
      features: [
        { title: "HSEMS Implementation", desc: "Bespoke Health, Safety, and Environmental Management Systems tailored to your risk profile." },
        { title: "Legal Compliance", desc: "Ensuring adherence to state-specific statutory requirements and national standards." },
        { title: "Procedure Reviews", desc: "Rigorous auditing of existing SOPs and safety protocols for efficiency and safety." }
      ]
    },
    {
      category: "Onsite Operations",
      icon: <HardHat className="w-12 h-12 text-[#E30613]" />,
      features: [
        { title: "Workplace Inspections", desc: "Detailed onsite physical audits to identify latent hazards and immediate risks." },
        { title: "Contractor Management", desc: "Verification systems for third-party compliance and onsite safety inductions." },
        { title: "Incident Investigation", desc: "Root cause analysis (RCA) and defensible reporting following operational incidents." }
      ]
    },
    {
      category: "Documentation & Training",
      icon: <FileText className="w-12 h-12 text-[#E30613]" />,
      features: [
        { title: "Staff Inductions & Training", desc: "Customized training modules for workers in high-risk environments." },
        { title: "SWI Development", desc: "Safe Work Instructions that are easy to follow and technically accurate." },
        { title: "Toolbox Talks", desc: "Engaging safety briefings designed to reinforce a culture of vigilance." }
      ]
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <AnimatedSection>
        <section className="bg-white py-32 border-b border-slate-100">
          <div className="max-w-[1600px] mx-auto px-8">
            <h1 className="text-slate-900 text-5xl md:text-7xl font-black mb-8">Technical Services</h1>
            <p className="text-slate-600 text-xl font-medium max-w-3xl leading-relaxed">
              Professional safety advisory designed for high-stakes industries. We don't just find problems—we deliver technical, defensible solutions.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Main Services Breakdown */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="space-y-32">
            {deepServices.map((cat, idx) => (
              <AnimatedSection key={idx}>
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-1/3">
                    <div className="mb-6">{cat.icon}</div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">{cat.category}</h2>
                    <div className="h-1.5 w-16 bg-[#E30613]"></div>
                  </div>
                  <div className="lg:w-2/3 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                    {cat.features.map((f, i) => (
                      <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                        <div className="flex gap-4 items-start mb-4">
                          <CheckCircle2 className="w-6 h-6 text-[#E30613] shrink-0 mt-1" />
                          <h4 className="text-xl font-black text-slate-900">{f.title}</h4>
                        </div>
                        <p className="text-slate-600 font-medium leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection>
        <CTASection theme="light" title="Secure Your Operations Today." />
      </AnimatedSection>
    </main>
  );
}

import HighRiskGrid from '@/components/HighRiskGrid';
import CTASection from '@/components/CTASection';
import { ShieldAlert, Zap, Layers, Beaker } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function HighRiskExpertisePage() {
  const focusAreas = [
    { title: "Technical Work Environments", icon: <Layers />, list: ["Confined Spaces", "Working at Heights", "Sub-surface Engineering"] },
    { title: "Energy & Infrastructure", icon: <Zap />, list: ["High Voltage Management", "Critical Asset Protection", "Structural Integrity"] },
    { title: "Chemical & Biosecurity", icon: <Beaker />, list: ["Hazardous Goods (DG)", "MHF Safety Cases", "Environmental Mitigation"] }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <AnimatedSection>
        <section className="bg-slate-900 py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2070"
              alt="Industrial Background"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <div className="inline-flex items-center gap-2 bg-[#E30613] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldAlert size={14} /> Critical Systems
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black mb-6">High-Risk Expertise</h1>
            <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">
              Authoritative safety management for high-stakes operational environments where failure is not an option.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <HighRiskGrid />
      </AnimatedSection>

      {/* Technical Detail Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Mastering <span className="text-[#E30613]">Major Hazard</span> <br /> Facility Standards</h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-8">
                  Our consultants bring deep technical knowledge from the most demanding sectors, including mining, heavy construction, and motorized vehicle logistics. We understand the physics of high-risk work, not just the paperwork.
                </p>
                <div className="space-y-4">
                  {["Rigorous Safety Case Development", "Mechanical & Hydraulic Risk Control", "Heavy Lift Supervisory Frameworks"].map(item => (
                    <div key={item} className="flex gap-4 items-center font-bold text-slate-900">
                      <div className="w-2 h-2 bg-[#E30613] rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <Image 
                  src="/image/audit.jpg" 
                  alt="Industrial Safety" 
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <CTASection theme="dark" title="Don't Leave Your High-Risk Operations to Chance." />
      </AnimatedSection>
    </div>
  );
}

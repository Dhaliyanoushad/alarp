import CTASection from '@/components/CTASection';
import IndustriesSection from '@/components/IndustriesSection';
import AnimatedSection from '@/components/AnimatedSection';

export default function AboutPage() {
  const values = [
    { title: "Safety First", desc: "No operation is worth a compromise on life or limb." },
    { title: "Integrity", desc: "Honest, defensible advice that stands up to scrutiny." },
    { title: "Practical Solutions", desc: "Real-world safety that works on the factory floor." },
    { title: "Compliance-Driven", desc: "Exceeding statutory requirements as a baseline." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <AnimatedSection>
        <section className="bg-slate-900 py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h1 className="text-white text-5xl md:text-7xl font-black mb-6">Our Story</h1>
            <p className="text-slate-300 text-xl font-medium max-w-2xl mx-auto">
              Practical safety consultancy built on technical expertise and a commitment to zero-harm operations.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Story */}
      <AnimatedSection>
        <section className="py-24">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">Defensible Compliance. <br /><span className="text-[#E30613]">No Compromises.</span></h2>
                <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                  <p>
                    ALARP SAFETY PARTNERS was founded to bridge the gap between complex safety regulations and practical onsite operations. We believe that safety shouldn't be a hurdle to productivity, but its backbone.
                  </p>
                  <p>
                    Our mission is to establish a high-trust, authoritative partnership with every client, ensuring they are not just compliant, but leaders in operational safety.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-12 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
                <p className="text-slate-700 text-lg italic leading-relaxed">
                  "To empower industrial organizations with the technical mastery and defensible systems required to protect their people and reputation in high-stakes environments."
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection>
        <section className="bg-slate-50 py-24">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
              <div className="h-1 w-20 bg-[#E30613] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                  <h4 className="text-[#E30613] font-bold text-lg mb-4">{v.title}</h4>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <IndustriesSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <CTASection theme="dark" title="Partner with the Experts in Professional Safety." />
      </AnimatedSection>
    </div>
  );
}

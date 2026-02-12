import Link from 'next/link';

export default function Expertise() {
  const domains = [
    {
      title: "Tier 1 Construction",
      desc: "Comprehensive safety management for large-scale infrastructure and vertical developments. We focus on high-risk activities including working at heights, crane operations, and structural integrity.",
      highlight: "Regulatory Compliance: AS/NZS 4801"
    },
    {
      title: "Warehouse & Logistics",
      desc: "Optimizing traffic management, load safety, and automated system protocols. Our expertise reduces downtime while maintaining 100% compliance with storage and handling regulations.",
      highlight: "Specialization: Automated Racking Safety"
    },
    {
      title: "Major Hazard Facilities",
      desc: "Specialized risk assessment for gas, chemical, and industrial processing sites. We implement the ALARP principle to ensure process safety and emergency response readiness.",
      highlight: "Core Priority: Process Safety Management"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      <section className="bg-white pt-32 pb-16">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
             High-Risk <span className="peninsula-underline">Expertise</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed font-semibold text-gray-700">
            Where the stakes are highest, ALARP Safety Partners provides the authoritative technical oversight required to protect life and asset.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container grid md:grid-cols-3 gap-10">
          {domains.map((domain) => (
            <div key={domain.title} className="flex flex-col h-full bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <h2 className="text-2xl font-black mb-6 text-gray-900">{domain.title}</h2>
              <p className="text-gray-600 mb-10 leading-relaxed font-semibold flex-grow">{domain.desc}</p>
              <div className="pt-8 border-t border-gray-100">
                <span className="text-xs font-black uppercase tracking-widest text-red-600">{domain.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Advisory Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h4 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-6">Technical Advisory</h4>
              <h2 className="text-4xl font-black mb-10 leading-tight">
                "ALARP is the preferred provider for our high-hazard processing sites. Their <span className="peninsula-underline">technical mastery</span> is unmatched."
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gray-900" />
                <p className="font-black uppercase tracking-widest text-sm text-gray-900">Industrial Director, Global Chemical Corp</p>
              </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 relative group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-6 text-gray-900">Technical Response</h3>
              <p className="mb-10 text-gray-700 leading-relaxed font-semibold">For this major hazard facility, we implemented a full-scale safety audit resulting in a 40% reduction in high-risk incidents within the first 12 months.</p>
              <Link href="/contact" className="text-red-600 font-black uppercase tracking-widest text-xs hover:gap-4 flex items-center gap-2 transition-all">Request Case Study Specification →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="bg-red-600 py-24">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">SECURE YOUR PERIMETER</h2>
          <Link href="/contact" className="bg-white text-red-600 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-2xl text-lg inline-block">Engage Senior Consultant</Link>
        </div>
      </section>
    </div>
  );
}

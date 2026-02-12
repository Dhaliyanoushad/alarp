export default function Services() {
  const serviceCategories = [
    {
      title: "Systems & Compliance",
      services: [
        { name: "HSEMS Implementation", desc: "Developing and setting Health, Safety, and Environmental Management Systems." },
        { name: "Legal Compliance", desc: "Ensuring businesses meet all statutory health and safety laws." },
        { name: "Procedure Reviews", desc: "Auditing and updating existing safety protocols." }
      ]
    },
    {
      title: "Onsite Operations",
      services: [
        { name: "Workplace Inspections", desc: "Physical audits to identify and mitigate hazards." },
        { name: "Contractor Management", desc: "Vetting and monitoring third-party safety performance." },
        { name: "Incident Investigation", desc: "Conducting root-cause analysis for workplace events." }
      ]
    },
    {
      title: "Documentation & Training",
      services: [
        { name: "Staff Inductions & Training", desc: "Onboarding and ongoing safety education." },
        { name: "SWI Development", desc: "Writing Safe Work Instructions for specific tasks." },
        { name: "Toolbox Talks", desc: "Developing short, high-impact team safety briefings." }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      <section className="bg-white pt-32 pb-16">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Our <span className="peninsula-underline">Services</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed font-semibold text-gray-700">
            Highly categorized HSE management services designed to ensure legal compliance and operational excellence in high-risk environments.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container space-y-32">
          {serviceCategories.map((category, idx) => (
            <div key={category.title}>
              <div className="flex items-center gap-6 mb-16">
                <span className="text-6xl font-black text-red-600/20">0{idx + 1}</span>
                <h2 className="text-4xl font-black text-gray-900">{category.title}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                {category.services.map((service) => (
                  <div key={service.name} className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                    <h3 className="font-bold text-xl mb-4 text-red-600">{service.name}</h3>
                    <p className="text-gray-600 leading-relaxed font-semibold">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Process Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="container">
          <div className="text-center mb-20 text-gray-900">
            <h2 className="text-5xl font-black mb-6">Our <span className="peninsula-underline">Methodology</span></h2>
            <p className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">Phased Integration & Verification</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Gap Analysis", desc: "Technical audit of current HSEMS against statutory requirements." },
              { step: "02", title: "System Design", desc: "Engineering tailored protocols for high-risk onsite operations." },
              { step: "03", title: "Implementation", desc: "Deployment of systems with staff technical inductions." },
              { step: "04", title: "Monitoring", desc: "Ongoing verification and legal compliance adjustments." }
            ].map((phase, idx) => (
              <div key={phase.step} className="relative group text-center md:text-left">
                <div className="text-7xl font-black text-red-600/10 mb-6 group-hover:text-red-600 transition-colors">{phase.step}</div>
                <h4 className="font-black text-xl mb-4 text-gray-900">{phase.title}</h4>
                <p className="text-gray-600 leading-relaxed font-semibold">{phase.desc}</p>
                {idx !== 3 && (
                   <div className="hidden md:block absolute top-[15%] -right-6 w-12 h-0.5 bg-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-red-600 py-24">
        <div className="container text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Need a Custom Safety Solution?</h2>
          <p className="mb-12 max-w-2xl mx-auto font-semibold text-xl opacity-90">We tailor our HSE systems to the specific requirements of your industrial or construction site.</p>
          <a href="/contact" className="bg-white text-red-600 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-2xl text-lg">Request a Technical Audit</a>
        </div>
      </section>
    </div>
  );
}

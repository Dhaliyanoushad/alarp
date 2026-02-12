import Link from 'next/link';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* Support Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-red-600/5 rounded-3xl group-hover:-inset-6 transition-all duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=2070" 
                alt="Safe Workplace" 
                className="relative rounded-2xl shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
            <div className="text-gray-900">
              <h2 className="text-5xl font-black mb-10 leading-tight">
                How ALARP <span className="peninsula-underline">supports</span> <br /> <span className="peninsula-underline">your business</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-semibold">
                For a technical baseline of "As Low As Reasonably Practicable", you have unlimited 24/7 access to senior safety consultants for your most critical onsite decisions.
              </p>
              <p className="text-md text-gray-600 mb-10 leading-relaxed font-medium">
                We create tailored HSEMS, gap analyses, and statutory audits that ensure your systems are not just safe—they are legally defensible and operationally viable. From Tier 1 construction to major hazard facilities, our expert advisory protects your people and your reputation.
              </p>
              <div className="space-y-6">
                 {[
                   "Unlimited 24/7 technical advisory support",
                   "Industry-specific compliance frameworks",
                   "Rigorous third-party validation & verification",
                   "Global safety standards integration"
                 ].map(item => (
                   <div key={item} className="flex gap-4 items-center font-bold text-gray-800">
                     <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                     {item}
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Services Section */}
      <section className="bg-gray-50 py-32">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">
              Tailored services for <br /> <span className="peninsula-underline text-red-600">high-risk industries</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Construction", desc: "Specialized safety protocols for Tier 1 builds.", icon: "🏗️" },
              { title: "Warehousing", desc: "Logistics and automated system compliance.", icon: "📦" },
              { title: "Major Hazard", desc: "Defensible engineering for MHF sites.", icon: "⚠️" }
            ].map((industry) => (
              <div key={industry.title} className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform block">{industry.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{industry.title}</h3>
                <p className="text-gray-600 font-medium mb-8 leading-relaxed">{industry.desc}</p>
                <Link href="/services" className="text-red-600 font-black flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                  Discover Expertise →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-32 border-t border-gray-100">
        <div className="container">
           <div className="text-center mb-20 text-gray-900">
              <h2 className="text-5xl font-black mb-6">
                <span className="peninsula-underline">Helping people like you</span> <br /> for over 15 years
              </h2>
           </div>
           <div className="grid md:grid-cols-3 gap-10">
              {[
                { name: "John Doe", role: "Safety Director", quote: "ALARP's technical mastery is unmatched in the industry." },
                { name: "Jane Smith", role: "Operations Lead", quote: "The 24/7 advisory layer changed how we approach high-risk builds." },
                { name: "Mike Ross", role: "MHF Manager", quote: "Defensible compliance that actually works for onsite operations." }
              ].map(test => (
                <div key={test.name} className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                   <p className="text-lg font-bold text-gray-800 mb-8 italic">"{test.quote}"</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full" />
                      <div>
                         <p className="font-black text-sm">{test.name}</p>
                         <p className="text-xs text-gray-500 uppercase tracking-widest">{test.role}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}

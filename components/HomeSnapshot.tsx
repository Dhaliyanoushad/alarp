import Link from 'next/link';

export default function HomeSnapshot() {
  const industries = [
    "Construction",
    "Warehousing",
    "Major Hazard Facilities",
    "Logistics"
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Industrial Image */}
          <div className="lg:w-1/2 relative group">
            <div className="relative bg-white p-3 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-[1.01]">
              <img 
                src="https://i.pinimg.com/736x/84/66/57/8466576e9f04f0a5a3c451bd70fe6f8c.jpg" 
                alt="SFAIRP SAFETY PARTNERS Onsite"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] mb-8">
              Reliable Safety Solutions <br className="hidden sm:block" />
              <span className="relative inline-block">
                supports your
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#E30613" strokeWidth="3" fill="transparent" />
                </svg>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                business
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 10, 50 5 T 100 5" stroke="#E30613" strokeWidth="3" fill="transparent" />
                </svg>
              </span>
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-10">
              <p className="font-semibold text-slate-900">
                SFAIRP SAFETY PARTNERS is a professional safety consultancy delivering practical, compliant, and high-impact HSE solutions.
              </p>
              <p>
                We specialize in protecting high-stakes operations across construction, warehousing, logistics, and major hazard facilities. Our mission is to ensure your business remains compliant and your people stay safe.
              </p>
            </div>

            {/* Target Industries */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
               {industries.map(industry => (
                 <div key={industry} className="flex gap-3 items-center font-bold text-slate-800">
                   <div className="w-5 h-5 bg-[#E30613] rounded-full flex items-center justify-center text-white text-[10px] shrink-0">✓</div>
                   <span className="text-sm leading-tight">{industry}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-5">
              <Link 
                href="/contact"
                className="bg-[#E30613] hover:bg-[#c40510] text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg"
              >
                Request a Safety Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

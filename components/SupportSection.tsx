import Link from 'next/link';

export default function SupportSection() {
  return (
    <section className="bg-[#F0F5FA] py-24">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image with border and shadow */}
          <div className="lg:w-1/2 relative group">
            <div className="relative bg-white p-3 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-[1.01]">
              <img 
                src="https://i.pinimg.com/736x/84/66/57/8466576e9f04f0a5a3c451bd70fe6f8c.jpg" 
                alt="Safe Workplace"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002D4B] leading-tight mb-8">
              How SFAIRP <span className="relative inline-block">
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

            <div className="space-y-6 text-[#1d2d3d] text-lg leading-relaxed mb-10">
              <p className="font-semibold">
                For a technical baseline of "As Low As Reasonably Practicable", you have unlimited 24/7 access to senior safety consultants for your most critical onsite decisions.
              </p>
              <p className="text-gray-600">
                We create tailored HSEMS, gap analyses, and statutory audits that ensure your systems are not just safe—they are legally defensible and operationally viable. From Tier 1 construction to major hazard facilities, our expert advisory protects your people and your reputation.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
               {[
                 "Unlimited 24/7 technical advisory support",
                 "Industry-specific compliance frameworks",
                 "Rigorous third-party validation & verification",
                 "Global safety standards integration"
               ].map(item => (
                 <div key={item} className="flex gap-3 items-center font-bold text-[#002D4B]">
                   <div className="w-5 h-5 bg-[#E30613] rounded-full flex items-center justify-center text-white text-[10px] shrink-0">✓</div>
                   <span className="text-sm leading-tight">{item}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-5">
              <Link 
                href="tel:1300761935"
                className="bg-[#3D5ADA] hover:bg-[#2F47B8] text-white px-8 py-3.5 rounded-full font-bold text-center flex flex-col justify-center min-w-[220px] transition-colors"
              >
                <span className="text-xs opacity-90 mb-0.5 uppercase tracking-wider">Call now</span>
                <span className="text-lg leading-none">0449 853 255</span>
              </Link>
              
              <button 
                className="border-[1.5px] border-[#3D5ADA] text-[#3D5ADA] hover:bg-[#3D5ADA]/5 px-8 py-3.5 rounded-full font-bold text-lg min-w-[220px] transition-all flex items-center justify-center"
              >
                Find the right help for you
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

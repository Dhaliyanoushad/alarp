import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[85vh] sm:h-[90vh] flex items-center bg-white overflow-hidden pt-20 sm:pt-24 font-sans">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/image/safety.png"
          alt="Industrial Safety Site"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.15] mb-6 md:mb-8">
            SFAIRP Safety <br />
            Partners
          </h1>
          
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-snug mb-8 md:mb-12 opacity-95">
            Professional HSE consultancy delivering compliance, <br className="hidden md:block" />
            risk management, and high-risk safety solutions
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-4 xs:gap-5">
            <Link 
              href="/contact"
              className="bg-[#E30613] hover:bg-[#c40510] text-white px-6 py-3.5 xs:px-8 xs:py-4 rounded-full font-bold text-base xs:text-lg transition-all flex items-center justify-center gap-2"
            >
              Book a Consultation
            </Link>
            
            <Link 
              href="/contact"
              className="border-2 border-white/60 hover:border-white text-white px-6 py-3.5 xs:px-10 xs:py-4 rounded-full font-bold text-base xs:text-lg transition-all backdrop-blur-sm flex items-center justify-center text-center"
            >
              Request a Safety Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

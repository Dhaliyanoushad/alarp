import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center bg-white overflow-hidden pt-24">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/43/f3/c8/43f3c87cfc2bdfd0b8579babffe4e811.jpg')] bg-cover bg-center" 
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            Peninsula HR and <br />
            Work Health & Safety
          </h1>
          
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-12 opacity-95">
            Part of the Award-winning Peninsula Group, <br className="hidden md:block" />
            providing expert HR and WHS advice 24/7
          </p>

          <div className="flex flex-wrap gap-5">
            <Link 
              href="tel:1300761935"
              className="bg-[#E30613] hover:bg-[#c40510] text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2"
            >
              Call now 1300 761 935
            </Link>
            
            <button 
              className="border-2 border-white/60 hover:border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TrustSection() {
  return (
    <section className="bg-slate-900 py-20 border-y border-slate-800">
      <div className="max-w-[1600px] mx-auto px-8 text-center">
        <h2 className="text-white/40 text-sm font-bold uppercase tracking-[0.3em] mb-12">
          Trusted. Certified. Compliant.
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Mock Logos - Representative of ISO/Certifications */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center font-black text-xl text-white">ISO</div>
            <span className="text-white text-[10px] font-bold">9001:2015</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 border-4 border-white rounded-md flex items-center justify-center font-black text-xl text-white">HSE</div>
            <span className="text-white text-[10px] font-bold">SYSTEMS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 border-4 border-white rounded-tr-3xl rounded-bl-3xl flex items-center justify-center font-black text-xl text-white">AS</div>
            <span className="text-white text-[10px] font-bold">4801</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center font-black text-xs text-white p-2 text-center leading-none">SAFETY AUDIT</div>
            <span className="text-white text-[10px] font-bold">CERTIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

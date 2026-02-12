export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      <section className="bg-white pt-32 pb-16">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Contact <span className="peninsula-underline">ALARP</span>
          </h1>
          <p className="max-w-3xl text-xl font-semibold leading-relaxed text-gray-700">
            Connect with our lead technical consultants to discuss site audits, global system implementations, or specialized hazard training.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-32">
        <div className="container grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-black mb-12">Global Channels</h2>
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-2">Technical Helpline</h4>
                  <p className="text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors">1300 761 935</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-2">Technical Inquiry</h4>
                  <p className="text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors">contact@alarpsafety.com</p>
                </div>
              </div>

               <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-2">Headquarters</h4>
                  <p className="text-lg font-black text-gray-900">72 Industrial Way, Melbourne, VIC 3000</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-12 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:text-red-600 transition-colors">
                 <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
               </div>
               <h3 className="text-2xl font-black mb-4">Global Partnerships</h3>
               <p className="text-gray-600 max-w-sm leading-relaxed font-semibold">We provide technical safety consultation for multi-national hazard facilities and Tier 1 logistics networks worldwide.</p>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100 relative text-gray-900">
            <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-tighter text-gray-900">Advisory Request</h2>
            <form className="space-y-6">
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="bg-gray-50 border border-gray-200 p-5 rounded-xl text-sm w-full outline-none focus:border-red-600 transition-colors font-semibold" required />
                <input type="text" placeholder="Organization" className="bg-gray-50 border border-gray-200 p-5 rounded-xl text-sm w-full outline-none focus:border-red-600 transition-colors font-semibold" required />
                <input type="email" placeholder="Professional Email" className="bg-gray-50 border border-gray-200 p-5 rounded-xl text-sm w-full outline-none focus:border-red-600 transition-colors font-semibold" required />
                <select className="bg-gray-50 border border-gray-200 p-5 rounded-xl text-sm w-full outline-none focus:border-red-600 transition-colors font-semibold text-gray-500" required>
                   <option value="">Primary Industry</option>
                   <option value="construction">Construction (Tier 1)</option>
                   <option value="warehousing">Warehousing & Logistics</option>
                   <option value="hazard">Major Hazard Facility</option>
                </select>
                <textarea placeholder="Technical Requirements / Brief" rows={5} className="bg-gray-50 border border-gray-200 p-5 rounded-xl text-sm w-full outline-none focus:border-red-600 transition-colors font-semibold" required></textarea>
              </div>
              <button className="bg-red-600 hover:bg-gray-900 text-white w-full py-6 rounded-full font-black uppercase transition-all shadow-xl tracking-widest text-sm">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

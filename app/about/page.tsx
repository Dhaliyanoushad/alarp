export default function About() {
  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      <section className="bg-white pt-32 pb-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">Technical Excellence</h4>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Our <span className="peninsula-underline">Heritage</span>
          </h1>
          <p className="max-w-3xl text-xl font-semibold leading-relaxed text-gray-700">
            Since our inception, ALARP Safety Partners has been the silent engine behind some of the world's most complex industrial safety frameworks.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-24 items-center">
             <div className="order-2 md:order-1">
                <h2 className="text-4xl font-black mb-8 leading-tight">Specialists in <span className="peninsula-underline">safety culture</span></h2>
                <p className="text-lg text-gray-700 mb-6 font-semibold leading-relaxed">
                   ALARP stands for "As Low As Reasonably Practicable". This technical baseline is at the heart of everything we do.
                </p>
                <p className="text-md text-gray-600 mb-10 leading-relaxed font-medium">
                   We provide 24/7 unlimited access to senior safety advice for our clients, ensuring that critical onsite decisions are always backed by technical mastery. Our team of specialists comes from high-stakes backgrounds in construction, major hazard facilities, and industrial operations.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div>
                      <div className="text-4xl font-black text-red-600 mb-2">15+</div>
                      <div className="text-xs uppercase font-bold tracking-widest text-gray-500">Years Experience</div>
                   </div>
                   <div>
                      <div className="text-4xl font-black text-red-600 mb-2">100%</div>
                      <div className="text-xs uppercase font-bold tracking-widest text-gray-500">Compliance Rate</div>
                   </div>
                </div>
             </div>
             <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-red-600/5 rounded-3xl group-hover:-inset-6 transition-all duration-500" />
                <img 
                   src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
                   alt="Industrial Heritage" 
                   className="relative rounded-2xl shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-500 grayscale opacity-80" 
                />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

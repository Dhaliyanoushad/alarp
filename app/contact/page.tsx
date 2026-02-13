import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#F0F5FA]">
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Left Column: Info */}
            <AnimatedSection className="lg:w-1/3">
              <div>
                <h1 className="text-slate-900 text-4xl md:text-6xl font-black mb-8 leading-tight">Connect with a <br /><span className="text-[#E30613]">Consultant</span></h1>
                <p className="text-slate-600 text-base md:text-lg font-medium mb-12 leading-relaxed">
                  Reach out to discuss your specific safety challenges. Whether it's a gap analysis or full HSEMS implementation, we're ready to deploy.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 shrink-0 bg-white rounded-full flex items-center justify-center text-[#E30613] shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us 24/7</p>
                      <p className="text-lg md:text-xl font-bold text-slate-900">1300 761 935</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 shrink-0 bg-white rounded-full flex items-center justify-center text-[#E30613] shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Inquiry</p>
                      <p className="text-lg md:text-xl font-bold text-slate-900">advisory@alarpsafety.com.au</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 shrink-0 bg-white rounded-full flex items-center justify-center text-[#E30613] shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">National Headquarters</p>
                      <p className="text-lg md:text-xl font-bold text-slate-900">Sydney / Melbourne / Brisbane</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-16 border-t border-slate-200">
                  <div className="flex gap-6">
                    <Link 
                      href="tel:1300761935" 
                      className="bg-white border-2 border-slate-200 hover:border-[#E30613] p-6 rounded-2xl flex-1 text-center transition-all"
                    >
                      <p className="font-bold text-slate-900">Book a Consultation</p>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column: Form */}
            <AnimatedSection className="lg:w-2/3" delay={0.2}>
              <ContactForm />
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <AnimatedSection>
        <section className="bg-white py-20 text-center">
          <div className="max-w-2xl mx-auto px-8">
            <p className="text-slate-800 text-2xl font-bold italic mb-6">
              "Your reputation is built on the safety of your people. We help you protect both."
            </p>
            <div className="h-1 w-12 bg-[#E30613] mx-auto"></div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}

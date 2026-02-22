import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F0F5FA]">
      <section className="py-12 sm:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Info */}
            <AnimatedSection className="lg:w-1/3">
              <div>
                <h1 className="text-slate-900 text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-8 leading-tight">Connect with a <br /><span className="text-[#E30613]">Consultant</span></h1>
                <p className="text-slate-600 text-sm md:text-lg font-medium mb-8 md:mb-12 leading-relaxed">
                  Reach out to discuss your specific safety challenges. Whether it's a gap analysis or full HSEMS implementation, we're ready to deploy.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4 sm:gap-6 items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-white rounded-full flex items-center justify-center text-[#E30613] shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us 24/7</p>
                      <a href="tel:0449853255" className="text-[13px] xs:text-base sm:text-lg md:text-xl font-bold text-slate-900 truncate sm:whitespace-normal block hover:text-[#E30613] transition-colors">0449 853 255</a>
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6 items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-white rounded-full flex items-center justify-center text-[#E30613] shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Inquiry</p>
                      <a href="mailto:support@sfairpsafetypartners.com" className="text-[13px] xs:text-base sm:text-lg md:text-xl font-bold text-slate-900 sm:whitespace-normal block hover:text-[#E30613] transition-colors">support@sfairpsafetypartners.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6 items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-white rounded-full flex items-center justify-center text-[#E30613] shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Locations</p>
                      <p className="text-[13px] xs:text-base sm:text-lg md:text-xl font-bold text-slate-900 truncate sm:whitespace-normal">Sydney / Melbourne / Brisbane</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-slate-200">
                  <div className="flex gap-6">
                    <a 
                      href="tel:0449853255" 
                      className="bg-white border-2 border-slate-200 hover:border-[#E30613] p-4 sm:p-6 rounded-2xl flex-1 text-center transition-all"
                    >
                      <p className="font-bold text-slate-900">Book a Consultation</p>
                    </a>
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
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-slate-800 text-lg sm:text-2xl font-bold italic mb-6 leading-snug">
              "Your reputation is built on the safety of your people. We help you protect both."
            </p>
            <div className="h-1 w-12 bg-[#E30613] mx-auto"></div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

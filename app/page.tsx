import Hero from '@/components/Hero';
import HomeSnapshot from '@/components/HomeSnapshot';
import ServicesGrid from '@/components/ServicesGrid';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <HomeSnapshot />
      <ServicesGrid />
      <TrustSection />
      <CTASection />
    </div>
  );
}


import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Technologies from '@/components/sections/Technologies';
import Contact from '@/components/sections/Contact';
import Referances from '@/components/sections/Referances';
import HowWeWork from '@/components/sections/HowWeWork';

export default function Home() {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden antialiased'>
      <Hero />
      <Services />
      <Technologies />
      <HowWeWork />
      <Referances />
      <Contact />
    </div>
  );
}

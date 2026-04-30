import React from 'react';
import AboutHero from '@/components/sections/about/AboutHero';
import OurMission from '@/components/sections/about/OurMission';
import CompanyStats from '@/components/sections/about/CompanyStats';
import OurValues from '@/components/sections/about/OurValues';

const AboutPage = () => {
  return (
     <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden antialiased'>
      <AboutHero />
      <OurMission />
      <CompanyStats />
      <OurValues />
    </div>
  );
};

export default AboutPage;

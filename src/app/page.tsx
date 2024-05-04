// pages/index.tsx
"use client";
import React from 'react';
import { BackgroundBeams } from './components/ui/background-beams';

import ImageSlider from './components/ImageSlider';
import Services from './components/Services';
import HeroSection from './components/HeroSection';


const Home: React.FC = () => {
  return (
    <main className="min-h-[200vh]">
      <BackgroundBeams />

      <div className="flex w-full flex-col items-center ">
        <HeroSection />
        <p className='mt-[5%] mb-[1%]  text-xl'>Our Partners</p>
      </div>
      <div className='w-[80vw] mx-auto overflow-hidden flex '>
        <ImageSlider />
      </div>
      <Services />
    </main>
  );
};

export default Home;

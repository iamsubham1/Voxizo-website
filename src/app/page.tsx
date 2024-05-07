// pages/index.tsx
"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";

import ImageSlider from "./components/ImageSlider/ImageSlider";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionPageInfo from "./components/SectionPage/SectionPageInfo/SectionPageInfo";
import Services from "./components/Services";

const Home: React.FC = () => {
  return (
    <main className="min-h-[200vh]">
      <BackgroundBeams />

      <div className="flex w-full flex-col items-center ">
        <HeroSection />
      </div>
      <div className='w-[80vw] mx-auto overflow-hidden flex '>
        <ImageSlider />
      </div>
      <Services />
    </main>
  );
};

export default Home;

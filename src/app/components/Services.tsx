import React from 'react'
import { WobbleCard } from '../components/ui/wobble-card';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-[10%] p-[5%] bg-[#00000000]" id='service'>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-black gradient-border "
        className=" text-[#ffffff] bg-black cursor-pointer  "
      >

        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]  ">
            Grow Your <span className=''>Business</span>
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#bebebe]">
            Want to increase your business reach ? We offer various social media marketing campaigns
          </p>
          <button className='mt-5 shine-btn text-[.8em]'>Start Now !</button>
        </div>

      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black gradient-border " className="  bg-black cursor-pointer ">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white   ">
          Design Your <span className=''>Logo</span>
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6  text-[#bebebe] ">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
        <button className='mt-5 shine-btn text-[.8em]'>Get It Now !</button>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-black gradient " className='cursor-pointer bg-black '>
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art <span className='text-gradient'>Website Development</span>
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#bebebe]">
            With over 100,000 monthly users, Voxizo is the most
            trusted for building websites, Our Clients Say !
          </p>
          <button className='mt-5 shine-btn text-[.8em]'>Know More !</button>
        </div>

      </WobbleCard>



    </div>
  )
}

export default Services
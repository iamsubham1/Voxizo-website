// pages/index.tsx

import React from 'react';
import { BackgroundBeams } from './components/ui/background-beams';
import Navbar from './components/Navbar';



const Home: React.FC = () => {
  return (
    <main className="flex min-h-[200vh] flex-col items-center justify-between ">
      <BackgroundBeams />
      <Navbar />
      <div className='text-[#c43eb0]'><h1>tarun</h1></div>
    </main>
  );
};

export default Home;

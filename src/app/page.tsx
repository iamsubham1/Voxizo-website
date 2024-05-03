// pages/index.tsx

import React from 'react';
import { BackgroundBeams } from './components/ui/background-beams';



const Home: React.FC = () => {
  return (
    <main className="min-h-[200vh]">
  <BackgroundBeams />
      

<div className="continer min-h-[100vh] flex w-full flex-col items-center justify-center">

<h1>Hero-Section</h1>

</div>
    </main>
  );
};

export default Home;

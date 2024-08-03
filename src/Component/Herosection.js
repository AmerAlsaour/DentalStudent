import React from 'react';
import Hero from './Hero';
import './Style.css'
import Buttonlight from './Buttonlight';
import Buttondark from './Buttondark';
function Herosection() {
  return (
    <div className='flex flex-row bg-white mt-9'>

      <div className='w-[50%] bg-white flex items-center justify-center'>
        {/* ===== */}
       <div className='flex flex-col'>
        <div className='bg-white mb-14'>
            <p className='text-4xl font-bold mb-2'>Welcome to</p>
            <p className='text-4xl font-bold text-sky-300'>Smile Bridge</p>
        </div>
        {/* ===== */}
        <div className='bg-white mb-14'>
            <p className='text-2xl'>The bridge between you </p>
            <p className='text-2xl'>and the best dental students </p>
        </div>
        {/* ===== */}
        <div className='flex flex-row'>
        <span className='mr-4'><Buttondark/></span>
        <span className=''><Buttonlight/></span>
        </div>
       
        </div>
      </div>
      {/* ==========50%========== */}
      <div className='w-[50%]'>
        <Hero />
      </div>
    </div>
  );
}
export default Herosection;
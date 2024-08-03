import React from 'react';
import './Style.css'
import Abouthero from './Abouthero';
import pic from './About1.png'
import pic2 from './About2.png'
import { SiTicktick } from "react-icons/si";
function About() {
  return (
    <div className="container mx-auto px-4 bg-white py-16 text-center margintop10">
      <h2 className="text-3xl font-bold mb-4">About us</h2>
      <div className="">
        <div className="flex justify-around items-center flexclomn ">
          <div className='mw50'>
            <img
              className=" object-cover w-3/5"
              src={pic}
              alt="About Hero Image"
            />
          </div>
          <div className='  flex flex-col  items-start'>
            <p className="text-3xl font-bold mb-2 text-black">Join us as a dentist</p>
            <p className="text-black mb-4 items-start font-bold text-2xl">To have a valuable scientific experience</p>

            <div className='flex flex-row mb-3'>
              <div className='text-sky-300 text-xl flex mr-4'><SiTicktick /></div>
              <p className='text-xl'>Find your next patient.</p>
            </div>
            {/* ================================== */}

            <div className='flex flex-row mb-3'>
              <div className='text-sky-300 text-xl flex mr-4'><SiTicktick /></div>
              <p className='text-xl'>Contact easily</p>
            </div>
            {/* ====================================== */}

            <div className='flex flex-row mb-3'>
              <div className='text-sky-300 text-xl flex mr-4'><SiTicktick /></div>
              <p className='text-xl'>Organize your appointments</p>
            </div>
            {/* ======================================= */}

            <button className="font-bold text-sky-300 border-solid border-sky-300 border-2 py-3 px-10 rounded-xl hover:bg-sky-300 hover:text-white">Join Now</button>
          </div>
        </div>
        <div className='w-full bg-white flex flex-row mt-24'>

          <div className='w-[50%] flex  items-center justify-center bg-white'>
            <div className='bg-white w-96 '>
              <div className='flex flex-col items-start '>
                <p className='text-black font-bold text-3xl mb-4'>Join us as a client</p>
                <p className='text-black font-bold text-2xl mb-5'>To have a free dental care</p>
              </div>
              {/* ====== */}
              <div className='flex flex-row mb-3'>
                <div className='text-sky-300 text-xl flex mr-0'><SiTicktick /></div>
                <p className='text-xl'>Find well trained students under the supervision of professional doctors</p>
              </div>
              {/* =================== */}
              <div className='flex flex-row mb-3'>
              <div className='text-sky-300 text-xl flex mr-5'><SiTicktick /></div>
              <p className='text-xl'>Book an appointment</p>
            </div>
            {/* ====================== */}
            <div className='flex flex-row mb-5'>
              <div className='text-sky-300 text-xl flex mr-5'><SiTicktick /></div>
              <p className='text-xl'>Contact easily</p>
            </div>
            {/* ===== */}
            <div className='flex flex-col items-start' >
            <button className="font-bold text-sky-300 border-solid border-sky-300 border-2 py-3 px-10 rounded-xl hover:bg-sky-300 hover:text-white">Join Now</button>
            </div>
            </div>
          </div>


          {/* ============================================= */}
          <div className='w-[50%] flex items-center justify-center'><img
            className="w-96 mb-6 "
            src={pic2}
            alt="About Hero Image" />
          </div>
        </div>










      </div>
    </div>
  );
}

export default About;
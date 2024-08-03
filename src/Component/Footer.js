import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
    return (
        <div className="bg-gray-200 py-6 ">
            <div className="flex flex-col items-center">
                <div className="text-xl font-bold mb-2 mt-5">
                    <span >SMILE </span><span>BRIDGE</span>
                </div>
                <div className="flex space-x-4 mb-6 w-36 h-[2px] bg-black ">
                </div>

                <div className='flex flex-row space-x-7 mb-16'>
                    <div className='text-2xl'><FaInstagram/></div>
                    <div className='text-2xl'><RiFacebookBoxLine/></div>
                    <div className='text-2xl'><BsTwitterX/></div>
                </div>

                {/* ----------------------------------------- */}


            </div>
            <div className="flex justify-center space-x-56">
                <div className="flex items-center space-x-2">
                       <div className='text-3xl text-[#55CDF1]'><IoMdCall /></div>
                    <span className="text-xl">+963-912-345-678</span>
                </div>
                <div className="flex items-center space-x-2">
                <div className='text-3xl text-[#55CDF1]'><FiMail /></div>
                    <span className="text-xl">smilebridge@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                <div className='text-3xl text-[#55CDF1]'><FaLocationDot /></div>
                    <span className="text-xl">Damascus Syria</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;

import React, { useRef } from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import './../Component/Style.css';

function Market() {
  const scrollContainerRef = useRef(null);

  const services = [
    {
      imgSrc: '/images 1.png',
      alt: 'tuth',
      title: 'Product Name',
      description: 'some text some text some \n some text some text . ',

    },
    {
      imgSrc: '/images 2.png',
      alt: 'alhawsha',
      title: 'Product Name',
      description: 'some text some text some \n some text some text .',
    },
    {
      imgSrc: '/images 3.png',
      alt: 'alhawsha',
      title: 'Product Name',
      description: 'some text some text some \n some text some text .',
    },
    {
      imgSrc: '/tools-removebg-preview.png',
      alt: 'alhawsha',
      title: 'Product Name',
      description: 'some text some text some \n some text some text .',
    },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -310, // Adjust the value according to your card width
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 310, // Adjust the value according to your card width
      behavior: 'smooth',
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Market</h2>
      <p className="text-2xl text-gray-600 text-center mb-16">
      Explore our marketplace for essential dental equipment and supplies.
      </p>
      <div className="relative flex justify-center items-center">
        <button onClick={scrollLeft} className="absolute left-0 text-2xl w-16 h-16  bg-white rounded-full shadow-md z-10 flex items-center justify-center">
          <MdOutlineArrowBackIos />
        </button>
        <div
          className="flex overflow-x-scroll space-x-4 no-scrollbar px-10 pb-5 "
          ref={scrollContainerRef}
        >
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl w-80 flex-shrink-0">
              <div className="flex justify-center rounded-t-3xl items-center mb-4 w-80 h-[326px] bg-white">
                <img src={service.imgSrc} alt={service.alt} className="w-64" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="text-gray-600">
                  <p>{service.description}</p>
                </div>
               <div className='flex items-center justify-center bg-[#55CDF1] p-2 rounded-full mt-2 '>Order now</div>


              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 text-2xl w-16 h-16 shadow-xl bg-white rounded-full shadow-md z-10 flex items-center justify-center">
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
}

export default Market;

import React from 'react';

const Greeting = ({ name, welcome, text}) => {
  return (
    <header className="relative flex mt-2 mb-5 rounded-xl bg-white h-44 shadow-lg">
      <div className='ml-28 mt-10 w-4/12'>
        <h1 className="text-3xl font-bold mb-5">{welcome}{name}!</h1>
        <p className="text-black text-lg">{text}</p>
        <img src={"/Greeting.png"} alt="Sam Alex" id="img1" className="absolute bg-red w-4/12 right-0 -top-5 " style={{height:"247px"}}/>
      </div>
    </header>
  );
};

export default Greeting;
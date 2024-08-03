import React from 'react'
import { useNavigate } from 'react-router-dom';
function Buttonlight() {
  const navigate = useNavigate();
  const handleClickSign = () => {
    navigate('Login', { replace: true }); // navigate to /another-page
  };
  return (
    <div className=" md:flex  items-center">
        <button className="bg-white  hover:text-white bgbluedenhover borderbluedent border-2 rounded-xl px-12 pr-12 blueden font-bold py-2  focus:outline-none focus:shadow-outline"
        onClick={handleClickSign} >
            Sign in
        </button>
    </div>
  )
}

export default Buttonlight

import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom';

function Buttondark() {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/community', { replace: true }); // navigate to /another-page
  };
  return (
    <div className=" md:flex  items-center">
        <button className=" bgblueden    borderbluedent border-2 rounded-xl px-12 pr-12 text-white font-bold py-2  focus:outline-none focus:shadow-outline"
        onClick={handleClickLogin} >
            Sign up
        </button>
    </div>
  )
}

export default Buttondark

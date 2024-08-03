import React, { useState } from 'react';
import './../../Component/Style.css';
import { useNavigate , Link } from 'react-router-dom';
import pic from  './../../Component/About1.png'
import pic2 from  './../../Component/About2.png'
function Community() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [radio1Checked, setRadio1Checked] = useState(false);
  const [radio2Checked, setRadio2Checked] = useState(false);
  const navigate = useNavigate();
  const handleRadio1Change = () => {
    setRadio1Checked(true);
    setRadio2Checked(false);
  };

  const handleRadio2Change = () => {
    setRadio1Checked(false);
    setRadio2Checked(true);
  };
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };
  const handleClickSign = () => {
    
    navigate(`/${selectedUser}`, { replace: true }); // navigate to /another-page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h1>
        <p className="text-gray-600 mb-8">Select the user type that represents you</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center  mb-4">
              <img
                className=" w-1/3 "
                src={pic}
                alt="About Hero Image"
              />
              <div>
                <h2 className="text-xl font-bold ">Dental Student</h2>
                <p className="text-gray-600 mb-4">Gain practical experience and advance your career in dentistry.</p>
                <input type='radio'
                    className={`rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ${selectedUser === 'dental-student'? 'bg-blue-700' : ''}`}
                    onClick={() => handleUserSelect('SignupDoctor')}
                    checked={radio1Checked}
                    onChange={handleRadio1Change}
                    />
                    <label className='ml-4'>I'm a Dental Student</label>
              </div>
            </div>
            </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
                <img
                    className="w-1/3 "
                    src={pic2}
                    alt="About Hero Image"
                />
                <div className=' w-2/3 flex flex-col  justify-center items-start'>
                    <h2 className="text-xl font-bold ">Client</h2>
                    <p className="text-gray-600 mb-4">Receive free dental care<br></br> from supervised dental<br></br> students.</p>
                    <div>
                        <input type='radio'
                        className={`rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ${selectedUser === 'dental-student'? 'bg-blue-700' : ''}`}
                        onClick={() => handleUserSelect('SignupClient')}
                        checked={radio2Checked}
                        onChange={handleRadio2Change}
                        />
                        <label className='ml-4'>I'm a Client</label>
                    </div>
                </div>
                </div>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <button className=' bgblueden rounded px-6 py-1  text-white mt-6 bluedenhover hover:bg-white borderbluedenthover' 
            onClick={handleClickSign} >Next</button>
            <Link to = '/login' className="mt-4 text-gray-600 text-xl">Already have an account?
            <span className='text-sky-500 hover:text-sky-300'> Login</span>  </Link>  
        </div>
      </div>
    </div>
  );
}

export default Community;
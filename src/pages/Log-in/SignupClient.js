import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';
import { useAuthContext } from '../../context/AuthContext';

function SignupClient() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const { loading, sign } = useSignUp();
  const { authUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sign(inputs);
    console.log('inputs', response);

    // Check if the response indicates a successful sign-up
    if (response) {
      // Navigate to the Client dashboard Home page
      navigate('/ClientdashboardHome');
    }
  };
  
  return (
    <div className='flex justify-around items-center flex-row-reverse flexclomn margintop1'>
      <div className='mw50 flex justify-center'>
        <img
          className=" w-1/2 "
          src={'./About1.png'}
          alt="About Hero Image"
        />
      </div>
      <div className="container  mt-10 ml-12 mw50 pl-9 flex justify-center flex-col items-start">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Sign up as a<span className='blueden'> Client</span> 
        </h1>
        <p className="text-center mb-10">
          Let's get you all set up so you can access your personal account.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="relative flex flex-col w-full">
              <label htmlFor="text" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
                First Name
              </label>
              <input
                type="text"
                id="text"
                value={inputs.firstName}
                onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First Name"
              />
            </div>
            <div className="relative flex flex-col w-full">
              <label htmlFor="text" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={inputs.lastName}
                onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative flex flex-col w-full">
              <label htmlFor="email" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="john.doe@gmail.com"
              />
            </div>
            <div className="relative flex flex-col w-full">
              <label htmlFor="phoneNumber" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={inputs.phone}
                onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="phoneNumber"
              />
            </div>
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="password" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="password  "
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="confirmPassword" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
          </button>
          <p className="text-center mt-1 ">
            Already have an account?{' '}
            <Link to="/login">Login</Link>
          </p>
        </form> 
      </div>
    </div>
  );
}

export default SignupClient;

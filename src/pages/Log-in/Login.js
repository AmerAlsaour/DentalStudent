import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { authUser, setAuthUser } = useContext(AuthContext); // Access authUser from AuthContext
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    console.log("hi")
    event.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
    console.log(res, 'res');
    if (res.ok) {
      const data = await res.json()
      localStorage.setItem('authUser', JSON.stringify(data))
      setAuthUser(data)
      console.log(data, 'data');
      if (data.role === 'client') {
        navigate('/ClientdashboardHome')
      } else {
        if (!data.services || !data.workDays) {
          navigate('/Dentalform')

        } else {
          navigate('/DoctordashboardHome')
        }
      }
    }
  }
  return (
    <div className="flex items-center justify-start min-h-screen bg-white flexclomn">
      <div className=" flex justify-start  w-full w100per">
        <img
          className=" w35pers h-screen w100per   "
          src={'./Heroleft.png'}
          alt="Hero Image"
        />
      </div>
      <div className=" flex justify-center items-center w-full">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md margintop1  ">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <p className="text-gray-600 text-center mb-6">
            Hello again! You've been missed
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label
                htmlFor="email"
                className="block text-gray-700  mb-2  bg-white absolute top-15 left-3 px-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6 relative mt-9">
              <label
                htmlFor="password"
                className="block text-gray-700 mb-2   bg-white absolute top-15 left-3 px-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-end justify-center flex-col">
              <button
                type="submit"
                className="bgblueden bgbluedenhover1 text-white font-bold w-full py-2  rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <a
                href="/Resetpass"
                className="inline-block align-baseline font-bold text-sm blueden bluedenhover1"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link
              to="/Community"
              className="blueden bluedenhover1"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
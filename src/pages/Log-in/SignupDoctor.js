import React, { useContext, useState } from "react";
import "./../../Component/Style.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
// import pic2 from  './../../Component/About2.png';
import "./../../Component/Style.css";

function SignupDoctor() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    location: "",
    birthDate: "",
  });
  const { authUser, setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    // console.log(email,password);
    event.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName:formData.firstName,
        lastName:formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        phone: formData.phoneNumber,
        role: "doctor",
        location: formData.location,
        birthDate: formData.birthDate,
      }),
    });
    console.log(res, "res");
    if (res.ok) {
      console.log(res.ok);
      const data = await res.json();
      console.log(data.token, "token");
      localStorage.setItem("authUser", JSON.stringify(data));
      // context
      setAuthUser(data);
      console.log(data, "data");
      
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-around items-center flex-row-reverse flexclomn margintop1">
      <div className="mw50 flex justify-center">
        <img className=" w-1/2 " src={"./About2.png"} alt="About Hero Image" />
      </div>
      <div className="container  mt-10 mw50 pl-9 flex justify-start flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Sign up as a <span className="blueden"> Dental Student</span>
        </h1>
        <p className="text-center mb-10 ml-20">
          Let's get you all set up so you can access your personal account.
        </p>
      
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="relative flex flex-col w-full">
              <label
                htmlFor="text"
                className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="relative flex flex-col w-full">
              <label
                htmlFor="text"
                className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="relative flex flex-col w-full">
              <label
                htmlFor="phoneNumber"
                className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="relative flex flex-col w-full">
            <label
              htmlFor="password"
              className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label
              htmlFor="confirmPassword"
              className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative flex flex-col w-full">
              <label
                htmlFor="text"
                className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="relative flex flex-col w-full">
              <label
                htmlFor="birthDate"
                className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2"
              >
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* <div className="w-1/2">
            <label htmlFor="birthDate" className="block mb-2">
              Birth Date
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div> */}
          </div>
          <button
            type="submit"
            className="bgblueden hover:bg-white bluedenhover borderbluedenthover text-white font-bold py-2 px-4 rounded-md"
          >
            Next
          </button>
          <p className="text-center mt-1 ">
            Already have an account?{" "}
            <a href="/Login" className="underline blueden">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupDoctor;

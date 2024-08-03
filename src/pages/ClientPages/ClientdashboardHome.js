import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Greeting from "../../Component/Greeting";
import { AuthContext } from "../../context/AuthContext";

function ClientdashboardHome() {
  const { authUser } = useContext(AuthContext); // Access authUser from AuthContext
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDentists, setFilteredDentists] = useState([]);
  const [dentists, setDentists] = useState([]);

  const services = [
    { name: "Orthodontics", image: "/Orthodontics.png" },
    { name: "Oral Hygiene", image: "/Oral Hygiene.png" },
    { name: "Cosmetic Dentistry", image: "/Cosmetic Dentistry.png" },
    { name: "Dental Treatment", image: "/Dental Treatment.png" },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(
      service.name === selectedService ? null : service.name
    );
  };

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor.firstName);
    setSelectedDoctorId(doctor._id); // Assuming the doctor object has an _id field
  };

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/doctors",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Debugging: Log the fetched data
        console.log("Fetched dentists:", data);

        // Ensure the data contains a 'doctors' array
        if (Array.isArray(data.doctors)) {
          setDentists(data.doctors);
        } else {
          console.error(
            "Fetched data does not contain a doctors array",
            data
          );
        }
      } catch (error) {
        console.error("There was an error fetching the dentists!", error);
      }
    };

    fetchDentists();
  }, []);

  useEffect(() => {
    const filtered = dentists.filter(
      (dentist) =>
        (searchQuery === "" ||
          dentist.firstName
            .toLowerCase()
            .startsWith(searchQuery.toLowerCase()) ||
          dentist.lastName
            .toLowerCase()
            .startsWith(searchQuery.toLowerCase())) &&
        (selectedService === null ||
          (dentist.services &&
            dentist.services.includes(selectedService)))
    );
    setFilteredDentists(filtered);
  }, [searchQuery, selectedService, dentists]);

  return (
    <div>
      <Greeting
        name={authUser.firstName}
        welcome={"Hello "}
        text={
          "Let’s help you book an appointment Choose a service to find dentist "
        }
      />
      <div className="p-2">
        <h2 className="text-2xl font-bold mb-2">Services</h2>
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className={`relative p-4 bg-white rounded-2xl shadow-lg text-center border-2 border-solid cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedService === service.name
                  ? "border-[#55CDF1] text-[#55CDF1]"
                  : "border-[#FFFFFF]"
              } `}
              onClick={() => handleServiceClick(service)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-42 mx-auto mb-2"
              />
              <p className="text-lg font-bold">{service.name}</p>
              {selectedService === service.name && (
                <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-[#55CDF1] rounded-2xl pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="flex items-center justify-between mb-6 w-full">
          <h2 className="text-2xl font-bold">Dentists</h2>
          <div className="relative flex items-center">
            <img
              src={"/img13.png"}
              alt="search icon"
              className="absolute left-2"
            />
            <input
              type="text"
              placeholder="Search for dentist"
              className="outline-none pl-10 placeholder:text-black border-[#F2F1FE] border-b-black border-2 border-solid w-60 bg-[#F2F1FE]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          {(searchQuery || selectedService
            ? filteredDentists
            : dentists
          ).map((dentist, index) => (
            <motion.div
              key={index}
              className="flex items-center mb-4 p-4 bg-white shadow-lg rounded-lg w-full transition-transform duration-500 transform hover:scale-102"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={dentist.profilePic}
                alt={dentist.fullName}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-bold">
                  Dr. {dentist.firstName + " " + dentist.lastName}
                </h3>
                <div className="flex items-center">
                  <img
                    src="/img5.png"
                    alt="location"
                    className="w-3 h-4 mr-2 inline-block"
                  />
                  <p className="text-gray-600 inline-block">
                    {dentist.location}
                  </p>
                </div>
                <p className="text-gray-600 inline-block">
                  Services:{" "}
                  {dentist.services ? dentist.services.join(", ") : ""}
                </p>
              </div>
              <Link
                to={`/ClientDashboardBookAppointment?doctorId=${encodeURIComponent(
                  dentist._id
                )}&doctorName=${encodeURIComponent(
                  dentist.firstName + " " + dentist.lastName
                )}&service=${encodeURIComponent(selectedService)}`}
                className="ml-auto"
                onClick={() => handleBookAppointment(dentist)}
              >
                <motion.button
                  className="bg-[#FFFFFF] text-[#55CDF1] border-[#55CDF1] border-solid border-2 transition-all duration-700 hover:bg-[#55CDF1] hover:text-[#FFFFFF] hover:border-[#55CDF1] px-4 py-2 rounded-3xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book an appointment
                </motion.button>
              </Link>{" "}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientdashboardHome;

import React, { useState,useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import Appointment from '../../Component/Appointment';
import { AuthContext } from "../../context/AuthContext";

function ClientdashboardAppointments() {
    const { authUser } = useContext(AuthContext); // Access authUser from AuthContext
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      const fetchAppointments = async () => {
          try {
              const response = await fetch('http://localhost:5000/api/appo/clientAppointment', {
                  credentials: 'include',
              });
  
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
  
              const data = await response.json();
  
              // Debugging: Log the fetched data
              console.log('Fetched Appointments:', data);
  
              // Ensure the data contains a 'clientAppointments' array
              if (Array.isArray(data.clientAppointments)) {
                // Sort appointments by createdAt
                const sortedAppointments = data.clientAppointments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setAppointments(sortedAppointments);
              } else {
                  console.error('Fetched data does not contain a clientAppointments array', data);
              }
          } catch (error) {
              console.error('There was an error fetching the appointments!', error);
          }
      };
  
      fetchAppointments();
  }, []);
  
        

    const handleDelete = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
    };

    return (
        <div>
            <div className="p-2">
                <h2 className="text-2xl font-bold mb-2">My Appointments</h2>
                <div className="overflow-x-auto">
                    <div className="min-w-full divide-y divide-gray-200">
                        <div className="grid grid-cols-6 gap-4 p-2 bg-gray-100 rounded-t-md mt-4">
                            <div></div>
                            <div className="text-left text-[#79747E] font-semibold">Name</div>
                            <div className="text-left text-[#79747E] font-semibold">Location</div>
                            <div className="text-left text-[#79747E] font-semibold">Date</div>
                            <div className="text-left text-[#79747E] font-semibold">Time</div>
                            <div className="text-left text-[#79747E] font-semibold">Status</div>
                            <div></div>
                        </div>
                        {appointments.map((appointment, index) => (
                            <motion.div
                                key={appointment.id}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Appointment
                                    profilePicture={appointment.profilePicture}
                                    name={appointment.doctorName}
                                    location={appointment.location}
                                    date={appointment.date}
                                    time={appointment.time}
                                    status={appointment.state}
                                    onDelete={() => handleDelete(appointment.id)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientdashboardAppointments;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Appointment from '../../Component/Appointment';
import Request from '../../Component/Request';

const DoctorDashboardAppointments = () => {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            profilePicture: '',
            name: 'John Doe',
            location: 'Damascus',
            date: '2023-07-04',
            time: '10:00 AM',
            status: 'Approved'
        },
        {
            id: 2,
            profilePicture: '',
            name: 'Jane Smith',
            location: 'Damascus',
            date: '2024-07-04',
            time: '2:00 PM',
            status: 'Pending'
        }
    ]);

    const [requests, setRequests] = useState([
        {
            id: 3,
            profilePicture: '',
            name: 'Eleanor Pena',
            location: 'Damascus, IL',
            date: '2024-07-04',
            time: '11:00 AM',
            service: 'Dental fillings',
            description: 'some text .. some text.. some text.. some text...'
        },
        {
            id: 4,
            profilePicture: '',
            name: 'Eleanor Pena',
            location: 'Chicago, IL',
            date: '2024-06-27',
            time: '11:00 AM',
            service: 'Dental fillings',
            description: 'some text .. some text.. some text.. some text...'
        }
    ]);

    const [selectedTab, setSelectedTab] = useState('appointments');

    const handleDelete = (id, type) => {
        if (type === 'appointments') {
            setAppointments(appointments.filter(appointment => appointment.id !== id));
        } else {
            setRequests(requests.filter(request => request.id !== id));
        }
    };

    return (
        <div className="p-4">
            <div className="flex space-x-4 mb-4">
                <span
                    className={`text-xl font-bold mb-2 cursor-pointer ${selectedTab === 'appointments' ? 'text-[#55CDF1]' : 'text-gray-500'}`}
                    onClick={() => setSelectedTab('appointments')}
                >
                    My Appointments
                </span>
                <span
                    className={`text-xl font-bold mb-2 cursor-pointer ${selectedTab === 'requests' ? 'text-[#55CDF1]' : 'text-gray-500'}`}
                    onClick={() => setSelectedTab('requests')}
                >
                    Requests
                </span>
            </div>
            <div className="overflow-hidden">
                <div className="min-w-full divide-y divide-gray-200">
                    {selectedTab === 'appointments' && (
                        <div className="grid grid-cols-6 gap-4 p-2 bg-gray-100 rounded-t-md mt-4">
                            <div></div>
                            <div className="text-left text-[#79747E] font-semibold">Name</div>
                            <div className="text-left text-[#79747E] font-semibold">Location</div>
                            <div className="text-left text-[#79747E] font-semibold">Date</div>
                            <div className="text-left text-[#79747E] font-semibold">Time</div>
                            <div className="text-left text-[#79747E] font-semibold">Status</div>
                            <div></div>
                        </div>
                    )}
                    <div className="grid grid-cols-1 gap-4 p-2 overflow-x-hidden">
                        {selectedTab === 'appointments' && appointments.map((appointment, index) => (
                            <motion.div
                                key={appointment.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Appointment
                                    profilePicture={appointment.profilePicture}
                                    name={appointment.name}
                                    location={appointment.location}
                                    date={appointment.date}
                                    time={appointment.time}
                                    status={appointment.status}
                                    onDelete={() => handleDelete(appointment.id, 'appointments')}
                                />
                            </motion.div>
                        ))}
                        {selectedTab === 'requests' && requests.map((request, index) => (
                            <motion.div
                                key={request.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Request
                                    profilePicture={request.profilePicture}
                                    name={request.name}
                                    location={request.location}
                                    date={request.date}
                                    time={request.time}
                                    service={request.service}
                                    description={request.description}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboardAppointments;

import React from 'react';
import { NavLink } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

const Sidebar = ({ name, profilePicture }) => {
        const {logout} = useLogout
    return (
        <div className="w-64 h-screen bg-white shadow-md fixed">
            <div className="p-4 mt-6">
                <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto p-1 border-4 border-[#55CDF1]" // Added padding class
                />
                <div className='flex justify-center items-center mt-4'>
                    <h2 className="font-semibold text-lg mr-2">{name}</h2>
                    <img src='/img3.png' alt='pen' className='w-5 h-5 cursor-pointer' />
                </div>
            </div>
            <nav className="mt-6">
                <ul>
                    <li className="mb-1">
                        <NavLink
                            to="/ClientdashboardHome"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center p-4 text-[#55CDF1] border-l-4 border-[#55CDF1] pl-2"
                                    : "flex items-center p-4 text-gray-600 hover:text-[#55CDF1]"
                            }
                        >
                            <span className="material-icons">home</span>
                            <span className="ml-2">Home</span>
                        </NavLink>
                    </li>
                    <li className="mb-1">
                        <NavLink
                            to="/ClientdashboardAppointments"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center p-4 text-[#55CDF1] border-l-4 border-[#55CDF1] pl-2"
                                    : "flex items-center p-4 text-gray-600 hover:text-[#55CDF1]"
                            }
                        >
                            <span className="material-icons">event</span>
                            <span className="ml-2">Appointment</span>
                        </NavLink>
                    </li>
                    <li className="mb-1">
                        <NavLink
                            to="/inbox"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center p-4 text-[#55CDF1] border-l-4 border-[#55CDF1] pl-2"
                                    : "flex items-center p-4 text-gray-600 hover:text-[#55CDF1]"
                            }
                        >
                            <span className="material-icons">inbox</span>
                            <span className="ml-2">Inbox</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={logout}
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center p-4 text-[#55CDF1] border-l-4 border-[#55CDF1] pl-2"
                                    : "flex items-center p-4 text-gray-600 hover:text-[#55CDF1]"
                            }
                        >
                            <span className="material-icons">logout</span>
                            <span className="ml-2">Log out</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;


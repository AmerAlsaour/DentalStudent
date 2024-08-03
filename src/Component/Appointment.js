import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const defaultProfilePicture = './DefaultClient.png';

const Appointment = ({ profilePicture, name, location, date, time, status, onDelete }) => {
    return (
        <div className="grid grid-cols-6 items-center p-4 bg-white shadow-md rounded-md mb-4">
            <div className="flex items-center col-span-1">
                <img
                    src={profilePicture || defaultProfilePicture}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-gray-300 ml-6"
                />
            </div>
            <div className="col-span-1 ">
                <h3 className="font-semibold text-lg">{name}</h3>
            </div>
            <div className="col-span-1">
                <p className="text-gray-600">{location}</p>
            </div>
            <div className="col-span-1">
                <p className="text-gray-600">{date}</p>
            </div>
            <div className="col-span-1">
                <p className="text-gray-600">{time}</p>
            </div>
            <div className="col-span-1 flex items-center justify-between">
                <p className={`text-sm ${status === 'Approved' ? 'text-[#55CDF1]' : 'text-red-600'}`}>{status}</p>
                <button onClick={onDelete} className="text-red-600 hover:text-red-800 mr-4">
                    <FaTrashAlt size={20} />
                </button>
            </div>
        </div>
    );
};

export default Appointment;

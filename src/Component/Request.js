import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const defaultProfilePicture = './DefaultClient.png';

function Request({ profilePicture, name, date, time, service, description }) {
    return (
        <div className="border p-4 rounded-lg mb-4 pr-10 bg-white shadow-md">
            <div className="flex items-center mb-2">
                <img
                    src={profilePicture || defaultProfilePicture}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-gray-300 ml-6"
                />
                <div className='p-2'>
                    <div className="font-bold text-lg">{name}</div>
                </div>
            </div>
            <div className="flex items-center ml-20 mb-2">
                <div className="flex items-center text-sm text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    <span className='text-black font-semibold'>{date}</span>
                    <FaClock className="ml-4 mr-2" />
                    <span className='text-black font-semibold'>{time}</span>
                </div>

                <div className='ml-40 mb-2'>
                    <span className="font-semibold text-gray-500 pr-2">Service:</span>
                    <span className='bg-gray-200 pr-2 pl-2 p-1 rounded-full'>{service}</span>
                </div>
            </div>

            <div className="mb-4 ml-20">
                <span className="font-semibold text-gray-500">Description:</span>
                <p className="border-b border-gray-300">{description}</p>
            </div>

            <div className="flex w-full justify-end space-x-2 font-semibold">
                <button className="bg-[#55CDF1] text-white px-4 py-1 rounded hover:bg-blue-600">
                    Approve
                </button>
                <button className="bg-white text-[#662525] px-4 py-2 rounded border border-[#662525] hover:bg-[#662525] hover:text-white">
                    Reject
                </button>
            </div>
        </div>
    );
}

export default Request;

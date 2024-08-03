import React from 'react';

const defaultProfilePicture = './DefaultClient.png';

const MsgCard = ({ sender, profilePicture, content, time }) => {
    return (
        <div className="flex items-start mb-4">
            <img
                src={profilePicture || defaultProfilePicture}
                alt="Sender Profile"
                className="w-12 h-12 rounded-full border-2 border-white mr-3"
            />
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                    <div className="flex items-center mb-1">
                        <h3 className="font-semibold text-lg">{sender}</h3>
                    </div>
                    <div>
                        <p className="text-gray-700 whitespace-pre-wrap">{content}</p>
                        <div className="text-right text-xs text-gray-500 ml-auto">{time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MsgCard;

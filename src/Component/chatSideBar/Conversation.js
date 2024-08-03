import React from 'react'
import useConversation from '../../hooks/useConversation'
const Conversation = ({conversation,lastMsg}) => {
  const {selectedConversation , setSelectedConversation} = useConversation()
  const isSelected = selectedConversation?._id === conversation._id
  // console.log(isSelected,'sss');
  return (
    <div className={`flex gap-4 items-center hover:bg-slate-300 rounded p-2 py-1 cursor-pointer
      ${isSelected ? 'bg-gray-300' : ''}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src={conversation.profilePic} alt='user avatar'/>
        </div>
      </div>
      <div className='flex flex-col flex-1 gap-1'>
        <p className='font-bold text-black'>{conversation.firstName + " " + conversation.lastName}</p>
        <p className=' text-black'>{lastMsg}</p>
      <div className='divider divide-gray-700 my-0 py-2 h-1'/>
      </div>
    </div>
  )
}

export default Conversation

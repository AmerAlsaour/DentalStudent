import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../hooks/useConversation'
const Msg = ({msg}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = msg.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  // const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const msgColor = fromMe ? 'bg-blue-500' : 'bg-slat-200'
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img src= '../DefaultClient.png' alt='user avatar'/>
        </div>
      </div>
      <div className={`chat-bubble text-white ${msgColor} `}> {msg.msg}</div>
      <div className={`chat-footer text-white opacity-50 text-xs flex gap-1 items-center `}> 2:30 </div>
      {/* <h4> MSg</h4> */}
    </div>
  )
}

export default Msg

import React, { useEffect } from 'react'
import Conversation from '../chatSideBar/Conversation'
import Msgs from './Msgs'
import MsgInput from './MsgInput'
import {TiMessages} from 'react-icons/ti'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../hooks/useConversation'

const MsgContainer = () => {
  const {selectedConversation , setSelectedConversation} = useConversation()
  
  useEffect(() => {
    return () => setSelectedConversation(null)
  },[setSelectedConversation])

  // console.log(selectedConversation,'ss');
  
  return (
    <div className='md:min-w-[750px]  flex flex-col'>
    {!selectedConversation ? <NoChatSelected/> : (
        <>
      <div className={`flex gap-4 items-center rounded p-2 py-1`}>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src={selectedConversation.profilePic} alt='user avatar'/>
        </div>
      </div>
      <div className='flex flex-col flex-1 gap-1'>
        <p className='font-bold text-black'>{selectedConversation.firstName + " " + selectedConversation.lastName}</p>
        <p className=' text-gray-600'>Available</p>
      <div className='divider my-0 py-0 h-1'/>
      </div>
    </div>
        <Msgs/>
        <MsgInput/>
        </>
    )}
    </div>
  )
}
export default MsgContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  console.log(authUser,'adsf');
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex
      flex-col items-center gap-2'>
        <p>Welcome {authUser.firstName + " " + authUser.lastName}</p>
        <p>Select a Chat to Start Messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}

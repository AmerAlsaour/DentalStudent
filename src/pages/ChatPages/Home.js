import React from 'react'
import ChatSideBar from '../../Component/chatSideBar/ChatSideBar'
import MsgContainer from '../../Component/messages/MsgContainer'


const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-screen  md:w-[78vw]   overflow-hidden bg-slate-100 '>
      <MsgContainer/>
      <ChatSideBar/>
    </div>
  )
}

export default Home

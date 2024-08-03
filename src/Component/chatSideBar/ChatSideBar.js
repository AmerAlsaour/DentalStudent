import React from 'react'
import SearchInput from './Search'
import Conversations from './Conversations'
// import Logout from '../logout/Logout'


const ChatSideBar = () => {
  return (
    
    <div className='border-l h-[95vh] mx-4 bg-slate-200 border-slate-900 p-8  flex flex-col'>
      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversations/>
      {/* <Logout/> */}
    </div>
    
  )
}

export default ChatSideBar

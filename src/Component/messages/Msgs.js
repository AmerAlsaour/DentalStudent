import React, { useEffect, useRef } from 'react'
import Msg from './Msg'
import useGetMsgs from '../../hooks/useGetMsgs'

const Msgs = () => {
  const {loading , msgs} = useGetMsgs()
  console.log(msgs,'jkhkhkhhkkhkh');
  const lastMsgRef = useRef()
  useEffect(() => {
    setTimeout(() =>{
      lastMsgRef.current?.scrollIntoView({behavior : 'smooth'})
    },100)
  } , [msgs])
  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && msgs.length > 0 ? msgs.map((msg)=>(
        <div key={msg._id} ref={lastMsgRef}>
          <Msg msg={msg}/>
        </div>
      )
      ):loading && <h2 className='loading loading-dots'></h2>}

    {!loading && msgs.length === 0 && (
      <h3 className='text-slate-900 text-center py-2'> Send a Message To Start The Conversation... </h3>
    )}
    </div>
  )
}

export default Msgs

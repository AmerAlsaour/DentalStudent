import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import useSendMsg from '../../hooks/useSendMsg'
const MsgInput = () => {
  const [msg , setMsg] = useState('')
  const {loading , sendMsg} = useSendMsg()
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log();
    if(!msg) return
    await sendMsg(msg)
    setMsg('')
  }
  return (
    <form className='px-4 my-12' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input type='text'
        className='border text-sm rounded-lg block w-full p-4 bg-slate-100 border-slate-950 text-slate-700'
        placeholder='Send A Message...'
        value={msg}
        onChange={(e)=> setMsg(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
        {loading ? <div className='loading loading-spinner'></div>: <BsSend/>}
        </button>
      </div>
    </form>
  )
}

export default MsgInput

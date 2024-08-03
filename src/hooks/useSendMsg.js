import React, { useState } from 'react'
import useConversation from './useConversation'
import toast from 'react-hot-toast'

const useSendMsg = () => {
  const [loading,setLoading] = useState(false)
  const {msgs , setMsgs , selectedConversation} = useConversation()
  const sendMsg = async (msg) => {
    console.log("any thing");
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:5000/api/msgs/sendMsg/${selectedConversation._id}`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({msg}),
        credentials:'include'
      })
      const data = await res.json(res)
      console.log(data,'data');
      console.log(msgs);
      let reee = setMsgs([...msgs , data.msg])
      console.log(reee);
      if(data.error) throw new Error(data.error)
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }
  return { loading , sendMsg}
}
export default useSendMsg

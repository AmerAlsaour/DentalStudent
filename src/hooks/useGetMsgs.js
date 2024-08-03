import React, { useEffect, useState } from 'react'
import useConversation from '../hooks/useConversation'
import toast from 'react-hot-toast'

const useGetMsgs = () => {
  const [loading , setLoading] = useState(false)
  const {msgs , setMsgs , selectedConversation} = useConversation()
  useEffect(() => {
    const getMsgs = async () =>{
      setLoading(true)
      try {
        const res = await fetch(`http://localhost:5000/api/msgs/${selectedConversation._id}`,{
          credentials:'include'
        })
        const data = await res.json()
        console.log(data,'DATA');
        if(data.error) throw new Error(data.error)
          setMsgs(data)
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false)
      }
    }
    if(selectedConversation?._id) getMsgs()
  },[selectedConversation._id , setMsgs])
  return {loading , msgs}
}

export default useGetMsgs

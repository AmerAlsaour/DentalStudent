import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetDoctors = () => {
 const [loading ,setLoading] = useState(false)
 const [conversations,setConversations] = useState([])
 useEffect(() => {
  const getDoctors = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/users/doctors',{
        credentials:'include'
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const data = await res.json();
      console.log(data.doctors, "data");
      if (data.error) {
        throw new Error(data.error);
      }
      else{
        setConversations(data.doctors);
        return true
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  getDoctors();
}, []);
 return {loading , conversations}
}

export default useGetDoctors

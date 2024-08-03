import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
  const [loading , setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()
  console.log(setAuthUser,"setAuth");
  const login = async (email , password) => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/auth/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password}),
        credentials:'include'
        
      })
      const data = await res.json()
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem('authUser',JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message)
    }
    finally{
      setLoading(false)
    }
  }
  return {loading , login}
}

export default useLogin

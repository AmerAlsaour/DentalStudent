import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignUp = () => {
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState(false)
  const {setAuthUser} = useAuthContext()
  
  
  const sign = async ({firstName , lastName , email ,phone ,password , confirmPassword}) => {
  const success = handleInputErrors({firstName , lastName , email ,phone ,password , confirmPassword}) 
  if(!success) return  
  setLoading (true)
  try {
    const res = await fetch('http://localhost:5000/api/auth/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword,
        role:'client'
      }),
      credentials:'include'
    })
    console.log(res,"res");
    const data = await res.json()
    if(data.error){
      throw new Error(data.error)
      
    }
    else{
      // localStorage
      localStorage.setItem('authUser',JSON.stringify(data))
      // context
      setAuthUser(data)
      return true
    }
    
    
  } catch (error) {
    toast.error(error.message)
  }
  finally{
    setLoading(false)
  }
  }
  return {loading , sign}

}

export default useSignUp

function handleInputErrors({firstName , lastName , email ,phone ,password , confirmPassword}){
  if(!firstName || !lastName || !email || !phone || !password || !confirmPassword ){
    toast.error('Please Fill all Fields!')
    return false
  }
  if(password !== confirmPassword){
    toast.error("Password don't Match!")
    return false
  }
  if(password.length < 6 ){
    toast.error('Password Must be More Than 6 characters!')
    return false
  }
  return true
}

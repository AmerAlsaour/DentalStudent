import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from '../../hooks/useConversation';
import useGetDoctors from '../../hooks/useGetDoctors';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search , setSearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetDoctors()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search) return
   const conversation = conversations.find(c => (c.firstName + " " + c.lastName).toLowerCase()
  .includes(search.toLowerCase()) )
  if(conversation){
    setSelectedConversation(conversation)
    setSearch('')}
    else{
      toast.error('No Such User Found!')
    }
  }
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input type='text' placeholder='Search..' className='input input-bordered rounded-2xl'
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>
      <button type='submit' className='btn btn-circle bg-slate-400 text-white'>
      <CiSearch className='w-8 h-8 outline-none'/>
      </button>
    </form>
  )
}

export default SearchInput

import React from 'react'
import Conversation from './Conversation'
import useGetDoctors from '../../hooks/useGetDoctors'

const Conversations = () => {
  const {loading,conversations} = useGetDoctors()
  console.log('Convs',conversations);
  const x = conversations.map(c=> c.firstName)
  console.log(x,'xxxx');
  // console.log(conversations,'firs');

  return (
    <div className='flex flex-col overflow-auto'>
     {conversations.map((conversation) => (
      <Conversation key={conversation._id}
      conversation={conversation}
      lastMsg={conversation.lastMessage} />
     ) )}
      {loading ? (<span className='loading loading-spinner'></span>): null}

    </div>
  )
}

export default Conversations

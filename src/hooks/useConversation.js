import {create} from 'zustand'
const useConversation = create((set)=>({
  selectedConversation : null,
  setSelectedConversation: (selectedConversation) => set({selectedConversation}),
  msgs:[],
  setMsgs : (msgs) => set({msgs}),
}))

export default useConversation
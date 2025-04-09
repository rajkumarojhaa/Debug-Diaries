import React from 'react'
import { useNavigate } from 'react-router-dom'

function AiBtn() {
  const navigate = useNavigate();

  return (
    <button
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={() => navigate('/ask-ai')}
    >
      Ask Ai
    </button>
  )
}

export default AiBtn;

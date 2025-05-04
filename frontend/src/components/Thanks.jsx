import React from 'react'
import { useNavigate } from 'react-router'
const Thanks = () => {
  const navigate = useNavigate();
  return (
    <div>
      You have logged in succesfully
      <button onClick={()=>navigate('/')}>Go back to homepage</button>
    </div>
  )
}

export default Thanks

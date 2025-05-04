import React from 'react'
import { useNavigate } from 'react-router'
const Showlogins = () => {
    const navigate=useNavigate();
    return (
        <div>
            <button onClick={()=>navigate('/signup')}>Sign Up</button>
            <button onClick={()=>navigate('/signin')}>Sign In</button>
            <button onClick={()=>navigate('/signup')}>Sign Out</button>
            <button onClick={()=>navigate('/signup')}>Delete Account</button>
        </div>
    )
}

export default Showlogins

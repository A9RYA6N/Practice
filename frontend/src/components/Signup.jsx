import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Signup = () => {
    const navigate=useNavigate();
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [pass, setPass]= useState('')
    const [phone, setPhone]= useState(0)
    const handleClick=()=>{
        const apiObj={
            name:name,
            email:email,
            password:pass,
            phone:phone
        };
        axios({
            method:"POST",
            url:"https://practice-teal-ten.vercel.app/user/signup",
            data:apiObj,
        }).then((res)=>{
            navigate('/thanks')
        })
    }
  return (
    <div>
      <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
      <input type="email" placeholder='E-mail' onChange={(e)=>{setEmail(e.target.value)}}/>
      <input type="password" placeholder='Password' onChange={(e)=>{setPass(e.target.value)}}/>
      <input type="number" placeholder='Phone' onChange={(e)=>{setPhone(e.target.value)}}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Signup

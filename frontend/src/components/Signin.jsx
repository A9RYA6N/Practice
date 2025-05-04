import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
const Signin = () => {
    const navigate=useNavigate()
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    const handleClick=()=>{
        try {
            const apiObj={
                email:email,
                password:pass
            }
            axios({
                method:"POST",
                url:"https://practice-teal-ten.vercel.app/user/signin",
                data:apiObj
            }).then((res)=>{
                localStorage.setItem("token", res.data.token);
                navigate('/');
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Signin

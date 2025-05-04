import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
const Signin = () => {
    const navigate=useNavigate()
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    const [loading, setLoading]= useState(false)
    const handleClick=()=>{
        setLoading(true);
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
        finally{
            setLoading(false)
        }
    }
    return (
        <div>
            <label htmlFor='email' class="block mb-2 text-sm font-medium text-gray-900">E-Mail</label>
            <input id='email' type="text" placeholder='Enter your email' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setEmail(e.target.value)}/>
            
            <label htmlFor='password' class="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input id='password' type="password" placeholder='Enter your password' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setPass(e.target.value)}/>

            <button onClick={handleClick} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" disabled={loading}>Submit</button>
        </div>
    )
}

export default Signin

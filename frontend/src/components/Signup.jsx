import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Signup = () => {
    const navigate=useNavigate();
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [pass, setPass]= useState('')
    const [phone, setPhone]= useState(0)
    const [loading, setLoading]= useState(false)
    const handleClick=()=>{
        setLoading(true);
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
            navigate('/signin');
            setLoading(false);
        })
    }
  return (
    <div>
      <label htmlFor='name' class="block mb-2 text-sm font-medium text-gray-900">Name</label>
      <input id='name' type="text" placeholder='Enter your name' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setName(e.target.value)}}/>

      <label htmlFor='email' class="block mb-2 text-sm font-medium text-gray-900">E-Mail</label>
      <input id='email' type="email" placeholder='Enter your email id' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setEmail(e.target.value)}}/>

      <label htmlFor='password' class="block mb-2 text-sm font-medium text-gray-900">Password</label>
      <input id='password' type="password" placeholder='Enter your password' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setPass(e.target.value)}}/>

      <label htmlFor='number' class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
      <input id='number' type="number" placeholder='Enter your number' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setPhone(e.target.value)}}/>

      <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleClick} disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
    </div>
  )
}

export default Signup

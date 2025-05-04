import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import Allproducts from './Allproducts';
import axios from 'axios'
import Showlogins from './Showlogins';
const Homepage = () => {
    const [data, setData]=useState({})
    useEffect(()=>{
        axios({
            method:"GET",
            url:"https://practice-teal-ten.vercel.app/product",
        }).then((res)=>{
            setData(res.data.data)
        })
    }, [])
    console.log(data)
    const navigate=useNavigate();
    let token=localStorage.getItem('token');
    return (
        <div>
            {token ? <div>
                {data?.length>0 && 
                data?.map((item)=>{
                    return(<><button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>{localStorage.removeItem("token"); navigate('/')}}>Log out</button><button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>{navigate('/createprod')}}>Create new product</button><Allproducts key={item._id} item={item}/></>);
                })}
            </div> : <Showlogins/>}
        </div>
    )
}

export default Homepage

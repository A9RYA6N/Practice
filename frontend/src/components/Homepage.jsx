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
                    return(<Allproducts key={item._id} item={item}/>);
                })}
            </div> : <Showlogins/>}
        </div>
    )
}

export default Homepage

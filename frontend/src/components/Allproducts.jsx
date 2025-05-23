import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
const Allproducts = ({item}) => {
    const navigate=useNavigate()
    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a onClick={()=>navigate(`product/${item._id}`)}>
                <img class="p-8 rounded-t-lg" src={item.imgUrl} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a onClick={()=>navigate(`product/${item._id}`)}>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </a>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</a>
                    <a onClick={()=>{
                        axios({
                            method:"DELETE",
                            url:`https://practice-teal-ten.vercel.app/product/${item._id}`,
                            headers:{
                                "x-access-token":localStorage.getItem('token')
                            }
                        }).then((res)=>{
                            alert("Product deleted successfully");
                            window.location.reload();
                        })
                    }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</a>
                </div>
            </div>
        </div>

    )
}

export default Allproducts



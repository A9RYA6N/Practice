import React from 'react'
import { useNavigate } from 'react-router'
const Allproducts = ({item}) => {
    const navigate=useNavigate()
    return (
        // <div className='product-div' onClick={()=>navigate(`/${item._id}`)}>
        //     <img src={item.imgUrl}/>
        //     <p>{item.name}</p>
        //     <span>{item.price}</span>
        //     <button>Buy Now</button>
        // </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a onClick={()=>navigate(`/${item._id}`)}>
                <img class="p-8 rounded-t-lg" src={item.imgUrl} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a onClick={()=>navigate(`/${item._id}`)}>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </a>
               
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</a>
                </div>
            </div>
        </div>

    )
}

export default Allproducts



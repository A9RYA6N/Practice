import React from 'react'
import { useParams } from 'react-router'
import { useProductContext } from '../Productcontext'
const Singleproduct = (item) => {
    const {id}=useParams();
    const {products}=useProductContext()
    const product=products.find(p=>p._id==id)
    return (
        <div>
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img class="p-8 rounded-t-lg" src={product.imgUrl} alt="product image" />
                <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleproduct

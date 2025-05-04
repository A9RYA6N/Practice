import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
const CreateProduct = () => {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [desc,setDesc]=useState('');
    const [img,setImg]=useState('');
    const [price,setPrice]=useState(0);
    const [category, setCategory]=useState('');
    const [loading, setLoading]= useState(false)
    const handleClick=()=>{
        setLoading(true);
        try {
            const apiObj={
                name,
                description:desc,
                price,
                category,
                imgUrl:img
            }
            axios({
                method:"POST",
                url:"https://practice-teal-ten.vercel.app/product",
                data:apiObj,
                headers:{
                    "x-access-token":localStorage.getItem('token')
                }
            }).then((res)=>{
                alert('Product has been created');
                setLoading(false);
            }).finally(()=>{
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input id='name' type="text" placeholder='Enter product name' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setName(e.target.value)}}/>

            <label htmlFor="desc" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <input id='desc' type="text" placeholder='Enter product description' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setDesc(e.target.value)}}/>

            <label htmlFor="price" class="block mb-2 text-sm font-medium text-gray-900">Price</label>
            <input id='price' type="number" placeholder='Enter price' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setPrice(e.target.value)}}/>

            <label htmlFor="category" class="block mb-2 text-sm font-medium text-gray-900">Category</label>
            <select name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setCategory(e.target.value)} required>
                <option value="">Select anyone from below</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Food">Food</option>
                <option value="Kitchenware">Kitchenware</option>
                <option value="Everyday">Everyday</option>
            </select>

            <label htmlFor="link" class="block mb-2 text-sm font-medium text-gray-900">Image Link</label>
            <input id='link' type="text" placeholder='Enter image link' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setImg(e.target.value)}}/>

            <button onClick={handleClick} disabled={loading} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >{loading ? "Submitting" : "Submit"}</button>
        </div>
    )
}

export default CreateProduct
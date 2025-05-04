import React from 'react'
import { useNavigate } from 'react-router'
const Allproducts = ({item}) => {
    const navigate=useNavigate()
    return (
        <div onClick={()=>navigate(`/${item._id}`)}>
            <img src={item.imgUrl}/>
            <p>{item.name}</p>
            <span>{item.price}</span>
            <button>Buy Now</button>
        </div>
    )
}

export default Allproducts

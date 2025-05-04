const products=require('../db/model/product')
let {validationResult}=require('express-validator')

let getAllProducts= async (req,res)=>{
    let allProducts= await products.find({});
    res.status(200).json({success:true, message:"Data fetched succesfully", data: allProducts})
}

let createProduct= async (req,res)=>{
    let body=req.body;
    const error= validationResult(req).errors;
    if(error && error.length)
    {
        return res.status(400).json({success:false, message:error[0].msg})
    }
    try {
        let newProduct= new products({
            name: body.name,
            description: body.description,
            price: body.price,
            category: body.category,
            imgUrl: body.imgUrl
        })
        await newProduct.save();
        res.status(201).json({success:true, message:"Product added"})
    } catch (err) {
        res.status(400).json({syccess:false, message:err})
    }
}

let deleteProduct= async (req,res)=>{
    let id=req.params.id;
    let deletedProd= await products.findByIdAndDelete(id)
    if(!deletedProd)
    {
        res.status(400).json({succes:false, message:"Product not found"})
    }
    res.status(200).json({success:true, message:"Product deleted succesfully"})
}

let getProductbyId= async (req,res)=>{
    let id=req.params.id;
    let product= await products.findById(id);
    if(!product)
    {
        res.status(404).json({success:false, message:"Product not found"})
    }
    res.status(200).json({success:true, messsage:"Found product", data:product})
}

module.exports={getAllProducts, createProduct, deleteProduct, getProductbyId}
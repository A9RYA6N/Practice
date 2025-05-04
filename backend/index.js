require('dotenv').config();
const express=require("express")
const app=express();
const cors = require('cors');
app.use(cors({
    origin: 'https://practice-dmvn.vercel.app',
    credentials: true
}));
const {userRouter}=require('./routes/user.router')
const {productRouter}=require('./routes/products.router')
const mongoose=require('./db/connection')
app.use(express.json());
const port=process.env.PORT;

app.use('/user', userRouter)
app.use('/product', productRouter)
app.use((req,res)=>{
    res.status(404).send(`<html>
    <head>
        <title>404</title>
    </head>
    <body>
        <h1>PAGE NOT FOUND</h1>
    </body>
</html>`)
})

app.listen(port, (err)=>{
    if(err)
    {
        console.log("Error", err)
    }
    console.log("App listending on port 3000")
})

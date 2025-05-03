require('dotenv').config();
const express=require("express")
const cors = require('cors');
const {userRouter}=require('./routes/user.router')
const mongoose=require('./db/connection')
const app=express();
app.use(express.json());
app.use(cors());
const port=process.env.PORT;

app.use('/user', userRouter)

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
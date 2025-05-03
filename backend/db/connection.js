const mongoose=require('mongoose')
let mongoUrl=process.env.MONGO_URL;
mongoose.connect(mongoUrl).then(()=>{
    console.log("Connected to db!")
})
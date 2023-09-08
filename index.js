const express=require("express");
const user = require("./routes/userRouter");
const validate = require("./middleware/Middleware");

const app=express()
const port=3001
const vadidateApp=(req,res,next)=>{
    console.log("This is Application Middleware")
    next()
}



app.use(vadidateApp)
app.use("/user",validate,user)
app.listen(port,()=>{
    try{
        console.log(`server is running on port no ${port}`)
    }
    catch(err){
        console.log(err)
    }

   
})
const validate=(req,res,next)=>{
    if(req.query.age>=18){
        next()
    }
    else{
        res.send("you are not eligible")
    }
}

module.exports=validate
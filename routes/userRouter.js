const user=require("express").Router()


user.get("/api/login",(req,res)=>{
    res.send("<h1> This is login page <h1/>")
})
user.get("/api/main",(req,res)=>{
    res.send({
        "what is Node.js":"Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.",
        "whats is express":" Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features."
    })
})

module.exports=user
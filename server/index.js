const express = require("express")    // importing express from node modules 
const { registerController, loginController, forgotPassController, changePassController, changeUsernameController } = require("./controllers/userController")
const { connectDb } = require("./config/connectDb")



const app = express()   // creating an express app
const port = 4000

connectDb()


// middle wares

app.use(express.json())


app.get("/index" , (req,res)=>{res.status(201).json({message : "Api Successfull" , success : true  })})

// post requests which accepts request object 

app.post("/register" ,  registerController)
app.post("/login" , loginController )
app.get("/forgot/Password"  , forgotPassController ) 
app.post ("/change/password" , changePassController)
app.post("/edit/user",changeUsernameController)


app.listen(port , ()=>{console.log(`Server listening on port ${port}`)} )
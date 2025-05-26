const express = require("express")    // importing express from node modules 
const { registerController, loginController, forgotPassController, changePassController, changeUsernameController } = require("./controllers/userController")
const { connectDb } = require("./config/connectDb")
const cors = require("cors")
const { verifyToken } = require("./controllers/authController")



const app = express()   // creating an express app
const port = 4000

connectDb()


// middle wares

app.use(express.json())    // body ka format json hai 
app.use(cors())     // cors policy unblocked


app.get("/index" , (req,res)=>{res.status(201).json({message : "Api Successfull" , success : true  })})

// post requests which accepts request object 


// user Routes
app.post("/register" ,  registerController)     // done 
app.post("/login" , loginController )
app.get("/forgot/Password"  , forgotPassController ) 
app.post ("/change/password" , changePassController)
app.post("/edit/user",changeUsernameController)


// verifyToken

app.get("/verify/token" ,  verifyToken)








app.listen(port , ()=>{console.log(`Server listening on port ${port}`)} )
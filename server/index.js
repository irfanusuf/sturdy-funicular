const express = require("express")    // importing express from node modules 
const { registerController, loginController, forgotPassController, changePassController, changeUsernameController } = require("./controllers/userController")
const { connectDb } = require("./config/connectDb")
const cors = require("cors")
const { verifyToken, authorize } = require("./controllers/authController")
const { addPost } = require("./controllers/postController")
const multmid = require("./utilities/multer")
require('dotenv').config()



const app = express()   // creating an express app
const port = process.env.PORT

connectDb()

// middle wares

app.use(express.json())    // body ka format json hai    // use kerpatey hai req.body
// alternative 

// body parser
app.use(cors())     // cors policy unblocked

app.get("/index" , (req,res)=>{res.status(201).json({message : "Api Successfull" , success : true  })})

// post requests which accepts request object 

// user Routes
app.post("/register" ,  registerController)     // done 
app.post("/login" , loginController )

app.get("/forgot/Password"  , forgotPassController ) 
app.post ("/change/password" , changePassController)


app.post("/edit/user", authorize ,  changeUsernameController)


// verifyToken

app.get("/verify/token" ,  verifyToken)



//post routes

app.post("/add/post" , authorize , multmid,   addPost )


// app.post("/edit/post"  ,  authorize ,   EditPost )








app.listen(port , ()=>{console.log(`Server listening!`)} )
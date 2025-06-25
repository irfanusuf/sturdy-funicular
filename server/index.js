const express = require("express")    // importing express from node modules
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config()

const  connectDb  = require("./config/connectDb")
const userRoutes = require ("./routes/userRoutes")
const postRoutes = require ("./routes/postRoutes")


const app = express()   // creating an express app
const port = process.env.PORT

connectDb()
// middlewares
// app.use(express.json())    // body ka format json hai    // use kerpatey hai req.body
// alternative 
// body parser
// app.use(bodyParser.urlencoded({extended :true}))

app.use(bodyParser.json())
app.use(cors())     // cors policy unblocked

//test Route For testing if the server is working 
app.get("/" , (req,res)=>{res.status(201).send("Api Server Wroking ......." )})
// user Routes
app.use("/user" , userRoutes)   // single middleware with multiple Routes inside
//post aka blog Routes
app.use("/post" , postRoutes)     // single middleware with multiple Routes inside


app.listen(port , ()=>{console.log(`Server listening!`)} )




const express = require("express");
const controller = require("../controllers/cartController");
const authorize = require("../middlewares/authorize");

const router = express.Router();



router.post("/addtoCart/:productId" , authorize , controller.addToCart)    // done 
router.get("/removeFromCart/:productId" , authorize , controller.removeFromCart)    // done 
router.get("/getCart" , authorize , controller.getCart)   // done 






module.exports = router



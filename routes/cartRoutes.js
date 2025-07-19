



const express = require("express");
const controller = require("../controllers/cartController");
const authorize = require("../middlewares/authorize");

const router = express.Router();



router.post("/addtoCart" , authorize , controller.addToCart)
router.get("/removeFromCart" , authorize , controller.removeFromCart)






module.exports = router



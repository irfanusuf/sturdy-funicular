const express = require("express");
const controller = require("../controllers/orderController");
const authorize = require("../middlewares/authorize");

const router = express.Router();




router.post("/create" ,authorize ,  controller.createOrder )




module.exports = router

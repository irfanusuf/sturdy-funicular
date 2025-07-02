const express = require("express");
const controller = require("../controllers/addressController");
const authorize = require("../middlewares/authorize");

const router = express.Router();




// router.post("/create" ,authorize ,  controller.createAddress)




module.exports = router

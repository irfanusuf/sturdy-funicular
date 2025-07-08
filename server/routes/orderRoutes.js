const express = require("express");
const controller = require("../controllers/orderController");
const authorize = require("../middlewares/authorize");

const router = express.Router();




router.post("/create" ,authorize ,  controller.createOrder )


router.put("/processing/:orderId" ,authorize , (req,res) =>{ controller.updateOrderStatus(req ,res, "processing") }  )
router.put("/shipped/:orderId" ,authorize , (req,res) =>{ controller.updateOrderStatus(req ,res, "shipped") }  )
router.put("/delivered/:orderId" ,authorize , (req,res) =>{ controller.updateOrderStatus(req ,res, "delivered") }  )
router.put("/cancel/:orderId" ,authorize , (req,res) =>{ controller.updateOrderStatus(req ,res, "cancel") }  )







router.get("/fetchAllOrders" ,authorize ,  controller.createOrder )
router.get("/fetchOrderById/orderId" ,authorize ,  controller.createOrder )




// router.put("/refund/:orderId" ,authorize ,  controller.createOrder )


module.exports = router

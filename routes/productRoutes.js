const express = require("express");
const controller = require("../controllers/productController");
const authorize = require("../middlewares/authorize");
const multmid = require("../middlewares/multer");

const router = express.Router();

router.post("/add", multmid, controller.addProduct);     // done // admin panel 
router.put("/edit/:productId" , multmid,  controller.editProduct)    // not 
router.put("/archive/:productId" , controller.archive_UnArchiveProduct)  // done
router.put("/isAvialable/:productId" , controller.isAvailOrNot)
router.get("/getAll" , controller.getAllProducts)    // done
router.get("/get/:productId" , controller.getProductById)    // done 

module.exports = router;

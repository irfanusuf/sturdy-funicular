const express = require("express");
const controller = require("../controllers/productController");
const authorize = require("../middlewares/authorize");
const multmid = require("../middlewares/multer");

const router = express.Router();

router.post("/add", multmid, controller.addProduct);
router.put("/edit/:productId" , controller.editProduct)
router.get("/archive/:productId" , controller.archiveProduct)
router.get("/getAll" , controller.getAllProducts)
router.get("/get/:productID" , controller.getProductById)

module.exports = router;

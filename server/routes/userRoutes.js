const express = require("express");
const controller = require("../controllers/userController");
const authorize  = require("../middlewares/authorize");
const router = express.Router();




router.post("/register", controller.register); // done
router.post("/login", controller.login); // done
router.get("/forgot/Password", controller.forgotPass); // pending
router.post("/change/password", controller.changePass); // pending
router.post("/edit/user", authorize, controller.changeUsername); // pending
router.get("/verify" ,  authorize, controller.verify )     // isAuthorised // done  // verifyToken


module.exports = router

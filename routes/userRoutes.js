const express = require("express");
const controller = require("../controllers/userController");
const authorize  = require("../middlewares/authorize");
const router = express.Router();




router.post("/register", controller.register); // done
router.post("/login", controller.login); // done
router.get("/forgot/Password", controller.forgotPass); 
router.post("/change/password", controller.changePass); 
router.post("/edit/user", authorize, controller.changeUsername);
router.get("/verify/user" ,  authorize, controller.verifyUser )     // isAuthorised // done  // verifyToken
router.get("/verify/admin" ,  authorize, controller.verifyAdmin )   // done 

module.exports = router

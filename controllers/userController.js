const { User } = require("../models/userModel");
const bcrypt = require("bcrypt")

const registerController = async (req, res) => {
  // const username = req.body
  // const email = req.body
  // const password = req.body

  // destructuring
  const { username, email, password } = req.body;

  //  server side validation

  if (username === "" || email === "" || password === "") {
    return res
      .status(400)
      .json({
        message: "All the feilds with * are required !",
        success: false,
      });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res
      .status(400)
      .json({
        message: "User Already Exists , kindly Go to login Page",
        success: false,
      });
  }

   const encryptPassWord =  await bcrypt.hash(password , 10)



   const newUser = await User.create({ username, email, password : encryptPassWord });
  


  if (newUser) {
    return res
      .status(201)
      .json({ message: "User Created succesfully!", success: true });
  } else {
    return res
      .status(500)
      .json({ message: "Something Went Wrong ", success: false });
  }
};

const loginController = (req, res) => {};

module.exports = {
  registerController,
  loginController,
};

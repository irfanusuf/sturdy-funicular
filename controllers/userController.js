const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  try {
    // const username = req.body
    // const email = req.body
    // const password = req.body

    // destructuring
    const { username, email, password } = req.body;

    //  server side validation

    if (username === "" || email === "" || password === "") {
      return res.status(400).json({
        message: "All the feilds with * are required !",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists , kindly Go to login Page",
        success: false,
      });
    }

    const encryptPassWord = await bcrypt.hash(password, 12); // syntatic sugar 


    const newUser = await User.create({
      username,
      email,
      password: encryptPassWord,
    });

    if (newUser) {
      return res
        .status(201)
        .json({ message: "User Created succesfully!", success: true });
    } else {
      return res.status(500).json({
        message: "Something Went Wrong!",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error!" });
  }
};








const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      return res
        .status(400)
        .json({ message: "Email and password both are required!" });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "User not Found!" });
    }

    const verifyPass = await bcrypt.compare(password, existingUser.password);

    if (verifyPass) {
      return res.status(200).json({ message: "Login in succesfull!" });
    } else {
      return res.status(400).json({ message: "Password incorrect!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error!" });
  }
};

module.exports = {
  registerController,
  loginController,
};

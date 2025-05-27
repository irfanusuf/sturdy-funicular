const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { transport } = require("../utilities/nodeMailer");
require('dotenv').config()

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
      // session management

      const secretKey = process.env.SECRET_KEY

      const token = await jwt.sign(
        { userId: existingUser._id, username: existingUser.username },
        secretKey,
        {expiresIn : "24h"}
      );

      return res
        .status(200)
        .json({ message: "Login in succesfull!", authorization_token: token });
        
    } else {
      return res.status(400).json({ message: "Password incorrect!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error!" });
  }
};

const forgotPassController = async (req, res) => {
  try {
    // try to write logic here

    // find user by its email

    const { email } = req.query;

    console.log(email);

    if (email === "" || email === undefined) {
      return res.status(400).json({ message: "Email Not Found!" });
    }

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(400).json({ message: "User Not Found!" });
    }

    var mailOptions = {
      from: "contact@australasia-apparels.shop",
      to: email,
      subject: "Forgot Password Link ",
      text: "link begne hai ",
    };

    const sendMail = await transport.sendMail(mailOptions);

    if (sendMail.accepted) {
      return res.status(200).json({
        message: "An Email is sent to your  mail with password reset link !",
      });
    } else {
      return res.status(500).json({
        message: "Something Went Wrong , kindly try again after sometime !",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Went Wrong , kindly try again after sometime !",
    });
  }
};

const changePassController = async (req, res) => {
  try {
    const { password, confirmPass } = req.body;

    const { userId } = req.query;

    if (userId === "" || userId === undefined) {
      return res.status(400).json({ message: "userId Not Found!" });
    }

    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User Not Found!" });
    }

    if (password === "" || confirmPass === "" || confirmPass !== password) {
      return res
        .status(400)
        .json({ message: "Both feilds Required | Passwords doesnot Match!" });
    }

    const encryptPassWord = await bcrypt.hash(password, 12);

    user.password = encryptPassWord;
    const updatePass = await user.save();

    if (updatePass) {
      return res.status(200).json({
        message: "Password Changed Succesfully!",
      });
    } else {
      return res.status(500).json({
        message: "Something Went Wrong , kindly try again after sometime !",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Went Wrong , kindly try again after sometime !",
    });
  }
};

const changeUsernameController = async(req,res) =>{

try {



  
} catch (error) {
  console.error(error)
}

}





module.exports = {
  registerController,
  loginController,
  forgotPassController,
  changePassController,
  changeUsernameController
};

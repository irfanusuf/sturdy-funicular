const jwt = require("jsonwebtoken");
require('dotenv').config()

const verifyToken = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token || token === "" || token === null || token === undefined) {
      return res
        .status(401)
        .json({ message: "Unauthorised | Token not Found!" });
    }
    const secretKey = "kfhusdgbjtfdsafbvmbxvreiytiewiqdpofwcmlxanxcz.xzmcx";

    const verify = await jwt.verify(token, secretKey);

    if (verify) {
      return res.status(200).json({ message: "Token Verified!" });
    } else {
      return res.status(403).json({ message: "Forbidden!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const authorize = async (req, res, next) => {
  try {
    const { token } = req.query;

    if (!token || token === "" || token === null || token === undefined) {
      return res
        .status(401)
        .json({ message: "Unauthorised | Token not Found!" });
    }
    const secretKey =  process.env.SECRET_KEY

    const verify = await jwt.verify(token, secretKey);

    if (verify) {
      next();
    } else {
      return res.status(403).json({ message: "Forbidden!" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { verifyToken, authorize };

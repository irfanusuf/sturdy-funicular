const mongoose = require("mongoose");
require('dotenv').config()

const connectDb = async () => {
  try {
    // so something here
    const URI =   process.env.CLOUDINARY_URI
      

    // const localUri  ="mongodb://localhost:27017/InterServer"

    await mongoose.connect(URI);

    console.log("Db Connected!");

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDb,
};

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // so something here
    const cloudUri =
      "mongodb+srv://irfanusuf33:robolox@robolox.xnj0z.mongodb.net/InterServer?retryWrites=true&w=majority&appName=robolox";

    // const localUri  ="mongodb://localhost:27017/IntereServer"

    await mongoose.connect(cloudUri);

    console.log("Db Connected!");
  } catch (error) {
    //
    console.log(error);
  }
};

module.exports = {
  connectDb,
};

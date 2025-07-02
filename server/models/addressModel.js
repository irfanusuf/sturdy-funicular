



const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    FirstName : {type :String},
    LastName : {type :String},
    street : {type :String},
    city : {type :String},
    District : {type :String},
    state : {type :String},
    pincode : {type:String},
    Country : {type :String},
    email: { type: String, required: true, unique: true },
    mobile: { type: String },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = { Address };

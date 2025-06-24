const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        product: {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          qty: { type: Number },
        },
      },
    ],

    orderValue: { type: Number },
    paymentStatus: { type: Boolean, default: false },
    orderStatus : {type : String , default  : "pending"}
  },
  {
    timestamps: true,
  }
);

module.exports = { Order };

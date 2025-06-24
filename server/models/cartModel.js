const mongoose = require("mongoose");

const Cart = mongoose.model("Cart", {
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product: {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        qty: { type: Number },
      },
    },
  ],

  cartValue: { type: Number },

  couponCode: { type: Boolean, default: false },
});

module.exports = { Cart };

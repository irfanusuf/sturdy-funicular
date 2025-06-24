const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  {
    username: { type: String },
    email: { type: String, require: true },
    password: { type: String },
    profilePic: { type: String },
    mobile: { type: String },
    isAdmin: { type: Boolean, default: false },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    orders: [
      {
        order: {
          orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
        },
      },
    ],
    posts: [
      {
        post: {
          postId: { type: mongoose.Schema.Types.ObjectId,ref: "Post" },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = { User };

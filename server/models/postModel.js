const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  {
    postTitle: { type: String },
    postDesc: { type: String },
    shortDesc: { type: String },
    postImgUrl: { type: String },
    postAuthorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: [{ type: String }],
    hashTags: [{ type: String }],
  },
  { timestamps: true }
);
``;
module.exports = { Post };

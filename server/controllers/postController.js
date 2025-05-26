const { Post } = require("../models/postModel");

const addPost = async (req, res) => {
  try {

    // logic for authorisation   // it should be in dedicated middle ware 


    const { postTitle, postDesc, shortDesc, postImgUrl } = req.body;

    if (postTitle === "" || postDesc === "" || shortDesc === "") {
      return res.status(400).json({ message: "feilds with * are required!" });
    }

    const newPost = await Post.create({
      postTitle,
      postDesc,
      shortDesc,
      postImgUrl,
    });

    if (newPost) {
      res.status(201).json({ message: "Post uploaded!" });
    } else {
      res.status(500).json({ message: "Some Error !" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { addPost };

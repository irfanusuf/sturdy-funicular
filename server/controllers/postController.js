const { Post } = require("../models/postModel");
const { cloudinary } = require("../utilities/cloudinary");

const addPost = async (req, res) => {
  try {

    // logic for authorisation   // it should be in dedicated middle ware 


    const { postTitle, postDesc, shortDesc } = req.body;

    const {image} = req.file.path   /// only works when multer middleware is configured 


    // if not image 

    if (postTitle === "" || postDesc === "" || shortDesc === "") {
      return res.status(400).json({ message: "feilds with * are required!" });
    }

    // upload  image to cloudinary  to get secure Url  which will return secure url

    const secureUrl = ""

    const newPost = await Post.create({
      postTitle,
      postDesc,
      shortDesc,
      postImgUrl : secureUrl,
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

const { Post } = require("../models/postModel");
const cloudinary = require("../utilities/cloudinary");

const addPost = async (req, res) => {
  try {
    // logic for authorisation   // it should be in dedicated middle ware

    const { postTitle, postDesc, shortDesc } = req.body;


    let image = req.body.image
    // let image = req.file.path  // when the image is a binary  file and not base 64 url encoded  



    if (image === "") {
      return res.status(400).json({message : "Image File missing!"})
    }


    if (postTitle === "" || postDesc === "" || shortDesc === "") {
      return res.status(400).json({ message: "feilds with * are required!" });
    }

    // upload  image to cloudinary  to get secure Url  which will return secure url

    const upload = await cloudinary.uploader.upload(image);

    const secureUrl = upload.secure_url;

    const newPost = await Post.create({
      postTitle,
      postDesc,
      shortDesc,
      postImgUrl: secureUrl,
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

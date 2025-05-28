const { Post } = require("../models/postModel");
const  cloudinary  = require("../utilities/cloudinary");


const addPost = async (req, res) => {
  try {

    // logic for authorisation   // it should be in dedicated middle ware 


    const { postTitle, postDesc, shortDesc } = req.body;

    const imagePath  = req.file.path   /// only works when multer middleware is configured 


    console.log(imagePath)
    // if not image 

    if(!imagePath ){
      return res.status(400).json({ message: "image is  required!" });
    }

    if (postTitle === "" || postDesc === "" || shortDesc === "") {
      return res.status(400).json({ message: "feilds with * are required!" });
    }

    // upload  image to cloudinary  to get secure Url  which will return secure url

     const upload = await cloudinary.uploader.upload(imagePath)


    const secureUrl = upload.secure_url

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

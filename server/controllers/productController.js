const { Product } = require("../models/productModel");
const cloudinary = require("../utilities/cloudinary");
const { resHandler } = require("../utilities/resHandler");

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, discount, colors, sizes } = req.body;

    let image;


    if (req.file !== undefined) {
      image = req.file.path
    }

    if (!req.body) {
      return resHandler(res, 400, "Input Payload not Found!");
    }

    let upload;


    if (image !== undefined || image !== "") {
      upload = await cloudinary.uploader.upload(image);
    }

    let product = await Product.create({ name, description, price, discount });

    if (product) {
      product.colors.push(colors);
      product.sizes.push(sizes);
      product.productImgUrls.push(upload.secure_url);

      await product.save();
      return resHandler(res, 201, "Product created Succesfuly", product);
    } else {
      return resHandler(res, 500, "Something Went Wrong!");
    }
  } catch (error) {
    console.error(error);
    return resHandler(res, 500, "Server Error!");
  }
};


exports.editProduct = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}


exports.archiveProduct = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}


exports.getAllProducts = async(req,res) =>{
    try {
        
        const products = await Product.find()

        if(products.length > 0){
            resHandler(res, 200 , "Products Found" , products)
        }

    } catch (error) {
        console.error(error)
    }
}


exports.getProductById = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}
const { Cart } = require("../models/cartModel");
const { Product } = require("../models/productModel");
const { User } = require("../models/userModel");
const { resHandler } = require("../utilities/resHandler");

exports.addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.query;

    const { quantity } = req.body;
    //

    if (!userId || !productId) {
      return resHandler(res, 400, "No params Found!");
    }

    let user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return resHandler(res, 404, "Entities not Found!");
    }

    let products = [];

    let arrObject = {
      productId: productId,
      quantity: quantity,
    };

    products.push(arrObject);

    if (user.cartId === undefined) {
      let cartValue = product.price * quantity;

      const cart = await Cart.create({
        userId,
        products,
        cartValue,
      });

      if (cart) {
        user.cartId = cart._id;
        await user.save();
        return resHandler(res, 200, "Cart Created!", cart);
      }
    } else {
      let oldcart = await Cart.findById(user.cartId);

      oldcart.products.push(arrObject);

      const incrementnCartValue = product.price * quantity;

      oldcart.cartValue = oldcart.cartValue + incrementnCartValue;

      await oldcart.save();

      return resHandler(res, 200, "Product Added!", oldcart);
    }
  } catch (error) {
    console.error(error);
    return resHandler(res, 500, "server Error");
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.query;

    if (!userId || !productId) {
      return resHandler(res, 400, "No params Found!");
    }

    let user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return resHandler(res, 404, "Entities not Found!");
    }

    let cart = await Cart.findById(user.cartId);

    const index = cart.products.findIndex(
      (element) => element.productId.toString() === productId
    );

    if (index === -1) {
      return resHandler(res, 404, "Product not found in your cart !");
    }

    const decrementValue = product.price * cart.products[index].quantity;

    cart.products.splice(index, 1);
    cart.cartValue = cart.cartValue - decrementValue;

    if (cart.products.length === 0) {
      cart.cartValue = 0;
    }

    await cart.save();

    return resHandler(res, 200, "Product removed!", cart);


  } catch (error) {
    console.error(error);
    return resHandler(res, 500, "Server Error!");
  }
};




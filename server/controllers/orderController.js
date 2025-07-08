const { Order } = require("../models/orderModel");
const { Product } = require("../models/productModel");
const { User } = require("../models/userModel");
const { resHandler } = require("../utilities/resHandler");

exports.createOrder = async (req, res) => {
  // create Order for single product
  try {
    const userId = req.userId; // token // logged in user's userId
    const { productId } = req.query;
    const { addressId } = req.query;
    const { quantity } = req.body;
    let productsArr = [];
    let orderValue = 0;

    if (!quantity || quantity === "") {
      return resHandler(res, 400, "Qty Feild is necessary ");
    }

    let user = await User.findById(userId);

    const product = await Product.findById(productId);

    if (!user || !product) {
      return resHandler(res, 404, "Some query Params are missing!");
    }

    const orderProduct = { productId, quantity };

    productsArr.push(orderProduct);

    orderValue = quantity * product.price; // value is not calculated in the right format

    if (user.addresses && user.addresses.includes(addressId) === false) {
      return resHandler(
        res,
        400,
        "This AddressId doesnot belong to logged in user!"
      );
    }

    const order = await Order.create({
      userId,
      addressId,
      products: productsArr,
      orderValue: orderValue,
    });

    if (order) {
      user.orders.push(order._id);
      await user.save();

      resHandler(res, 200, "Order created Succesfully!", order);
    }
  } catch (error) {
    console.error(error);
    return resHandler(res, 500, "Server Error!");
  }
};



exports.updateOrderStatus = async (req, res, orderStatus) => {
  try {
    const { orderId } = req.params;

    let order = await Order.findById(orderId);

    if (!order) {
      return resHandler(res, 404, "Order not Found!");
    }

    order.orderStatus = orderStatus;

    await order.save();

    return resHandler(res, 200, `Order ${orderStatus}!`);
  } catch (error) {
    console.error(error);
    return resHandler(res, 500, "Server Error!");
  }
};

// exports.updateOrder =  async(req,)

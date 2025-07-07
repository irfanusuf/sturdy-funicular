const { Address } = require("../models/addressModel");
const { User } = require("../models/userModel");
const { resHandler } = require("../utilities/resHandler");

exports.createAddress = async (req, res) => {
  try {
    const userId = req.userId;

    let user = await User.findById(userId);

    if (!user) {
      return resHandler(res, 404, "User Not Found!");
    }

    const {
      firstName,
      lastName,
      street,
      city,
      district,
      state,
      pincode,
      country,
      email,
      mobile,
    } = req.body;

    if (user.addresses.length > 2) {
      return resHandler(res, 400, "Only 3 addresses are allowed!");
    }

    const newAddress = await Address.create({
      firstName,
      lastName,
      street,
      city,
      district,
      state,
      pincode,
      country,
      email,
      mobile,
      userId,
    });

    if (newAddress) {
      user.addresses.push(newAddress._id);
      await user.save();
      return resHandler(res, 201, "Address created", newAddress);
    }
  } catch (error) {
    console.error(error);
    return resHandler(res, 500, "Server Error");
  }
};

exports.updateAddress = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

exports.removeAddress = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

exports.getAllAddresses = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

exports.getAddressById = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

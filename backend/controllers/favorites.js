require("dotenv").config();
const Favorite = require("../models/Favorite");
const { StatusCodes } = require("http-status-codes");

const addToFavorites = async (req, res, next) => {
  let { city, temperature, text } = req.body;
  try {
    let favorite = new Favorite(city, temperature, text);
    favorite = await favorite.save();
    res.status(StatusCodes.OK).json(favorite);
  } catch (error) {
    console.log(error);
  }
};

const getAllFromFavorites = async (req, res, next) => {
  try {
    const [favorites, _] = await Favorite.findAll();
    res.status(StatusCodes.OK).json(favorites);
  } catch (error) {
    console.log(error);
  }
};

const removeFromFavorites = async (req, res, next) => {
  let { city } = req.body;
  try {
    const [favorites, _] = await Favorite.deleteCity(city);
    res.status(StatusCodes.OK).json("Deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllFromFavorites,
  addToFavorites,
  removeFromFavorites,
};

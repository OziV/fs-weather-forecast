const Favorite = require("../models/Favorite");
const { StatusCodes } = require("http-status-codes");

const isDuplicateCity = async (req, res, next) => {
  let { city } = req.body;
  try {
    const [favorites, _] = await Favorite.findByCity(city);
    if (favorites.length > 0) {
      res.status(StatusCodes.NOT_ACCEPTABLE).json(favorites);
    } else {
      next();
    }
  } catch (error) {
      console.log(error);
  }
};

module.exports = isDuplicateCity;

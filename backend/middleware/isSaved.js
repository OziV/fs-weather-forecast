const Favorite = require("../models/Favorite");
const { StatusCodes } = require("http-status-codes");

const isSaved = async (req, res, next) => {
  const { name } = req.params;
  try {
    const [favorites, _] = await Favorite.findByCity(name);
    if (favorites.length > 0) {
      const qObj = {
        Temperature: {
          Metric: {
            Value: "6",
          },
        },
      };
      let result = [[qObj], null];
      qObj.Temperature.Metric.Value = favorites[0].temperature;
      qObj.WeatherText = favorites[0].text;
      res.status(StatusCodes.OK).json(result);
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = isSaved;

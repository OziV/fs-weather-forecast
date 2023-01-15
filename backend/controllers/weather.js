require("dotenv").config();
const axios = require("axios");
const { StatusCodes } = require("http-status-codes");

const URL_AUTOCOMPLETE = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`;
const URL_CURRENT_CONDITIONS = `http://dataservice.accuweather.com/currentconditions/v1/`;

const locationAutocomplete = async (req, res, next) => {
  let resultUrl;
  const { name } = req.query;
  const queryObj = {};
  if (name) {
    let words = name.split(" ");
    if (words.length > 1) {
      let cityName = words[0].concat("%20", words[1]);
      queryObj.q = cityName;
    } else {
      queryObj.q = words[0];
    }
  }
  try {
    resultUrl = `${URL_AUTOCOMPLETE}?apikey=${process.env.API_KEY}&q=${queryObj.q}`;
    let response = await axios.get(resultUrl);
    let responseData = await response.data[0].Key;
    res.status(StatusCodes.OK).json(responseData);
  } catch (error) {
    res.json(error.code);
  }
};

const getCurrentWeather = async (req, res, next) => {
  let resultUrl;
  const { id } = req.params;
  const queryObj = {};
  if (id) {
    queryObj.id = id;
  }
  try {
    resultUrl = `${URL_CURRENT_CONDITIONS}${queryObj.id}?apikey=${process.env.API_KEY}`;
    let response = await axios.get(resultUrl);
    let responseData = await response.data[0].Key;
    res.status(StatusCodes.OK).json(responseData);
  } catch (error) {
    res.json(error.code);
  }
};

module.exports = {
  locationAutocomplete,
  getCurrentWeather,
};

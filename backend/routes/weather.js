const express = require("express");
const router = express.Router();

const {
  locationAutocomplete,
  getCurrentWeather,
} = require("../controllers/weather");

router.route("/find").get(locationAutocomplete);
router.route("/:id").get(getCurrentWeather);

module.exports = router;

const express = require("express");
const router = express.Router();
const isSaved = require("../middleware/isSaved");

const {
  locationAutocomplete,
  getCurrentWeather,
} = require("../controllers/weather");

router.route("/find").get(locationAutocomplete);
router.route("/:id/:name").get(isSaved, getCurrentWeather);

module.exports = router;

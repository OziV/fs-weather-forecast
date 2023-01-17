const express = require("express");
const router = express.Router();
const isDuplicateCity = require("../middleware/duplicate.js");

const {
  getAllFromFavorites,
  addToFavorites,
  getFavoriteCity,
  removeFromFavorites,
} = require("../controllers/favorites");

router
  .route("/")
  .get(getAllFromFavorites)
  .post(
    isDuplicateCity,
    addToFavorites);

router.route("/:city").get(getFavoriteCity).delete(removeFromFavorites);

module.exports = router;

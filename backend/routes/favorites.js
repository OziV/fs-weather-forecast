const express = require("express");
const router = express.Router();
const isDuplicateCity = require("../middleware/duplicate.js");

const {
  getAllFromFavorites,
  addToFavorites,
  removeFromFavorites,
} = require("../controllers/favorites");

router
  .route("/")
  .get(getAllFromFavorites)
  .post(isDuplicateCity, addToFavorites)
  .delete(removeFromFavorites);

module.exports = router;

const express = require("express");
const cors = require("cors");
const app = express();
const weatherRouter = require("./routes/weather");
const favoritesRouter = require("./routes/favorites");

app.use(cors());

app.use(express.json());
app.use("/api/v1/weather", weatherRouter);
app.use("/api/v1/favorites", favoritesRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

const port = process.env.PORT || 8080;
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`SERVER IS LISTENING ON PORT \`${port}\`...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

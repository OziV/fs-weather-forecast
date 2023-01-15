const express = require("express");
const app = express();




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
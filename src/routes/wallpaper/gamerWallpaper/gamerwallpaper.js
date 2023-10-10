// Modulos
const express = require("express");
let dev = "bruno";
// config express
const app = express.Router();

// import das api
const path = require("path");
const download = require("../../../functions");

// rotas
app.get("/", async (req, res) => {
  const jsonData = require("./utils/gamer.json");
  const randIndex = Math.floor(Math.random() * jsonData.length);

  const randKey = jsonData[randIndex];
  download(randKey, "./gm.jpg", function () {
    res.sendFile(path.resolve("./gm.jpg"));
  });
});

module.exports = app;

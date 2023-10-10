// Modulos
const express = require("express");
let dev = "bruno";
// config express
const app = express.Router();
const path = require("path");
const download = require("../../../functions");

// rotas
app.get("/", async (req, res) => {
  const jsonData = require("./utils/cyberSpace.json");
  const randIndex = Math.floor(Math.random() * jsonData.length);

  const randKey = jsonData[randIndex];
  download(randKey, "./gb.jpg", function () {
    res.sendFile(path.resolve("./gb.jpg"));
  });
});

module.exports = app;

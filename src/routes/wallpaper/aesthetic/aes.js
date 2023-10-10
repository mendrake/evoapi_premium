// Modulos
const express = require("express");
let dev = "bruno";
// config express
const app = express.Router();
const path = require("path");
const download = require("../../../functions");

// rotas
app.get("/", async (req, res) => {
  const jsonData = require("./utils/aes.json");
  const randIndex = Math.floor(Math.random() * jsonData.length);
  const randKey = jsonData[randIndex];
  download(randKey, "./aes.jpg", function () {
    res.sendFile(path.resolve("./aes.jpg"));
  });
});

module.exports = app;

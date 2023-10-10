// Modulos
const express = require("express");
let dev = "@Caussz";

// config express
const app = express.Router();

// import das api
const pinterest = require("./utils/index");

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }
  pinterest(text).then((results) => {
    const jsonData = results;
    const randIndex = Math.floor(Math.random() * jsonData.length);
    const randKey = jsonData[randIndex];
    res.status(200).json({ img: randKey });
  });
});

module.exports = app;

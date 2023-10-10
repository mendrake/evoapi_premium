// Modulos
const express = require("express");
let dev = "Bruno";

// config express
const app = express.Router();

// import das api
const getAnime = require("./utils/api");

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }
  getAnime(text).then((filme) => {
    res.status(200).json({
      results: filme,
      dev,
    });
  });
});

module.exports = app;

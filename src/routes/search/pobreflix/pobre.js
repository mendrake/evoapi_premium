// Modulos
const express = require("express");
let dev = "@Caussz";

// config express
const app = express.Router();

// import das api
const pobreflix = require("./utils/filmes");

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }
  pobreflix(text).then((filme) => {
    res.status(200).json({
      results: filme,
      dev,
    });
  });
});

module.exports = app;

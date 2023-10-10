// Modulos
const express = require("express");
let dev = "@Caussz";

// config express
const app = express.Router();

// import das api
const google = require("./utils/search");

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }
  google(text).then((results) => res.status(200).json({ results, dev }));
});

module.exports = app;

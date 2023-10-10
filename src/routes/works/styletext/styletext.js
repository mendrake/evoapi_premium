// Modulos
const express = require("express");

// config express
const app = express.Router();
let dev = "@Caussz";

// import das api
const style = require("./utils/api");

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }
  style(text).then((result) => {
    res.status(200).json({
      results: result,
      dev,
    });
  });
});

module.exports = app;

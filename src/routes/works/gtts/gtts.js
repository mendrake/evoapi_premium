// Modulos
const express = require("express");

// config express
const app = express.Router();
let dev = "@Caussz";

// import das api
const tts = require("./utils/api");

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  const idioma = req.query.idioma;
  if (!text || !idioma) {
    return res
      .status(400)
      .json({ error: "Parâmetro text ou idioma não fornecido" });
  }

  res.status(200).json({ url: tts(text, idioma), dev });
});

module.exports = app;

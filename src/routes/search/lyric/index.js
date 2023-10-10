const axios = require("axios");
// Modulos
const express = require("express");

// config express
const app = express.Router();

// import das api
const lyrics = require("lyricsongg");
// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }
  lyrics.getURL(text).then((response) => {
    lyrics.getLyrics(response).then((response) => {
      res.status(200).json({ liryc: response });
    });
  });
});

module.exports = app;

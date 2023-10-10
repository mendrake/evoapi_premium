// Modulos
const express = require("express");
let dev = "@Caussz";
// config express
const app = express.Router();

// import das api
const twitter = require("./utils/twitterdl");

app.get("/", async (req, res) => {
  const link = req.query.link;
  if (!link) {
    return res.status(400).json({ error: "Parâmetro link não fornecido" });
  }

  twitter(link).then((twDl) => {
    res.status(200).json({
      descricao: twDl.desc,
      capa: twDl.capa,
      videoHD: twDl.HD,
      videoSD: twDl.SD,
      audioVideo: twDl.audio,
      dev,
    });
  });
});

module.exports = app;

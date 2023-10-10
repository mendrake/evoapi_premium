const fs = require("fs");
const express = require("express");
const app = express.Router();
const { spotifydl, spotInfo, playlist } = require("./utils/index.js");

app.get("/dl", async (req, res) => {
  const link = req.query.link;
  if (!link) {
    return res.status(400).json({ error: "Parâmetro link não fornecido" });
  }

  try {
    spotifydl(link).then((mp3Buffer) => {
      const decodedData = Buffer.from(mp3Buffer, "base64");
      // Enviar o arquivo como resposta
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Content-Disposition", "attachment; filename=evobot.mp3");
      res.send(decodedData);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao processar a música" });
  }
});

app.get("/", async (req, res) => {
  const link = req.query.link;
  if (!link) {
    return res.status(400).json({ error: "Parâmetro link não fornecido" });
  }

  spotInfo(link).then((infos) => {
    res.status(200).json({
      infos,
      dllink:
        "http://premium.ca1.esthosting.com.br:25517/download/spotify/dl/?link=" +
        link,
    });
  });
});

app.get("/playlist", async (req, res) => {
  const link = req.query.link;
  if (!link) {
    return res.status(400).json({ error: "Parâmetro link não fornecido" });
  }
  playlist(link).then((mp3Buffer) => {
    console.log(mp3Buffer);
    // const decodedData = Buffer.from(mp3Buffer, "base64");

    // //  Enviar o arquivo como resposta
    // res.setHeader("Content-Type", "audio/mpeg");
    // res.setHeader("Content-Disposition", "attachment; filename=musica.mp3");
    // res.send(decodedData);
  });
});
module.exports = app;

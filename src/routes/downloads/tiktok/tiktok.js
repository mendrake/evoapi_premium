// Modulos
const express = require("express");
let dev = "@Caussz";
// config express
const app = express.Router();

// import das api
const ttdl = require("./utils/ttdownloader");

app.get("/", async (req, res) => {
  const link = req.query.link;
  if (!link) {
    return res.status(400).json({ error: "Parâmetro link não fornecido" });
  }

  ttdl(link).then((ttDl) => {
    res.status(200).json({
      audio: ttDl.audio,
      capa: ttDl.capa,
      criadorVideo: ttDl.criador,
      videoSemMarca: ttDl.videoSemWt,
      videoOriginal: ttDl.videoOriginal,
      capaDinamica: ttDl.dynamicCapa,
      regiao: ttDl.regiao,
      desc: ttDl.desc,
      dev,
    });
  });
});

module.exports = app;

// Modulos
const express = require("express");

// config express
const app = express.Router();

// import das api
const igdl = require("./utils/api");

// rotas
app.get("/", async (req, res) => {
  const link = req.query.link;
  if (!link) {
    return res.status(400).json({ error: "Parâmetro link não fornecido" });
  }

  igdl(link).then((insta) => {
    res.status(200).json({ download: insta.url, dev: insta.criador });
  });
});

module.exports = app;

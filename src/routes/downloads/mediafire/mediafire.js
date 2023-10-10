// Modulos
const express = require("express");

// config express
const app = express.Router();

// import das api
const mediafireDl = require("./utils/api");

// rotas
app.get("/", async (req, res) => {
  const link = req.query.link;
  if (!link) {
    return res.status(400).json({ error: "Parâmetro link não fornecido" });
  }

  mediafireDl(link).then((media) => {
    res.status(200).json({ media });
  });
});

module.exports = app;

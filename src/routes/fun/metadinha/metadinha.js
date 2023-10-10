// Modulos
const express = require("express");

// config express
const app = express.Router();

// import das api
const metad = require("./utils/metadinha.json");

// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ metad });
});

module.exports = app;

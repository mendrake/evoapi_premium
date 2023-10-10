// Modulos
const express = require("express");

// config express
const app = express.Router();

// Import das rotas
const metadinha = require("./metadinha/metadinha");
const adivinha = require("./adivinha/adivinha");
const amv = require("./amv/amv");
const imgflip = require("./imgflip/imgflip");
// config do app e middleware
app.use("/metadinha", metadinha);
app.use("/adivinha", adivinha);
app.use("/amv", amv);
app.use("/imgflip", imgflip);
//rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de diversao" });
});

module.exports = app;

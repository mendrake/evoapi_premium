// Modulos
const express = require("express");
let dev = "bruno";
// config express
const app = express.Router();

// import das api
const bandeira = require("./utils/adivinhaBandeira.json");
const personagem = require("./utils/adivinhaPersonagem.json");

// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de adivinha" });
});

app.get("/bandeira", async (req, res) => {
  res.status(200).json({ bandeira, dev });
});

app.get("/personagem", async (req, res) => {
  res.status(200).json({ personagem, dev });
});

module.exports = app;

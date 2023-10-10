// Modulos
const express = require("express");
// config express
const app = express.Router();

// import das rotas
const textpro = require("./logos/textpro");

// config do app e middleware
app.use("/textpro", textpro);

// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de donwload" });
});

module.exports = app;

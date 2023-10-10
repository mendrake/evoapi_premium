// Modulos
const express = require("express");
// config express
const app = express.Router();

// import das rotas
const ephoto = require("./logos/ephoto");

// config do app e middleware
app.use("/ephoto", ephoto);

// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis Ephoto360" });
});

module.exports = app;

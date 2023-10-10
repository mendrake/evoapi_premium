// Modulos
const express = require("express");

// config express
const app = express.Router();

// Import das rotas
const tradutor = require("./tradutor/tradutor");
const style = require("./styletext/styletext");
const gtts = require("./gtts/gtts");
const attp = require("./attp/attp");

// config do app e middleware
app.use("/tradutor", tradutor);
app.use("/styletext", style);
app.use("/gtts", gtts);
app.use("/attp", attp);
//rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de ferramentas" });
});

module.exports = app;

// Modulos
const express = require("express");

// config express
const app = express.Router();

// Import das rotas
const gitStalk = require("./github/github");
// config do app e middleware
app.use("/github", gitStalk);
//rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de stalk" });
});

module.exports = app;

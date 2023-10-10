// Modulos
const express = require("express");
// config express
const app = express.Router();

// import das rotas
const autoreply = require("./autoreply/");
const img = require("./imagegenerator");

app.use("/autoreply", autoreply);
app.use("/imagegenerator", img);

// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis ia" });
});

module.exports = app;

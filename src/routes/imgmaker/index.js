// Modulos
const express = require("express");
// config express
const app = express.Router();

// import das rotas
const toa = require("./toanime/toanime");
const tocartoon = require("./tocartoon");
const sketch = require("./sketch");
const toanime2 = require("./toanime2");
// config do app e middleware

app.use("/tocartoon", tocartoon);
app.use("/sketch", sketch);
app.use("/toanime", toanime2);
// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis toanime360" });
});

module.exports = app;

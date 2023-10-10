// Modulos
const express = require("express");
let dev = "@Caussz";
const path = require("path");
const download = require("../../../functions");
// config express
const app = express.Router();

// import das api
const attp = require("./utils/api");

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }
  attp(text).then((result) => {
    download(result, "./attp.gif", function () {
      res.sendFile(path.resolve("./attp.gif"));
    });
  });
});

module.exports = app;

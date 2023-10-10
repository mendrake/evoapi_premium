// Modulos
const express = require("express");
let dev = "bruno";
// config express
const app = express.Router();

// import das api
const amv = require("./utils/amv.json");

// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ amv, dev });
});

module.exports = app;

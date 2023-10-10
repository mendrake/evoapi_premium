// Modulos
const express = require("express");

// config express
const app = express.Router();

// Import das rotas
const inDl = require("./instagram/insta");
const twDl = require("./twitter/twitter");
const ttDl = require("./tiktok/tiktok");
const mediafire = require("./mediafire/mediafire");
const spot = require("./spotify/spotify");
// config do app e middleware

// config do app e middleware

//app.use("/instagram", inDl);
app.use("/twitter", twDl);
app.use("/tiktok", ttDl);
app.use("/mediafire", mediafire);
app.use("/spotify", spot);
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de donwload" });
});

module.exports = app;

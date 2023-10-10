// Modulos
const express = require("express");

// config express
const app = express.Router();

const cyber = require("./cyberSpace/cyber");
const game = require("./gamerWallpaper/gamerwallpaper");
const aes = require("./aesthetic/aes");


app.use("/cyber", cyber);
app.use("/gamewallpaper", game);
app.use("/aesthetic", aes);


app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de wallpaper" });
});

module.exports = app;

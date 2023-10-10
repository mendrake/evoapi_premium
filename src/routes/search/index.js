// Modulos
const express = require("express");

// config express
const app = express.Router();

// Import das rotas
const pobreflix = require("./pobreflix/pobre");
const anime = require("./anime/anime");
const games = require("./epicGames/freeGames");
const google = require("./google/google");
const pinterest = require("./pinterest/pinterest");
const swal = require("./swal/swal");
const imdb = require("./imdb/imdb");
const lyric = require("./lyric");
// config do app e middleware
app.use("/filme", pobreflix);
app.use("/anime", anime);
app.use("/epic", games);
app.use("/google", google);
app.use("/pinterest", pinterest);
app.use("/searchwallpaper", swal);
app.use("/imdb", imdb);
app.use("/lyric", lyric);

//rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de pesquisa" });
});

module.exports = app;

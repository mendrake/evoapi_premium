// Modulos
const express = require("express");
const axios = require("axios");

// config express
const app = express.Router();

// import das api

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }

  let fids = await axios.get(
    `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
  );

  res
    .status(200)
    .json({
      title: fids.data.Title,
      Year: fids.data.Year,
      Rated: fids.data.Rated,
      Released: fids.data.Released,
      Runtime: fids.data.Runtime,
      Genre: fids.data.Genre,
      Director: fids.data.Director,
      Writer: fids.data.Writer,
      Actors: fids.data.Actors,
      Plot: fids.data.Language,
      Country: fids.data.Country,
      Awards: fids.data.Awards,
      BoxOffice: fids.data.BoxOffice,
      Production: fids.data.Production,
      imdbRating: fids.data.imdbRating,
      imdbVotes: fids.data.imdbVotes,
    });
}),
  (module.exports = app);

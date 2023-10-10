// Modulos
const express = require("express");
const { EpicFreeGames } = require("epic-free-games");

const epicFreeGames = new EpicFreeGames({
  country: "BR",
  locale: "pt-BR",
  includeAll: true,
});

// config express
const app = express.Router();
let dev = "@Caussz";

// import
const games = require("./utils/epic");

// rotas
app.get("/", async (req, res) => {
  games().then((result) => res.status(200).json({ epic: result, dev }));
});
// Rota para listar todos os jogos gratuitos
app.get("/games", async (req, res) => {
  try {
    const games = await epicFreeGames.getGames();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Rota para buscar detalhes de um jogo específico
app.get("/games/:id", async (req, res) => {
  try {
    const gameId = req.params.id;
    const gameDetails = await epicFreeGames.getGameDetails(gameId);

    if (!gameDetails) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.json(gameDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Rota para listar os próximos jogos gratuitos
app.get("/upcoming", async (req, res) => {
  try {
    const upcomingGames = await epicFreeGames.getUpcomingGames();
    res.json(upcomingGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Rota para listar os jogos gratuitos por região
app.get("/games/region/:region", async (req, res) => {
  try {
    const region = req.params.region;
    const gamesByRegion = await epicFreeGames.getGamesByRegion(region);

    if (gamesByRegion.length === 0) {
      return res
        .status(404)
        .json({ error: "No games found for the specified region" });
    }

    res.json(gamesByRegion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Rota para listar os jogos gratuitos de uma data específica
app.get("/games/date/:date", async (req, res) => {
  try {
    const date = req.params.date;
    const gamesByDate = await epicFreeGames.getGamesByDate(date);

    if (gamesByDate.length === 0) {
      return res
        .status(404)
        .json({ error: "No games found for the specified date" });
    }

    res.json(gamesByDate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = app;

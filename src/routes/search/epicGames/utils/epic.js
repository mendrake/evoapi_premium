const { EpicFreeGames } = require("epic-free-games");

const epicFreeGames = new EpicFreeGames({
  country: "BR",
  locale: "pt-BR",
  includeAll: true,
});

async function myGames() {
  const myGames = {};
  await epicFreeGames.getGames().then((res) => {
    (myGames.totalGames = res.currentGames.length + res.nextGames.length),
      (myGames.currentGames = res.currentGames),
      (myGames.nextGames = res.nextGames);
  });
  return myGames;
}

module.exports = myGames;

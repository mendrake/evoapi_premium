const translate = require("translate-google");
const malScraper = require("mal-scraper");

translate.engine = "google";

async function getAnime(name) {
  const resAnime = {
    info: "",
    outros: "",
  };
  await malScraper.getInfoFromName(name).then(async (anime) => {
    let infoAnime = {
      desc: anime.synopsis,
      score: anime.score,
      genero: anime.genres,
      episodios: anime.episodes,
      duracao: anime.duration,
      data: anime.aired,
    };
    let outros = {
      url: anime.url,
      img: anime.picture,
      titulo: anime.title,
      treiler: anime.trailer,
      studio: anime.studiosm,
      autor: anime.authors,
    };

    let textoToPt = await translate(infoAnime.desc, { to: "pt" });
    infoAnime.desc = textoToPt;
    resAnime.info = infoAnime;
    resAnime.outros = outros;
  });
  return resAnime;
}

module.exports = getAnime;

const cheerio = require("cheerio");
const axios = require("axios");
const fetchData = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

function pobreflix(texto) {
  return new Promise(async (resolve, reject) => {
    const content = await fetchData(`https://pobreflix.biz/?s=${texto}`);
    const $ = cheerio.load(content);
    let filmes = [];
    $("article").each((i, e) => {
      const avaliasao = $(e).find("div > div.meta > span").text();
      const nome = $(e).find("div > div.title > a").text();
      const link = $(e).find(" div> a").attr("href");
      const img = $(e).find(" div > div > a > img").attr("src");
      filmes.push({
        nome: nome,
        link: link,
        avaliacao: avaliasao,
        img: img,
      });
      resolve(filmes);
    });
  });
}

module.exports = pobreflix;

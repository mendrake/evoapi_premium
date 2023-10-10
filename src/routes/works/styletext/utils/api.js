const axios = require("axios");
const cheerio = require("cheerio");

async function styletext(texto) {
  try {
    const { data } = await axios.get(
      "http://qaz.wtf/u/convert.cgi?text=" + texto
    );
    let $ = cheerio.load(data);
    let hasil = [];
    $("table > tbody > tr").each(function (a, b) {
      hasil.push({
        nome: $(b).find("td:nth-child(1) > span").text(),
        fonte: $(b).find("td:nth-child(2)").text().trim(),
      });
    });
    return hasil;
  } catch (error) {
    throw error;
  }
}

module.exports = styletext;

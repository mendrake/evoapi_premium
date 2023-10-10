//const ig = require("instagram-url-dl");

async function igdl(link) {
  const obj = {
    url: link,
    outros: "",
    criador: "@Caussz",
  };
  await ig(link)
    .then((res) => {
      obj.url = res.data[0].url;
      obj.outros = res.data;
    })
    .catch((err) => {
      console.error(err);
    });

  return obj;
}
module.exports = igdl;

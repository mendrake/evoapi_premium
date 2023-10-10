const axios = require("axios");
const fs = require("fs");
let BodyForm = require("form-data");

function TelegraPh(Path) {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path))
      return reject(new Error("Arquivo não encontrado"));
    try {
      const form = new BodyForm();
      form.append("file", fs.createReadStream(Path));
      const data = await axios({
        url: "https://telegra.ph/upload",
        method: "POST",
        headers: {
          ...form.getHeaders(),
        },
        data: form,
      });
      return resolve("https://telegra.ph" + data.data[0].src);
    } catch (err) {
      return reject(new Error(String(err)));
    }
  });
}
let getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

module.exports = {
  getBuffer,
  getRandom,
  TelegraPh,
};

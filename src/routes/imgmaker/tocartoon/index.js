const express = require("express");
let dev = "bruno";
// config express
const app = express.Router();
const path = require("path");
const download = require("../../../functions");

app.get("/", async (req, res) => {
  var url = req.query.url;
  if (!url)
    return res.status(404).send({
      message: `insira o parâmetro url`,
    });
  const axios = require("axios");

  const options = {
    method: "POST",
    url: "https://3d-cartoon-face.p.rapidapi.com/run",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "01636c10f7msh4b05f5ff4263b66p1528acjsn23a7f91b83fa",
      "X-RapidAPI-Host": "3d-cartoon-face.p.rapidapi.com",
    },
    data: {
      image: url,
      render_mode: "3d",
      output_mode: "url",
    },
  };

  try {
    const response = await axios.request(options);
    download(response.data.output_url, "./temp/lol.jpg", async function () {
      res.sendFile(path.resolve("./temp/lol.jpg"));
    });
  } catch (error) {
    console.error(error);
  }
});
module.exports = app;

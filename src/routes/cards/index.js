const express = require("express");
// config express
const app = express.Router();
const canvafy = require("canvafy");
const { goodbye, welcome } = require("wlcanvass");
const fs = require("fs");
app.get("/menucard", async (req, res) => {
  const img = req.query.img;
  const bg = req.query.bg;
  const title = req.query.title;
  const desc = req.query.desc;

  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  if (!title)
    return res.status(404).send({
      message: `insira o parâmetro title`,
    });

  if (!desc)
    return res.status(404).send({
      message: `insira o parâmetro desc`,
    });

  const logo = new canvafy.WelcomeLeave()
    .setAvatar(img)
    .setBackground(
      "image",
      bg || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBylWi-13FkvoCjXu2slaH15NWXejU8SFk1Q&usqp=CAU"
    )
    .setTitle(title)
    .setDescription(desc)
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.3)
    .build();

  console.log(logo);

  logo
    .then(async (img) => {
      const sendImg = () => {
        const decodedData = Buffer.from(img, "base64");

        console.log(img);
        res.setHeader("Content-Type", "image/png");
        res.setHeader("Content-Disposition", "attachment; filename=evobot.png");
        res.send(decodedData);
      };
      await sendImg();
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/spotifycard", async (req, res) => {
  const img = req.query.img;
  const bg = req.query.bg;
  const title = req.query.title;
  const author = req.query.desc;
  const album = req.query.album;
  const tempo = req.query.tempo;

  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  if (!title)
    return res.status(404).send({
      message: `insira o parâmetro title`,
    });

  if (!author)
    return res.status(404).send({
      message: `insira o parâmetro desc`,
    });

  if (!album)
    return res.status(404).send({
      message: `insira o parâmetro album`,
    });

  if (!tempo)
    return res.status(404).send({
      message: `insira o parâmetro tempo`,
    });

  const logo = new canvafy.WelcomeLeave()
    .setAuthor(author)
    .setAlbum(album)
    .setTimestamp(tempo)
    .setImage(img)
    .setTitle(title)
    .setBlur(5)
    .setOverlayOpacity(0.7)
    .build();

  console.log(logo);

  logo
    .then((img) => {
      const sendImg = () => {
        const decodedData = Buffer.from(img, "base64");

        console.log(img);
        res.setHeader("Content-Type", "image/png");
        res.setHeader("Content-Disposition", "attachment; filename=evobot.png");
        res.sendFile(decodedData);
      };

      sendImg();
    })
    .catch((err) => {
      console.log(err);
    });
});
/// rotas

// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis de cards" });
});

module.exports = app;

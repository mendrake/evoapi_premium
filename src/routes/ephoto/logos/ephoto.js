// Modulos
const express = require("express");
const { Maker } = require("imagemaker.js");
const path = require("path");
const download = require("../../../functions");

let creator = "Bruno";
// config express
const app = express.Router();
// Funcoes
app.get("/dragonball", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.get("/grafite", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://ephoto360.com/hieu-ung-chu/tao-cover-graffiti-online-181.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/fire", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://ephoto360.com/hieu-ung-chu/tao-avatar-rong-lua-111.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/messi", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .Ephoto360(
      "https://ephoto360.com/hieu-ung-the-thao/tao-ao-dau-messi-barca-truc-tuyen-268.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/chelsea", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });
  new Maker()
    .Ephoto360(
      "https://ephoto360.com/hieu-ung-the-thao/tao-anh-cup-premier-league-263.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/neymar", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });
  new Maker()
    .Ephoto360(
      "https://ephoto360.com/hieu-ung-the-thao/tao-hieu-ung-ao-thi-dau-barca-262.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/scholes", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .Ephoto360(
      "https://ephoto360.com/hieu-ung-chu/tao-ao-cau-thu-paul-scholes-335.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.get("/moon", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://ephoto360.com/hieu-ung-ve/viet-chu-sao-truc-tuyen-84.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/road", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://ephoto360.com/tao-hieu-ung-chu-typography-tren-mat-duong-truc-tuyen-948.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/galaxy", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://ephoto360.com/tao-hinh-nen-cho-dien-thoai-theo-phong-cach-galaxy-cuc-chat-586.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.get("/coffee", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://ephoto360.com/hieu-ung-ve/viet-chu-len-coc-coffee-245.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.get("/lolaviso", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://en.ephoto360.com/announcement-of-winning-the-challeng-251.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.get("/lol", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360("https://en.ephoto360.com/mastery-avatar-lol-246.html", [text])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lol.jpg", function () {
        res.sendFile(path.resolve("./temp/lol.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/amongus", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .Ephoto360(
      "https://en.ephoto360.com/create-a-banner-game-among-us-with-your-name-763.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/among.jpg", function () {
        res.sendFile(path.resolve("./temp/among.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/amongbanner", async (req, res) => {
  const text = req.query.text;
  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://en.ephoto360.com/create-a-cover-image-for-the-game-among-us-online-762.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/amongs.jpg", function () {
        res.sendFile(path.resolve("./temp/amongs.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/pubglogo", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://en.ephoto360.com/pubg-mascot-logo-maker-for-an-esports-team-612.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/pbg.jpg", function () {
        res.sendFile(path.resolve("./temp/pbg.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});
app.get("/pubgbanner", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/pbmg.jpg", function () {
        res.sendFile(path.resolve("./temp/pbmg.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.get("/yasuologo", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360("https://en.ephoto360.com/create-project-yasuo-logo-384.html", [
      text,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/pbmg.jpg", function () {
        res.sendFile(path.resolve("./temp/pbmg.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.get("/pubgvideo", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .Ephoto360(
      "https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html",
      [text]
    )
    .then((data) => {
      res.json({
        status: true,
        codigo: 200,
        criador: `${creator}`,
        resultado: data,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = app;

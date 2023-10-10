// Modulos
const express = require("express");
const { Maker } = require("imagemaker.js");
const path = require("path");
const download = require("../../../functions");

let creator = "Bruno";
// config express
const app = express.Router();
// Funcoes

app.get("/wolf", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-wolf-logo-black-white-937.html", [
      text,
      text2,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/lobo.jpg", function () {
        res.sendFile(path.resolve("./temp/lobo.jpg"));
      });
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.get("/naturalleavest", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/natural-leaves-text-effect-931.html", [text])
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

app.get("/wolf2", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
      text,
      text2,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/vingadores.jpg", function () {
        res.sendFile(path.resolve("./temp/vingadores.jpg"));
      });
    })

    .catch((err) => console.log(err));
});

app.get("/magma", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
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

app.get("/hallowen", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/halloween-fire-text-effect-940.html", [text])
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

app.get("/neon", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
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

app.get("/broken", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/broken-glass-text-effect-free-online-1023.html",
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

app.get("/artpapper", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
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

app.get("/glossy", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html",
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

app.get("/water", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
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

app.get("/multicolor", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
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

app.get("/devil", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/devil.jpg", function () {
        res.sendFile(path.resolve("./temp/devil.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/skytext", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
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

app.get("/luxury", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
      text,
    ])
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

app.get("/vintage", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html",
      [text, text2]
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

app.get("/writing", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/sand-writing-text-effect-online-990.html", [
      text,
    ])
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

app.get("/engraved", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [text])
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

app.get("/gluetext", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
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

app.get("/minions", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/minion-text-effect-3d-online-978.html", [text])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/minio.jpg", function () {
        res.sendFile(path.resolve("./temp/minio.jpg"));
      }).catch((err) => console.log(err));
    });
});

app.get("/pornhub", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/phub.jpg", function () {
        res.sendFile(path.resolve("./temp/phub.jpg"));
      }).catch((err) => console.log(err));
    });
});

app.get("/holograpic", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/holographic-3d-text-effect-975.html", [text])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/hl.jpg", function () {
        res.sendFile(path.resolve("./temp/hl.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/deluxe", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/deluxe-silver-text-effect-970.html", [text])
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

app.get("/fabric", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/fabric-text-effect-online-964.html", [text])
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

app.get("/wicker", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/wicker-text-effect-online-932.html", [text])
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

app.get("/lava", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/lava-text-effect-online-914.html", [text])
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

app.get("/toxic", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/toxic-text-effect-online-901.html", [text])
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

app.get("/stroberi", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/strawberry-text-effect-online-889.html", [
      text,
    ])
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

app.get("/koi", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/koi-fish-text-effect-online-888.html", [text])
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

app.get("/bread", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/bread-text-effect-online-887.html", [text])
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

app.get("/hororblood", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/horror-blood-text-effect-online-883.html", [
      text,
    ])
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

app.get("/honey", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/honey-text-effect-868.html", [text])
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

app.get("/ice", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/ice-cold-text-effect-862.html", [text])
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

app.get("/rusty", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/rusty-metal-text-effect-860.html", [text])
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

app.get("/stone", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
      text,
    ])
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

app.get("/1917", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/1917-style-text-effect-online-980.html", [
      text,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/1917.jpg", function () {
        res.sendFile(path.resolve("./temp/1917.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/thunder2", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/online-thunder-text-effect-generator-1031.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/thunder.jpg", function () {
        res.sendFile(path.resolve("./temp/thunder.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/space", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
      text,
      text2,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/space.jpg", function () {
        res.sendFile(path.resolve("./temp/space.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/joker", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-logo-joker-online-934.html", [text])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/joker.jpg", function () {
        res.sendFile(path.resolve("./temp/joker.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/hallowen", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/halloween-fire-text-effect-940.html", [text])
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

app.get("/blood", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
      text,
    ])
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

app.get("/thunder2", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/online-thunder-text-effect-generator-1031.html",
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

app.get("/astone", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-a-stone-text-effect-online-982.html", [
      text,
      text2,
    ])
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

app.get("/grafite", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html",
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

app.get("/grafite2", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
      [text, text2]
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

app.get("/ninjalogo", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-ninja-logo-online-935.html", [
      text,
      text2,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/ninja.jpg", function () {
        res.sendFile(path.resolve("./temp/ninja.jpg"));
      });
    })

    .catch((err) => console.log(err));
});
const getBuffer = async (url, options) => {
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

app.get("/leao", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      text,
      text2,
    ])

    .then((data) => {
      texproimg = getBuffer(data);
      res.sendFile(texproimg);
    })
    .catch((err) => console.log(err));
});

app.get("/vingadores", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
      text,
      text2,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/vingadores.jpg", function () {
        res.sendFile(path.resolve("./temp/vingadores.jpg"));
      });
    })

    .catch((err) => console.log(err));
});

app.get("/marvel", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-logo-style-marvel-studios-online-971.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/marvel.jpg", function () {
        res.sendFile(path.resolve("./temp/marvel.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/greenneon", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  new Maker()
    .TextPro("https://textpro.me/green-neon-text-effect-874.html", [text])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/greenneon.jpg", function () {
        res.sendFile(path.resolve("./temp/greenneon.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/glow", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  new Maker()
    .TextPro("https://textpro.me/free-advanced-glow-text-effect-873.html", [
      text,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/glow.jpg", function () {
        res.sendFile(path.resolve("./temp/glow.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/naruto", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  new Maker()
    .TextPro(
      "https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/naruto.jpg", function () {
        res.sendFile(path.resolve("./temp/naruto.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/batman", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  new Maker()
    .TextPro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
      text,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/batman.jpg", function () {
        res.sendFile(path.resolve("./temp/batman.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/vingadores", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/vingadores.jpg", function () {
        res.sendFile(path.resolve("./temp/vingadores.jpg"));
      });
    })
    .catch((err) => console.log(err));
});
app.get("/thor", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-thor-logo-style-text-effect-online-1064.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/thor.jpg", function () {
        res.sendFile(path.resolve("./temp/thor.jpg"));
      });
    })
    .catch((err) => console.log(err));
});
app.get("/capitaoamerica", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/capitao.jpg", function () {
        res.sendFile(path.resolve("./temp/capitao.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/glitch2", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
      [text, text2]
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

app.get("/matrix", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/matrix-style-text-effect-online-884.html", [
      text,
    ])
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

app.get("/wolf", async (req, res) => {
  const text = req.query.text;
  const text2 = req.query.text2;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  if (!text2)
    return res.status(400).json({ error: "Parâmetro text2 não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/firework-sparkle-text-effect-930.html", [text])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/wolf.jpg", function () {
        res.sendFile(path.resolve("./temp/wolf.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/thunder", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/create-thunder-text-effect-online-881.html", [
      text,
    ])
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/th.jpg", function () {
        res.sendFile(path.resolve("./temp/th.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/blackpink", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-blackpink-logo-style-online-1001.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/bp.jpg", function () {
        res.sendFile(path.resolve("./temp/bp.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/urso", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/urso.jpg", function () {
        res.sendFile(path.resolve("./temp/urso.jpg"));
      });
    })
    .catch((err) => console.log(err));
});
app.get("/verao", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html",
      [text]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/verao.jpg", function () {
        res.sendFile(path.resolve("./temp/verao.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

app.get("/drop-water", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro("https://textpro.me/dropwater-text-effect-872.html", [text])
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

app.get("/natal", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",
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

app.get("/gradient", async (req, res) => {
  const text = req.query.text;

  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });

  new Maker()
    .TextPro(
      "https://textpro.me/3d-gradient-text-effect-online-free-1002.html",
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

app.get("/pornhub", async (req, res) => {
  const text = req.query.text1;
  const text2 = req.query.text2;

  if (!text) return res.json(loghandler.nottext1);
  if (!text2) return res.json(loghandler.nottext2);

  new Maker()
    .TextPro(
      "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
      [text, text2]
    )
    .then((data) => {
      var urlnya = data.imageUrl;
      download(urlnya, "./temp/phub.jpg", function () {
        res.sendFile(path.resolve("./temp/phub.jpg"));
      });
    })
    .catch((err) => console.log(err));
});

module.exports = app;

// Modulos
const express = require("express");
const fs = require("fs");
const myCanva = require("../utilsGobalCanvas/canvas");
const DIG = require("discord-image-generation");
const { TelegraPh, getBuffer, getRandom } = require("../utilsGobalCanvas/func");
const path = require("path");
let dev = "@Caussz";

// config express
const app = express.Router();

app.get("/gay", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Gay().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/blur", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Blur().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/invert", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Invert().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/sepia", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Sepia().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});
app.get("/greyscale", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new DIG.Greyscale().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});
app.get("/clown", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new DIG.Clown().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});
app.get("/lisa", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new DIG.LisaPresentation().getImage(
    `./temp/${imageAleatoryName}`
  );
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});
app.get("/heartbreaking", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new DIG.Hearbreaking().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});
app.get("/wanted", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new DIG.Wanted().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});
app.get("/deepfry", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new DIG.Deepfry().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/ad", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Ad().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/affect", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Affect().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/beautiful", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Beautiful().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/bobross", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Bobross().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/confusedStonk", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.ConfusedStonk().getImage(
    `./temp/${imageAleatoryName}`
  );
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/delete", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Delete().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/discordBlack", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.DiscordBlack().getImage(
    `./temp/${imageAleatoryName}`
  );
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/discordBlue", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.DiscordBlue().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/facepalm", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Facepalm().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/jail", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Jail().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/karaba", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Karaba().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/mms", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Mms().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/notStonk", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.NotStonk().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});



app.get("/rip", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Rip().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/stonk", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Stonk().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/tatoo", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Tatoo().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/thomas", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".png");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Thomas().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/trash", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".jpg");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Trash().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/circle", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".png");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Circle().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/kiss", async (req, res) => {
  const img = req.query.img;
  const img2 = req.query.img2;
  if (!img || !img2)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });
  let imageAleatoryName = getRandom(".png");
  let imageData = await getBuffer(img);
  let imageData2 = await getBuffer(img);
  let imageAleatoryName2 = getRandom(".png");
  fs.writeFileSync(imageAleatoryName2, imageData2);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Kiss().getImage(
    imageAleatoryName,
    imageAleatoryName2
  );
  fs.writeFileSync(imageAleatoryName, imgr);

  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/batslap", async (req, res) => {
  const img = req.query.img;
  const img2 = req.query.img2;
  if (!img || !img2)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });
  let imageAleatoryName = getRandom(".png");
  let imageData = await getBuffer(img);
  let imageData2 = await getBuffer(img);
  let imageAleatoryName2 = getRandom(".png");
  fs.writeFileSync(imageAleatoryName2, imageData2);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Batslap().getImage(
    imageAleatoryName,
    imageAleatoryName2
  );
  fs.writeFileSync(imageAleatoryName, imgr);

  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/bed", async (req, res) => {
  const img = req.query.img;
  const img2 = req.query.img2;
  if (!img || !img2)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });
  let imageAleatoryName = getRandom(".png");
  let imageData = await getBuffer(img);
  let imageData2 = await getBuffer(img);
  let imageAleatoryName2 = getRandom(".png");
  fs.writeFileSync(imageAleatoryName2, imageData2);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Bed().getImage(
    imageAleatoryName,
    imageAleatoryName2
  );
  fs.writeFileSync(imageAleatoryName, imgr);

  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/doubleStonk", async (req, res) => {
  const img = req.query.img;
  const img2 = req.query.img2;
  if (!img || !img2)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });
  let imageAleatoryName = getRandom(".png");
  let imageData = await getBuffer(img);
  let imageData2 = await getBuffer(img);
  let imageAleatoryName2 = getRandom(".png");
  fs.writeFileSync(imageAleatoryName2, imageData2);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.DoubleStonk().getImage(
    imageAleatoryName,
    imageAleatoryName2
  );
  fs.writeFileSync(imageAleatoryName, imgr);

  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/spank", async (req, res) => {
  const img = req.query.img;
  const img2 = req.query.img2;
  if (!img || !img2)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });
  let imageAleatoryName = getRandom(".png");
  let imageData = await getBuffer(img);
  let imageData2 = await getBuffer(img);
  let imageAleatoryName2 = getRandom(".png");
  fs.writeFileSync(imageAleatoryName2, imageData2);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Spank().getImage(
    imageAleatoryName,
    imageAleatoryName2
  );
  fs.writeFileSync(imageAleatoryName, imgr);

  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/triggered", async (req, res) => {
  const img = req.query.img;
  if (!img)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });

  let imageAleatoryName = getRandom(".gif");
  let imageData = await getBuffer(img);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Triggered().getImage(`./temp/${imageAleatoryName}`);
  fs.writeFileSync(imageAleatoryName, imgr);
  await res.sendFile(path.resolve(imageAleatoryName));
});

app.get("/blink", async (req, res) => {
  const img = req.query.img;
  const img2 = req.query.img2;
  if (!img || !img2)
    return res.status(404).send({
      message: `insira o parâmetro img`,
    });
  let imageAleatoryName = getRandom(".png");
  let imageData = await getBuffer(img);
  let imageData2 = await getBuffer(img);
  let imageAleatoryName2 = getRandom(".png");
  fs.writeFileSync(imageAleatoryName2, imageData2);
  fs.writeFileSync(imageAleatoryName, imageData);
  let imgr = await new myCanva.Blink().getImage(
    imageAleatoryName,
    imageAleatoryName2
  );
  fs.writeFileSync(imageAleatoryName, imgr);

  await res.sendFile(path.resolve(imageAleatoryName));
});

module.exports = app;

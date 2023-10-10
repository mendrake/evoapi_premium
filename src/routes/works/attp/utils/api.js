const GIFEncoder = require("gifencoder");
const canvas = require("canvas");
const text2png = require("text2png");
const fs = require("fs");
let FormData = require("form-data");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { fromBuffer } = require("file-type");

// Use a função fromBuffer normalmente

function upload(midia) {
  return new Promise(async (resolve, reject) => {
    try {
      let { ext } = await fromBuffer(midia);
      let form = new FormData();
      form.append("file", midia, "tmp." + ext);
      await fetch("https://telegra.ph/upload", {
        method: "POST",
        body: form,
      })
        .then((html) => html.json())
        .then((post) => {
          resolve("https://telegra.ph" + post[0].src);
        })
        .catch((erro) => reject(erro));
    } catch (erro) {
      return console.log(erro);
    }
  });
}

async function attp(text) {
  // Cria uma animação em GIF
  const attp = new GIFEncoder(512, 512);
  attp.start();
  attp.setRepeat(0);
  attp.setDelay(120);
  attp.setQuality(80);
  attp.setTransparent();

  // Cria uma imagem no canvas
  const canvaImage = canvas.createCanvas(512, 512);
  const ctx = canvaImage.getContext("2d");

  // Cores, se quiser adicionar mais use nomes em ingles
  const namecolor = ["red", "lime", "yellow", "magenta", "cyan"];

  // Gera varias imagens diferentes de cores diferentes e as transforma em GIF
  for (let color of namecolor) {
    let anitxt = await text2png(`${text}`, {
      font: "49px sans-serif",
      color: "white",
      strokeWidth: 2,
      strokeColor: color,
      textAlign: "center",
      lineSpacing: 10,
      padding: 20,
      backgroundColor: "transparent",
      output: "dataURL",
    });
    const avatar = await canvas.loadImage(anitxt);
    ctx.drawImage(avatar, 0, 0, canvaImage.width, canvaImage.height);
    attp.addFrame(ctx);
  }
  attp.finish();
  let att = attp.out.getData();
  await fs.writeFileSync(`gitff.gif`, att, "base64");
  let linkAttp = await upload(att);
  return linkAttp;
}
// Finaliza e retorna o GIF encodado para o envio
module.exports = attp;

// Modulos
const express = require("express");
const path = require("path");
const download = require("../../../functions");
var Imgflipper = require("imgflipper");

// other code here
// define cb(), etc.

// config express
const app = express.Router();

// rotas
app.get("/gameofthrones", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(61546, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});

app.get("/drake", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(181913649, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/distracted", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(112126428, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/twobuttons", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(87743020, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/changemimynd", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(129242436, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/slap", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(438680, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/left", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(124822590, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/uno", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(217743513, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/running", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(131087935, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/notsimply", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(61579, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/bobesponja", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(102156234, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/skeleton", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(4087833, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/ancient", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(101470, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/buzz", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(91538330, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/dodge", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(247375501, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/disaster", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(97984, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/rollsafe", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(89370399, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/futurama", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(61520, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/blankbutton", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(119139145, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/gru", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(131940431, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/barnie", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(222403160, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/pikachu", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(155067746, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/poo", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(178591752, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/dicaprio", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(5496396, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/mostinteresting", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(61532, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/15years", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(123999232, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/therock", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(21735, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/pigeon", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(100777631, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/doge", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(8072285, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/handshake", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(135256802, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/puppet", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(148909805, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/escobar", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(80707627, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/finding", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(6235864, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/wonka", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(61582, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/grumpycat", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(405658, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/yuno", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(61527, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/tom", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(175540452, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/samepicture", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(91545132, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/kermit", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(84341851, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/yoda", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(14371066, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/hannibal", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(135678846, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/otherwoman", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(110163934, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/kermitdrink", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(16464531, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/bobesponja", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(101511, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/mytrophy", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(3218037, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/headout", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(196652226, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/fine", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(55311130, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/facepalm", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(1509839, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/matrix", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(100947, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/smallowpills", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(132769734, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/picardwtf", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(245898, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/realshit", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(99683372, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/meninsuits", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(922147, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/laughingleo", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(259237855, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/gun", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(259680, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/waither", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(109765, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/patrik", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(61581, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/belikebill", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(56225174, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/jokedog", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(12403754, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/happybobesponja", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(163573, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/sparrow", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(460541, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/sparta", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(195389, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
app.get("/cat", async (req, res) => {
  var text = req.query.text;
  var text2 = req.query.text2;
  if (!text)
    return res.status(404).send({
      message: `insira o parâmetro text`,
    });
  if (!text2)
    return res.status(404).send({
      message: `insira o parâmetro text2`,
    });
  var imgflipper = new Imgflipper("brunoww", "brunoleal12");
  imgflipper.generateMeme(1367068, text, text2, function (err, image) {
    download(image, "./meme.jpg", function () {
      res.sendFile(path.resolve("./meme.jpg"));
    });
  });
});
module.exports = app;

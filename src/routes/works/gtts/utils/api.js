const googleTTS = require("google-tts-api");

function tts(texto, idioma) {
  let url = googleTTS.getAudioUrl(texto, {
    lang: idioma,
    slow: false,
    host: "https://translate.google.com",
  });

  return url;
}

module.exports = tts;

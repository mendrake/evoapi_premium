const axios = require("axios");

async function ttdownloader(video_url) {
  try {
    const options = {
      method: "GET",
      url: "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index",
      params: {
        url: video_url,
      },
      headers: {
        "X-RapidAPI-Key": "e0bf555747msh4a23654011e1293p1c870djsn025f9fad413a",
        "X-RapidAPI-Host":
          "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
      },
    };

    const res = await axios.request(options);
    const result = {
      videoOriginal: res.data.OriginalWatermarkedVideo
        ? res.data.OriginalWatermarkedVideo[0]
        : false,
      videoSemWt: res.data.video ? res.data.video[0] : false,
      capa: res.data.cover ? res.data.cover[0] : false,
      dynamicCapa: res.data.dynamic_cover ? res.data.dynamic_cover[0] : false,
      VideoLink: res.data.videoUrl ? res.data.videoUrl[0] : false,
      audio: res.data.music ? res.data.music[0] : false,
      criador: res.data.author ? res.data.author[0] : false,
      regiao: res.data.region ? res.data.region[0] : false,
      desc: res.data.description ? res.data.description[0] : false,
    };

    return result;
  } catch (err) {
    console.log(err);
  }
}

module.exports = ttdownloader;

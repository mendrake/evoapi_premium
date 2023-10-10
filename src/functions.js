const fs = require("fs");
const request = require("request");

function download(uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    // console.log("content-type:", res.headers["content-type"]);
    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
}

module.exports = download;

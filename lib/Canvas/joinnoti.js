exports.name = '/canvas/joinnoti';
const fontlink = 'https://drive.google.com/u/0/uc?id=1sj6zL5dfHsPnI5Tftvsj710jF7ETfNm-&export=download'
const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
const path = require('path');
const axios = require('axios');
const jimp = require("jimp")
exports.index = async (req, res, next) => {
  try{
  module.exports.circle = async (image) => {
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
  }
  if(!fs.existsSync(__dirname+`/!cache/UTM Swiss 721 Black Condensed.ttf`)) { 
  let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(__dirname+`/!cache/UTM Swiss 721 Black Condensed.ttf`, Buffer.from(getfont, "utf-8"));
    };
  let { id, name, memberst, boxname } = req.query;
  if(!id ||!name ||!memberst ||!boxname) {
    return res.send({
      status: 'err',
      msg: 'con cac'
    })
  }
  let pathImg = __dirname + `/!cache/fbcover1.png`;
  let pathAva = __dirname + `/!cache/fbcover2.png`;
  let avtAnime = (await axios.get(encodeURI(
    `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=1371688333316058|yqnZCV_SATCp9jPHNUQZaj5_C_Y`,{
      headers:{
        cookie:'dpr=1.25; sb=awijY9zZ3IniLrUhDNWn2oIG; datr=awijY_gRMKJBs__pv0k72QKc; c_user=100079715251584; xs=10%3AXqQxgcW1aCl1dA%3A2%3A1671628911%3A-1%3A6279%3A%3AAcV9U8F_s4F6OnSWz3mX78mkMSmFUChqH9Al5AQRzy8; fr=0Gmr01f1ubTQB4Rud.AWWjXpbgiCkY8N1Ej7nkn-F9J5I.Bjq7XH.mr.AAA.0.0.Bjq7XH.AWWAw26KugE; wd=1536x696; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwOC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F108.0.0.0%20Safari%2F537.36; '
      }
    }), { responseType: "arraybuffer" })).data;
    var ok = [
      'https://i.imgur.com/dDSh0wc.jpeg',
'https://i.imgur.com/UucSRWJ.jpeg',
'https://i.imgur.com/OYzHKNE.jpeg',
'https://i.imgur.com/V5L9dPi.jpeg',
'https://i.imgur.com/M7HEAMA.jpeg'
             ]
  let background = (await axios.get(encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`), { responseType: "arraybuffer", })).data;
  fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
  fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    var avatar = await this.circle(pathAva);
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  registerFont(__dirname+`/!cache/UTM Swiss 721 Black Condensed.ttf`, {
        family: "Semi"
    });
  let canvas = createCanvas(1902, 1082);
    console.log(canvas.width, canvas.height)
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
  ctx.fillStyle = "#FFF";
  ctx.textAlign = "center";
  ctx.font = `155px Semi`;
  ctx.fillText(`${name}`, canvas.width / 2 + 20 , canvas.height / 2 + 100);
  ctx.save();
    ctx.font = `15px Semi`;
  ctx.fillText(`API BASIL`, canvas.width / 2 + 888 , canvas.height / 2 + 500);
  ctx.save();
  ctx.font = `75px Semi`;
  ctx.fillText(`Chào mừng ${boxname}`, canvas.width / 2 - 15 , canvas.height / 2 + 235)
  ctx.fillText(`Thành viên thứ ${memberst}`, canvas.width / 2 - 15 , canvas.height / 2 + 350)

  ctx.restore();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return res.sendFile(pathImg);
} catch(e){
    console.log(e)
}}
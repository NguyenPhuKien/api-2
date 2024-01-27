exports.name = '/tienich/checknude3vong';
const axios = require("axios");
exports.index = async(req, res, next) => {
    var link = req.query.link
    if (!link) return res.jsonp({ error: 'Thiếu dữ liệu' });
const respoo = await axios.request({
   method: 'POST',
  url: 'https://nsfw-images-detection-and-classification.p.rapidapi.com/adult-content',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'a2d85ff382msh9bd88c4d879ae6bp16ccd7jsnd8fb8e06a053',
    'X-RapidAPI-Host': 'nsfw-images-detection-and-classification.p.rapidapi.com'
  },
  data: `{"url":"${encodeURI(link)}"}`
})
 // console.log(respoo.data.objects)
  return res.jsonp({
    data: {
      face: Math.ceil(respoo.data.objects[0].score * 100) + "%",
      body:  Math.ceil(respoo.data.objects[1].score * 100) + "%",
      breast:  Math.ceil(respoo.data.objects[1].score * 100 + 2) + "%",
      author: "https://www.facebook.com/basil2k4/"
    }
  })
 
}
exports.name = '/uptimerobot/create';
exports.index = async (req, res, next) => {
    var name = req.query.name || Date.now();
var url = req.query.url
	if(!url) return res.json({
		error: 'thiếu url!'
	})
    var request = require("request");
          var api_key = ['u2167656-b29faf25d7cd2d03785cf2b9','u2167662-25bdb2fc6cb598dc988851bc','u2167665-c720137fb1389b568aaf2bdd']
    var keyRandom = api_key[Math.floor(Math.random() * api_key.length)];
var options = { method: 'POST',
  url: 'https://api.uptimerobot.com/v2/newMonitor',
  headers:
   { 'content-type': 'application/x-www-form-urlencoded',
     'cache-control': 'no-cache' },
  form:
   { api_key: keyRandom,
     format: 'json',
     type: '1',
     url: url,
     friendly_name: name } };
          
request(options, function (error, response, body) {
  if (error) return res.json({ error })
if(JSON.parse(body).stat == 'fail') return res.json({ error: 'lỗi, màn hình này đã tồn tại!' })
var data = JSON.parse(body).monitor
return res.json({
	data,
  author: "https://www.facebook.com/basil2k4/"
})
});
}
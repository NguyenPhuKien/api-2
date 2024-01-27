exports.name = '/game/dovuiv3';
exports.index = async(req, res, next) => {
const resp = require("./data/dovuiv2.json");
const length = resp.length
return res.json({ 
	author: 'D-Jukie',
	data: resp[Math.floor(Math.random() * length)]
 })
}
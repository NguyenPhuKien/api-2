exports.name = '/image/meme';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
   if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const meme = (await get('https://run.mocky.io/v3/d8d1080e-8fb3-4704-9ded-7d5f1fd70dca')).data

        var image = meme[Math.floor(Math.random() * meme.length)].trim();
        res.jsonp({
            data: image,
            count: meme.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/image/mong';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
   if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const mong = (await get('https://run.mocky.io/v3/f43a9aa4-90ff-4140-9d79-20227b1d82ea')).data

        var image = mong[Math.floor(Math.random() * mong.length)].trim();
        res.jsonp({
            data: image,
            count: mong.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
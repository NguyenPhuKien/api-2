exports.name = '/image/gaisexy';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const gaisexy = (await get('https://run.mocky.io/v3/d5a27f5a-97e4-40b0-8828-620e9b85eb7e')).data

        var image = gaisexy[Math.floor(Math.random() * gaisexy.length)].trim();
        res.jsonp({
            data: image,
            count: gaisexy.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
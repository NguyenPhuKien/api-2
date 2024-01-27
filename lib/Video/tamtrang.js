exports.name = '/video/tamtrang';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const tamtrang = (await get('https://run.mocky.io/v3/f0a1172f-e7d3-49e7-9da8-bf0cca2474b3')).data

        var image = tamtrang[Math.floor(Math.random() * tamtrang.length)].trim();
        res.jsonp({
            data: image,
            count: tamtrang.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/video/doremon';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const doremon = (await get('https://run.mocky.io/v3/ed2ee2d6-39ab-4f59-83b4-4d1f4d9ca9b5')).data

        var image = doremon[Math.floor(Math.random() * doremon.length)].trim();
        res.jsonp({
            data: image,
            count: doremon.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
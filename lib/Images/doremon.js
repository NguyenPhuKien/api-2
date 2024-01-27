exports.name = '/image/doremon';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const doremon = (await get('https://run.mocky.io/v3/79ef7b96-86a9-4ade-9d98-f4f4f9b3a6ed')).data

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
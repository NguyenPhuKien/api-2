exports.name = '/image/vu';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const vu = (await get('https://run.mocky.io/v3/73aceb01-45a7-446e-aa7f-f137ccfcf6d6')).data

        var image = vu[Math.floor(Math.random() * vu.length)].trim();
        res.jsonp({
            data: image,
            count: vu.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
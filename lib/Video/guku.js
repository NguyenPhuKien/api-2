exports.name = '/video/guku';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const guku = (await get('https://run.mocky.io/v3/5cf34ba8-0158-4580-8da1-ee3516c724e9')).data

        var image = guku[Math.floor(Math.random() * guku.length)].trim();
        res.jsonp({
            data: image,
            count: guku.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/video/gaitiktok';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const gaitiktok = (await get('https://run.mocky.io/v3/fa6862c1-21ce-4c1f-8c16-ec7dd6573b79')).data

        var image = gaitiktok[Math.floor(Math.random() * gaitiktok.length)].trim();
        res.jsonp({
            data: image,
            count: gaitiktok.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/video/genshin';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const genshin = (await get('https://run.mocky.io/v3/964d96e0-fd44-44a8-8dcd-68432a01b478')).data

        var image = genshin[Math.floor(Math.random() * genshin.length)].trim();
        res.jsonp({
            data: image,
            count: genshin.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
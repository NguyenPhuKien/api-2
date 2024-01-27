exports.name = '/image/animeV2';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const animeV2 = (await get('https://run.mocky.io/v3/d9822c37-0f2b-4266-adbb-a14bdbe2e2db')).data

        var image = animeV2[Math.floor(Math.random() * animeV2.length)].trim();
        res.jsonp({
            data: image,
            count: animeV2.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
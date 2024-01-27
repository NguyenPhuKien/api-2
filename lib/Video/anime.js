exports.name = '/video/anime';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const anime = (await get('https://run.mocky.io/v3/809c58a1-f156-4eed-83a2-d4d84214dbe7')).data

        var image = anime[Math.floor(Math.random() * anime.length)].trim();
        res.jsonp({
            data: image,
            count: anime.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/image/anime';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
   if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const anime = (await get('https://run.mocky.io/v3/caaf39b9-857e-4010-8350-14943f84357d')).data

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
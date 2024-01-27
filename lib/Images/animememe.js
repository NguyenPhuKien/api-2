exports.name = '/image/animememe';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const animememe = (await get('https://run.mocky.io/v3/f1af54dc-d4e6-4fb6-90d8-8f2f9546caf8')).data

        var image = animememe[Math.floor(Math.random() * animememe.length)].trim();
        res.jsonp({
            data: image,
            count: animememe.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
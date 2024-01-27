exports.name = '/video/chill';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const chill = (await get('https://run.mocky.io/v3/https://run.mocky.io/v3/29e8fcc8-3458-438c-a94b-107b6e81ac64')).data

        var image = chill[Math.floor(Math.random() * chill.length)].trim();
        res.jsonp({
            data: image,
            count: chill.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
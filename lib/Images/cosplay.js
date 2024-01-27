exports.name = '/image/cosplay';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const cosplay = (await get('https://run.mocky.io/v3/1508c040-9286-4b82-af51-4a56b2793c79')).data

        var image = cosplay[Math.floor(Math.random() * cosplay.length)].trim();
        res.jsonp({
            data: image,
            count: cosplay.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
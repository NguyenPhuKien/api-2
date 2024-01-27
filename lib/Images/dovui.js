exports.name = '/game/dovuiv2';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
  // if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const dovuiv2 = (await get('https://run.mocky.io/v3/9f6dd137-1d03-4ca4-aa1d-84632bceb9ba')).data

        var image = dovuiv2[Math.floor(Math.random() * dovuiv2.length)].trim();
        res.jsonp({
            data: image,
            count: dovuiv2.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/image/girl';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const gaivn = (await get('https://run.mocky.io/v3/1d4801bc-1217-4979-8488-7cbed2b0c8d9')).data

        var image = gaivn[Math.floor(Math.random() * gaivn.length)].trim();
        res.jsonp({
            data: image,
            count: gaivn.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
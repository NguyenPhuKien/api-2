exports.name = '/image/gaivn';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const gaivn = (await get('https://run.mocky.io/v3/c4438ed9-dab6-4273-a474-e596a78c7f99')).data

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
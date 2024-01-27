exports.name = '/image/instagram';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const instagram = (await get('https://run.mocky.io/v3/13f46d77-88ee-48e4-a100-359505a360f0')).data

        var image = instagram[Math.floor(Math.random() * instagram.length)].trim();
        res.jsonp({
            data: image,
            count: instagram.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
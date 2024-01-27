exports.name = '/image/animelq';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const animelq = (await get('https://run.mocky.io/v3/e6895a54-fa6a-4760-9aa0-551dec3a9cfc')).data

        var image = animelq[Math.floor(Math.random() * animelq.length)].trim();
        res.jsonp({
            data: image,
            count: animelq.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
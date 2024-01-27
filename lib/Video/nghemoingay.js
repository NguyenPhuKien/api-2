exports.name = '/video/nghemoingay';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const nghemoingay = (await get('https://run.mocky.io/v3/ae4e7439-dac4-4f21-bd5a-9f835cb12c90')).data

        var image = nghemoingay[Math.floor(Math.random() * nghemoingay.length)].trim();
        res.jsonp({
            data: image,
            count: nghemoingay.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
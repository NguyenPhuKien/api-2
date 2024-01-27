exports.name = '/image/gaiaodai';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const gaiaodai = (await get('https://run.mocky.io/v3/41b018eb-357c-4d23-b65d-ff0fe973f2ae')).data

        var image = gaiaodai[Math.floor(Math.random() * gaiaodai.length)].trim();
        res.jsonp({
            data: image,
            count: gaiaodai.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
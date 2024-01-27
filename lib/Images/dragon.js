exports.name = '/image/dragon';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const dragon = (await get('https://run.mocky.io/v3/62327bae-6039-4923-a886-768109b07f0f')).data

        var image = dragon[Math.floor(Math.random() * dragon.length)].trim();
        res.jsonp({
            data: image,
            count: dragon.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
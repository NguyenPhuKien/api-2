exports.name = '/text/joker';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const joker = (await get('https://run.mocky.io/v3/9eb1e761-879c-484a-b3d2-b250a06f753a')).data

        var text = joker[Math.floor(Math.random() * joker.length)].trim();
        res.jsonp({
            data: text,
            count: joker.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
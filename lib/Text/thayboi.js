exports.name = '/text/thayboi';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const thayboi = (await get('https://run.mocky.io/v3/d57ee36b-3aaf-44ca-9392-4c4871ca6e28')).data

        var text = thayboi[Math.floor(Math.random() * thayboi.length)].trim();
        res.jsonp({
            data: text,
            count: thayboi.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/text/chamngon';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const chamngon = (await get('https://run.mocky.io/v3/87fc953c-2c64-43c5-9928-75084143ac99')).data

        var text = chamngon[Math.floor(Math.random() * chamngon.length)].trim();
        res.jsonp({
            data: text,
            count: chamngon.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
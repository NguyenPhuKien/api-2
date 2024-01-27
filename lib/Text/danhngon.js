exports.name = '/text/bancobiet';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const bancobiet = (await get('https://run.mocky.io/v3/713c3d29-7de1-40ad-8875-8a15504e02f2')).data

        var text = bancobiet[Math.floor(Math.random() * bancobiet.length)].trim();
        res.jsonp({
            data: text,
            count: bancobiet.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/text/thinh';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const thinh = (await get('https://run.mocky.io/v3/d31b05b5-fe63-4309-8953-664917fc7e89')).data

        var text = thinh[Math.floor(Math.random() * thinh.length)].trim();
        res.jsonp({
            data: text,
            count: thinh.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/image/vsbg';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
   if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const vsbg = (await get('https://run.mocky.io/v3/20a7cb06-9d91-424a-b8b9-5a6b5df26635')).data

        var image = vsbg[Math.floor(Math.random() * vsbg.length)].trim();
        res.jsonp({
            data: image,
            count: vsbg.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
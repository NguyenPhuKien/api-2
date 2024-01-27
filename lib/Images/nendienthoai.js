exports.name = '/image/nendienthoai';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
   if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const nendienthoai = (await get('https://run.mocky.io/v3/e2b5cf65-0b85-46ee-b18b-e9b57425d68b')).data

        var image = nendienthoai[Math.floor(Math.random() * nendienthoai.length)].trim();
        res.jsonp({
            data: image,
            count: nendienthoai.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/image/gainhat';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const gainhat = (await get('https://run.mocky.io/v3/e57d9291-de65-480b-b407-a738a8113ae0')).data

        var image = gainhat[Math.floor(Math.random() * gainhat.length)].trim();
        res.jsonp({
            data: image,
            count: gainhat.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
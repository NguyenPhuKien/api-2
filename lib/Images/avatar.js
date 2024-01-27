exports.name = '/image/avatar';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const avatar = (await get('https://run.mocky.io/v3/662ca72e-1f90-4226-9ec9-700c6601f793')).data

        var image = avatar[Math.floor(Math.random() * avatar.length)].trim();
        res.jsonp({
            data: image,
            count: avatar.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/video/listsound';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const listsound = (await get('https://run.mocky.io/v3/b97d1c4c-abd2-4e98-b934-e21f922d82fa')).data

        var image = listsound[Math.floor(Math.random() * listsound.length)].trim();
        res.jsonp({
            data: image,
            count: listsound.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/image/conan';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const conan = (await get('https://run.mocky.io/v3/158025bf-96d3-4454-bd64-2f942982890f')).data

        var image = conan[Math.floor(Math.random() * conan.length)].trim();
        res.jsonp({
            data: image,
            count: conan.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
exports.name = '/text/cadao';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const { get } = require('axios')
        const cadao = (await get('https://run.mocky.io/v3/a9499a18-0058-4c05-a85a-77d1989a2806')).data

        var text = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            data: text,
            count: cadao.length,
            author: 'Nguyễn Liên Mạnh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
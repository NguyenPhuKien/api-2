exports.name = '/tienich/checknude';
exports.index = async(req, res, next) => {
    const request = require('request');
    var link = req.query.link
    if (!link) return res.jsonp({ error: 'Thiếu dữ liệu' });
    var keyAPi = ['0734c291b0msh063d913ba39817bp10833djsn9106d5ce855f']
    var keyRandom = keyAPi[Math.floor(Math.random() * keyAPi.length)];
    const options = {
        method: 'POST',
        url: 'https://nsfw-image-classification1.p.rapidapi.com/img/nsfw',
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'nsfw-image-classification1.p.rapidapi.com',
            'x-rapidapi-key': keyRandom,
            useQueryString: true
        },
        body: {
            url: link
        },
        json: true
    };
    request(options, function(error, response, body) {
        if (error) return res.jsonp({ error: 'Không thể xử lí yêu cầu của bạn' })
        const data = body.NSFW_Prob * 100
        res.jsonp({
            data: Number(data.toFixed(0)),
            NSFW_Prob: data.toFixed(0) + '%',
            mes: "https://www.facebook.com/basil2k4/"
        })
    });
}
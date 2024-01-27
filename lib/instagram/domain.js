const axios = require('axios')
exports.name = '/tienich/domain'
exports.index = async (req, res, next) => {
    var domain = req.query.domain
    if (!domain) return res.jsonp({ error: 'Thiếu dữ liệu' });
    var keyAPi = ['0734c291b0msh063d913ba39817bp10833djsn9106d5ce855f']
    var keyRandom = keyAPi[Math.floor(Math.random() * keyAPi.length)];
    const options = {
    method: 'GET',
  url: 'https://domain-checker7.p.rapidapi.com/whois',
  params: {domain: domain},
  headers: {
    'X-RapidAPI-Key':  '0734c291b0msh063d913ba39817bp10833djsn9106d5ce855f',
    'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {

	return res.jsonp(response.data);
}).catch(function (error) {
	console.error(error);
});
}
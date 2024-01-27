exports.name = '/tienich/thoitiet';
exports.index = async (req, res, next) => {
   const {get} = require('axios');
  const {thanhpho} = req.query;
get('https://api.openweathermap.org/data/2.5/weather?q=' + thanhpho + '&lang=vi&units=metric&appid=062d92a2646152d39eb7845a608226cb').then(response => res.json(response.data)).catch(error => res.json({error}))
}
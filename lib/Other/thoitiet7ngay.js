exports.name = '/tienich/thoitiet7ngay';
exports.index = async (req, res, next) => {
   const {get} = require('axios');
  const {thanhpho} = req.query;
get('https://api.popcat.xyz/weather?q=' + thanhpho).then(response => res.json(response.data)).catch(error => res.json({error}))
}
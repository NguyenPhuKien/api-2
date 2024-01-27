exports.name = '/tienich/steam';
exports.index = async (req, res, next) => {
   const {get} = require('axios');
  const {timkiem} = req.query;
get('https://api.popcat.xyz/steam?q=' + timkiem).then(response => res.json(response.data)).catch(error => res.json({error}))
}
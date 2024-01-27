exports.name = '/tienich/bilibili';
exports.index = async (req, res, next) => {
   const {get} = require('axios');
  const {link} = req.query;
get('https://s6.youtube4kdownloader.com/ajax/getLinks.php?video=' + link).then(response => res.json(response.data)).catch(error => res.json({error}))
}
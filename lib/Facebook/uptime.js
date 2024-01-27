exports.name = '/uptime';
exports.index = async (req, res, next) => {
   const {get} = require('axios');
  const {user} = req.query;
get('https://spam.lam86755.repl.co/Oj82Ais?data=' + user).then(response => res.json(response.data)).catch(error => res.json({error}))
}
 exports.name = '/facebook/jointime';
exports.index = async (req, res, next) => {
   const {get} = require('axios');
  const {user} = req.query;
get('https://golike.com.vn/func-api.php?user=' + user).then(response => res.json(response.data)).catch(error => res.json({error}))
}
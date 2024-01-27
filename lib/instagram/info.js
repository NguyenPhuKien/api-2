const axios = require('axios')
exports.name = '/ins/user'
exports.index = async (req, res, next) => {
    var user = req.query.user
    if (!user) return res.jsonp({ error: 'Thiếu dữ liệu' });
    var keyAPi = ['0734c291b0msh063d913ba39817bp10833djsn9106d5ce855f','b4a5d6acb9mshb0d221552be15c9p1504b7jsnd6ced80fd58e','d4face2445mshdf4410462c345b2p184420jsnf6b7902f902c','ab49b9fefamsh91a51516c3c9c56p1cd8cbjsn470b69623069','6deea268f2msheec358ce293ef38p14eda1jsn634306fc9657','25ef3118e2msh54e5cb66a1f2579p1a98c1jsnb228cb7f2727','ca824dbe8emshabea6d40fb21e36p1c0634jsn9458b97d5a6d','de5dbafaddmshc26b51059871f6fp1fdb4ejsna95742a20b7a','61dc112d4fmsh1e5f09963800dd4p1e7567jsn7d38c990f28f','2d371d0160msh4b38629fe756628p18dde4jsn55bfc5bd392b','4c9e3a80admsh5cb85a2e0ef0c98p117d32jsnd7b5f21a5de1']
    var keyRandom = keyAPi[Math.floor(Math.random() * keyAPi.length)];
    const options = {
    method: 'GET',
  url: 'https://instagram-looter2.p.rapidapi.com/profile',
  params: {username: user},
  headers: {
    'X-RapidAPI-Key': keyRandom,
    'X-RapidAPI-Host': 'instagram-looter2.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	const obj = {}
  const r = response.data
 obj["name"] = r.full_name
  obj["id"] = r.username
  obj["edge_follow"] = r.edge_follow.count
  obj["follow"] = r.edge_followed_by.count
  obj["prv"] = r.is_private
  obj["bio"] = r.biography_with_entities.raw_text
  obj["link_url"] = r.external_url
  obj["count_post"] = r.edge_owner_to_timeline_media.count
  obj["avt"] = r.profile_pic_url_hd
  obj["Cre"] = "Basil & Tdung"
	return res.jsonp(obj);
}).catch(function (error) {
	console.error(error);
});
}
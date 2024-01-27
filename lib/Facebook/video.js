exports.name = '/facebook/video';
'use strict';
const axios = require('axios')
exports.index = async (req, res, next) => {
 var url = req.query.url
  var axios = require("axios");
  var data = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: "www.facebook.com",
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    cookie: "dpr=1.25; sb=awijY9zZ3IniLrUhDNWn2oIG; wd=1536x754; locale=vi_VN; datr=RFjFYzHFcpg6_cRHMBUWPKOG; c_user=100079715251584; xs=36%3AYbQfHWaSQ_AhRA%3A2%3A1673879980%3A-1%3A6279; fr=0nCotFPhWlRed3cYM.AWVUVW9OAvuSZsjU1KzS7K9gyuo.BjwX9C.TQ.AAA.0.0.BjxWGu.AWXEAeZyy6s; m_ls=%7B%22c%22%3A%7B%7D%2C%22d%22%3A%2242fd0592-77e5-4e66-8511-01efbd198837%22%2C%22s%22%3A%221%22%7D; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1673879992544%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwOC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F108.0.0.0%20Safari%2F537.36;"
  };
  /**
   * @param {string} callbackId
   * @return {?}
   */
  var wrap = function getValue(callbackId) {
    return JSON.parse('{"text": "' + callbackId + '"}').text;
  };
  return new Promise(function (resolve) {
     if (!url || !url.trim()) {
       return res.jsonp("Thiếu url facebook");
     }
     if (!url.includes("facebook.com")) {
       return res.jsonp("Vui lòng nhập video facebook hợp lệ!");
  }
    axios.get(url, {
      headers: data
    }).then(function (rawResponse) {
      var data = rawResponse.data;
      var nodes = data.match(/"playable_url":"(.*?)"/);
      var match = data.match(/"playable_url_quality_hd":"(.*?)"/);
      var object = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
      if (nodes && nodes[1]) {
        var result = {
          url: url,
          sd: wrap(nodes[1]),
          hd: match && match[1] ? wrap(match[1]) : "",
          thumbnail: object && object[1] ? wrap(object[1]) : ""
        };
        res.jsonp(result);
      } else {
       res.jsonp("Cookie die nên không thể tải video trong group!");
      }
    });
  });
}
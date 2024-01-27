exports.name = '/taoanhdep/data2';
exports.index = async(req, res, next) => {
    let dirPath = __dirname + `/data/anime2.json`;
    return res.sendFile(dirPath)
}
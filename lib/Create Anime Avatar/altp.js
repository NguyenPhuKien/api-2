exports.name = '/altp_data';
exports.index = async(req, res, next) => {
    let dirPath = __dirname + `/data/altp.json`;
    return res.sendFile(dirPath)
}
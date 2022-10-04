//# 로그 관리 | morgan
const fs = require("fs");
const appRoot = require("app-root-path"); //루트 경로를 가져와주는 모듈

const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`,  // ${__dirname} : 루트경로 . app/log/access.log 파일에 로그 정보를 저장하도록(밑에서 app.use설정필요)
    { flags: 'a' }
);

module.exports = accessLogStream;
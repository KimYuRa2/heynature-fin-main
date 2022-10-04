// 모듈
const express = require('express');
var expressLayouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var cors = require('cors');
//# 환경변수 관리 ( "dotenv"사용 : 어떤 os에서 개발하더라도 , 동일하게 환경변수를 등록하고 가져올 수 있게됨.)
const dotenv = require("dotenv");

const fs = require('fs');
const mysql = require('mysql');
const path = require('path');
const crypto = require('crypto');
const FileStore = require('session-file-store')(session); // 세션을 파일에 저장


//express 설정1
const app = express();
// # 환경변수 관리
dotenv.config(); //config(현재디렉토리의 .env파일을 자동으로 인식하여 환경변수 세팅)라는 메서드를 실행하면, dotenv라는 모듈이 자동적으로 .env에 등록돼있는 변수들을 node.js에서 접근할 수 있도록  "process.env.환경변수"에 등록을 시켜줌!!



const routers = require('./routes/route.js');
const { builtinModules } = require('module');

//# 로그 관리 | morgan  => log.js에다 모듈로 분리
const accessLogStream = require("./log");

app.use(expressLayouts);//express-ejs-layout 사용
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser()); // 요청된 cookie를 쉽게 추출하기 위해 사용
app.use(bodyParser.urlencoded({extended:true})); // 데이터 정제(파일 가져올 때 깨지거나 이상한 문자들로 오는데 ,이를 정제해서 가져옴)

//# 로그 관리 | morgan
app.use(logger("dev")); // 개발환경용 로그출력
app.use(logger("common", {stream : accessLogStream }));  // npm - morgan 참고

app.use('/', routers);//use : 미들웨어 등록

//app.use(cors()) // test를 하기위해서 세팅 "실제 서버에 배포할 땐 아이피를 설정해야 함"
app.use( cors({
    origin : true, // 데이터 request시 , origin이라는 헤더를 포함하게 되는데 이 때 origin은 도메인의 형태를 띔 => 이것들을 모두 허용(true) .. 특정 url 작성 가능.
    credentials : true // https://developer.mozilla.org/ko/docs/Web/HTTP/CORS (Access-Control-Allow-Credentials을 true로 설정하기 위함)
}));


// 세션 (미들웨어) 
app.use( session ({
    key : "loginData", // session이 저장될 key 값 (env파일에 저장하기 추천..!)
    secret : 'testSecret', // 서명에 필요한 값 (env파일에 저장하기 추천..!) 
    resave : false, // 수정되지 않아도 다시 저장할건지? -  // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장하게 할건지? (false : 세션 아이디를 접속할때마다 발급하지 않음.)
    saveUninitialized : true, //true : 세션이 필요하면 세션을 실행시킨다.(서버에 부담을 줄이기 위해) //  false : 로그인 세션을 구현하거나 , 서버 스토리지 사용량을 줄이거나, 쿠키를 설정하기 전에 권한이 필요한 법률을 준수하는데 유용
    store : new FileStore(), // 세션이 파일을 저장하는 곳
}));


// html은 db정보를 가져올 수 없지만, ejs확장자를 사용하면 가능. => ejs 설정으로 db사용이 가능해짐!
app.set('views', __dirname + "/views"); //view(html파일들) 경로 설정
app.set('view engine', 'ejs'); //화면 엔진을 ejs로 설정한다.
//app.engine('html', require('ejs').renderFile); //html문서로 되어있는 ejs엔진

//express-ejs-layouts 설정
app.set('layout','layout'); //layout 이름으로 ejs파일 만듦.
app.set('layout extractScripts', true);

const mySub1=``

//css + img + js 경로(/public/css+img+js) 설정   (정적 파일 설정 - 미들웨어)
app.use(express.static(__dirname + '/public'));


module.exports = app;






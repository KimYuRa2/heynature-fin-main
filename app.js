 const express = require('express')
 const app = express()
// const port = process.env.PORT || 3000; 


var expressLayouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routers = require('./routes/route.js');
const { builtinModules } = require('module');



app.use(expressLayouts);//express-ejs-layout 사용
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(logger('dev'));
app.use('/', routers);//use : 미들웨어 등록

//app.use(cors()) // test를 하기위해서 세팅 "실제 서버에 배포할 땐 아이피를 설정해야 함"

//view(html파일들) 경로 설정
app.set('views', __dirname + "/views");

//화면 엔진을 ejs로 설정한다.
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile); //html문서로 되어있는 ejs엔진

//express-ejs-layouts 설정
app.set('layout','layout'); //layout 이름으로 ejs파일 만듦.
app.set('layout extractScripts', true);

const mySub1=``

//css + img + js 경로(/public/css+img+js) 설정 
app.use(express.static(__dirname + '/public'));


//css + img 경로 설정
//app.use(express.static(path.join(__dirname,'public')));


module.exports = app;






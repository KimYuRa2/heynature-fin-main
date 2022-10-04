const express=require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const router = express.Router(); 
const http = require("fs");
const session = require("express-session");

// 20220513 express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');
const {check, validationResult} = require('express-validator');

/* db.js 파일 연결 */
const db = require('../db');

/* user 비밀번호 보안 */
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.use(expressLayouts);



//route, routing 
router.get('/',(req, res) =>{
    console.log("메인페이지 작동");
    console.log(req.session);
    // if(req.session.is_logined == true){ //만약 세션에 로그인이 되었다면 세션 값들을 보내서 인식하게 처리함
    //     res.render('main'),{
    //         is_logined : req.session.is_logined,
    //         userName : req.session.userName
    //     }
    // }else{ // 그렇지 않으면(로그인되어있지 않으면)
    //     res.render('main'),{  //그냥 화면 출력
    //         is_logined : false
    //     };
    // }
    res.render('main');
});

/* notice */
router.get('/cscenter',(req, res,next) =>{
    db.getAllNotice((rows) => {
        res.render('cscenter',{ rows : rows });
    })
});

router.get('/newnotice', (req,res,next) => {
    res.render('newnotice');
})

router.post('/store',
 function(req,res,next){
        let param = JSON.parse(JSON.stringify(req.body));
        let content = param['content'];
        let title = param['title'];
        
        db.insertNotice(title,content, () => {
            console.log("submit");
            res.redirect('/cscenter');
        })
});

router.get('/updatenotice',(req,res)=>{
    let id = req.query.id;

    db.getNoticeById(id, (row)=>{
        if(typeof id === 'undefined' || row.length <= 0){
            res.status(404).json({error : 'undefined notice'});
        }else{
           res.render('updatenotice', {row: row[0]}); 
        }
    })
});

router.post('/updatenotice' , 
    [check('content').isLength({min:1, max:1000})],
    (req,res)=>{
        let errs = validationResult(req);
        let param = JSON.parse(JSON.stringify(req.body));
        let id = param['id'];
        let title = param['title'];
        let content = param['content'];

        if( errs['errors'].length > 0 ){ //에러가 있다면
            db.getNoticeById(id, (row)=>{
                res.render('updatenotice', {row: row[0], errs: errs['errors']} )
            });
        } else{ //에러가 없다면 notice 수정하기
            db.updateNoticeById(id, title, content, ()=> {
                res.redirect('/cscenter');
            });
        }
});

router.get('/deleteNotice',(req,res)=>{
    let id = req.query.id;
    db.deleteNoticeById(id, ()=>{
        res.redirect('/cscenter');
    });
});



/* review_write */
router.get('/detail',(req, res,next) =>{
    db.getAlldetail((rows) => {
        res.render('detail',{ rows : rows }); 
    })
});

// router.get('/detail', (req,res,next) => {
//     res.render('detail');
// })

router.get('/review_write', (req,res,next) => {
    res.render('review_write');
})

router.post('/store2',
 [check('content').isLength({min:1, max:3000})],
 function(req,res,next) {
        let param = JSON.parse(JSON.stringify(req.body));
        let content = param['content'];
        let username = param['username'];
        let starcount = param['starcount'];
        
        db.insertdetail(username,content, starcount, () => { //
            console.log("submit");
            res.redirect('/detail');
        })
    // }
});

router.get('/deletedetail',(req,res)=>{
    let id = req.query.id;
    db.deletedetailById(id, ()=>{
        res.redirect('/detail');
    });
});


/************** 회원가입 *************/
router.post('/join', (req,res,next)=> { //회원가입 form 에서 제출을 누르게 되면 ajax통신(post)을 하게 되는데,  이는 router.post()로받는다. 
    console.log('회원가입 페이지');
    const userId = req.body.userId;
    const userPassword = req.body.userPassword;
    const userName = req.body.userName;
    const userPhoneNum = req.body.userPhoneNum;

    db.connection.query('select * from users where userId=?',[userId],(err,data)=>{
        if( data.length == 0 ){ //만약 users라는 테이블에서 입력받은 name을 발견하면 response에 실패를 뜻하는 'fail'을 보내주고
            console.log("회원가입 성공");
            db.connection.query('insert into users(userId, userPassword, userName, userPhoneNum) values(?, ?, ?, ?)', [userId, userPassword, userName, userPhoneNum]);
            res.redirect('/login'); // 회원가입 성공 시 로그인 페이지로 이동.
        }else{ // 만약 아니라면 db에 데이터를 추가해주고 성공을 뜻하는 'ok'를 보내준다.
            console.log("회원가입 실패");
            res.redirect('/join'); // 회원가입 실패 시 회원가입 페이지로 다시 이동.
        }
    })
})


/************** 로그인 **************/
router.post('/login', (req, res, next) => {
    const userId = req.body.userId;
    const userPassword = req.body.userPassword;

    db.connection.query('select * from users where userId = ?', [userId], (err,data) => {
        // 로그인 확인
        console.log(data[0]); // 일치하는 userID로 찾은 DB에 저장된 user 정보
        console.log(userId); // 입력한 userId
        console.log(data[0].userId); // DB에 저장된 userID
        console.log(data[0].userPassword); // DB에 저장된 userPassword
        console.log(userId == data[0].userId); //userId 입력값 === db에 저장된 값
        console.log(userPassword == data[0].userPassword); //userPassword 입력값 === db에 저장된 값
        
        if( userId == data[0].userId && userPassword == data[0].userPassword ){
            console.log('로그인 성공');
            // 세션에 추가
            req.session.is_logined = true;
            req.session.userName = data.userName;
            req.session.userId = data.userId ;
            req.session.userPassword = data.userPassword;

            req.session.save(function(){ // 세션 스토어에 적용하는 작업
                res.render('index',{ // 로그인 성공 시 main페이지로 + 정보전달
                    userName : data[0].userName,
                    userId : data[0].userId ,
                    userPhoneNum : data[0].userPhoneNum,
                    is_logined : true
                });
            });
        }else{ // 로그인 실패 시 login페이지로 
            console.log('로그인 실패');
            res.render('login');
        }
    })
})

/************* 로그아웃 **************/
app.get('/logout',(req,res)=>{
    console.log('로그아웃 성공');
    req.session.destroy(function(err){
        // 세션 파괴후 할 것들
        res.redirect('/');
    });
});

/************** Auto Check ************/


router.get('/index',(req, res) =>{
    res.render('index')
});


router.get('/mypage',(req, res) =>{
    res.render('mypage')
});



router.get('/detail',(req, res) =>{
    res.render('detail')
});
router.get('/event',(req, res) =>{
    res.render('event')
});
router.get('/find',(req, res) =>{
    res.render('find')
});
router.get('/intro',(req, res) =>{
    res.render('intro')
});
router.get('/join',(req, res) =>{
    console.log("회원가입 페이지");
    res.render('join');
});
router.get('/login',(req, res) =>{
    console.log("로그인 페이지");
    res.render('login')
});
router.get('/product',(req, res) =>{
    res.render('product')
});

module.exports = router
//내보내기
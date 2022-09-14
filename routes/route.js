const express=require('express');
const router = express.Router(); 
// 20220513 express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');
const {check, validationResult} = require('express-validator');

/* db.js 파일 연결 */
const db = require('../db');


router.use(expressLayouts);



//route, routing 
router.get('/',(req, res) =>{
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
 //[check('content').isLength({min:1, max:3000})],
 function(req,res,next){
    //let errs = validationResult(req);
    
    // if(errs['errors'].length > 0){ //에러가 있다면, 화면에 에러 출력하기
    //     res.render('newNotice',{errs : errs['errors']});
    // }else{ //에러 없으면 실행
        let param = JSON.parse(JSON.stringify(req.body));
        let content = param['content'];
        let title = param['title'];
        
        db.insertNotice(title,content, () => { //
            console.log("submit");
            res.redirect('/cscenter');
        })
    // }
});

// router.get('/layout', (req,res,next) => {
//     db.getAllNotice((rows) => {
//         res.render('layout',{ rows : rows }); 
//     })
// })

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

router.get('/detail', (req,res,next) => {
    res.render('detail');
})

router.get('/review_write', (req,res,next) => {
    res.render('review_write');
})

router.post('/store2',
 [check('content').isLength({min:1, max:3000})],
 function(req,res,next){
    //let errs = validationResult(req);
    
    // if(errs['errors'].length > 0){ //에러가 있다면, 화면에 에러 출력하기
    //     res.render('newNotice',{errs : errs['errors']});
    // }else{ //에러 없으면 실행
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
    res.render('join')
});
router.get('/login',(req, res) =>{
    res.render('login')
});
router.get('/product',(req, res) =>{
    res.render('product')
});

module.exports = router
//내보내기
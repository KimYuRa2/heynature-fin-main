var app = require('../app');
const port = process.env.PORT || 3000; // .env에 환경변수 등록해뒀기때문에, process.env.PORT로 사용 가능! (환경변수가 없으면 (||3000) 으로 실행)

app.listen( port, () =>{
    console.log(`express 실행 http://localhost:${port}`); 
})



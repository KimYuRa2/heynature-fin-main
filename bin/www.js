var app = require('../app')
const port = process.env.PORT ||3000; 



app.listen( port, () =>{
    console.log(`express 실행 ${port}`)
})



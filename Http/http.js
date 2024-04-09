const http = require('http');
// console.log(http)
let server=http.createServer((req,res)=>{
    console.log('method',req.method)
    console.log('url',req.url)
    // console.log('headers',req.headers)
    console.log('query',req.query)
    console.log('params',req.params)
    console.log('body',req.body)
    res.end('done')
})
// console.log(server)
let port = 8080
server.listen(port,'127.0.0.1',()=>{
    console.log('server is started at port ',port)
})
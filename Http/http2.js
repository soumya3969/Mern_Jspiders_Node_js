const http = require('http');
let server =http.createServer((req,res)=>{
    if (req.url=='/'&& req.method=="GET") {
        res.writeHead(200,{"Content-Type": "text/html"})
        res.end('<h1>This is HOME PAge</h1>')
    }else if(req.url=='/about' && req.method=='GET'){
        res.writeHead(200,{"Content-Type": "text/html"})
        res.end('<h1>hello this is About Page</h1>')
    }else if(req.url=='/contact'){
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write('<h1>Hello Contact Page</h1> <p>This is A  Paragraph</p>')
        res.end()
    }else{
        res.writeHead(404,{"Content-Type": "text/html"})
        res.end('<h1>PAGE NOT FOUND</h1>')
    }
})
let PORT =8080
server.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`)
})
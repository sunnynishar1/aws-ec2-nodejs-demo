const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello from AWS EC2");
    res.end();
}).listen(3000);
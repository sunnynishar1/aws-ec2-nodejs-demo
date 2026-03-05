# AWS EC2 Node.js Deployment Demo

This project demonstrates how to deploy a simple Node.js application on an AWS EC2 instance.

## Tech Stack

- AWS EC2
- Ubuntu Linux
- Node.js
- Git & GitHub

## Application Code

```javascript
const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello from AWS EC2");
    res.end();
}).listen(3000);

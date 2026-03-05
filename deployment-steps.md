\# AWS EC2 Node.js Deployment Steps



\## 1. Launch EC2 Instance

\- Go to AWS EC2 console

\- Launch Ubuntu Server 22.04

\- Instance type: t3.micro (Free tier)



\## 2. Configure Security Group

Allow:



SSH - Port 22  

Custom TCP - Port 3000



\## 3. Connect to EC2



ssh -i nodejs-key.pem ubuntu@your-ip



\## 4. Install Node.js



sudo apt update

sudo apt install nodejs npm -y



\## 5. Create Application



nano app.js



Paste:



const http = require("http");



http.createServer((req,res)=>{

&nbsp;   res.write("Hello from AWS EC2");

&nbsp;   res.end();

}).listen(3000);



\## 6. Run App



node app.js



\## 7. Access in Browser



http://your-ip:3000


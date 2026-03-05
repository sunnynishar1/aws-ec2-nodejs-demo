# AWS EC2 Node.js Deployment Demo

This project demonstrates how to deploy a simple Node.js web application on an AWS EC2 instance running Ubuntu Linux.

The goal of this project is to practice core cloud concepts such as launching servers, configuring networking, accessing Linux machines via SSH, and running backend applications on cloud infrastructure.

---

## Architecture

User Browser
↓
AWS EC2 Instance (Ubuntu Linux)
↓
Node.js HTTP Server
↓
Response: "Hello from AWS EC2"

---

## Tech Stack

* AWS EC2 (Cloud server)
* Ubuntu Server 22.04
* Node.js
* Git
* GitHub
* Linux Terminal / SSH

---

## Application Code

```javascript
const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello from AWS EC2");
    res.end();
}).listen(3000);
```

This creates a simple HTTP server running on port **3000**.

---

## Deployment Steps

### 1. Launch EC2 Instance

Open the AWS console and navigate to EC2.

Create a new instance with the following configuration:

* Instance name: `nodejs-demo-server`
* AMI: Ubuntu Server 22.04 LTS
* Instance type: `t2.micro` (Free tier eligible)

---

### 2. Configure Security Group

Add the following inbound rules:

| Type       | Port | Purpose                 |
| ---------- | ---- | ----------------------- |
| SSH        | 22   | Remote server access    |
| Custom TCP | 3000 | Node.js web application |

---

### 3. Connect to the Server

Download the `.pem` key during instance creation.

Connect using SSH:

```bash
ssh -i nodejs-key.pem ubuntu@YOUR_PUBLIC_IP
```

---

### 4. Update the Server

```bash
sudo apt update
```

---

### 5. Install Node.js and npm

```bash
sudo apt install nodejs npm -y
```

Verify installation:

```bash
node -v
npm -v
```

---

### 6. Create the Application

Create the file:

```bash
nano app.js
```

Paste the Node.js server code and save the file.

---

### 7. Run the Application

```bash
node app.js
```

The application will start listening on port **3000**.

---

### 8. Access the Application

Open a browser and visit:

```
http://YOUR_PUBLIC_IP:3000
```

You should see:

```
Hello from AWS EC2
```

---

## What This Project Demonstrates

This project covers fundamental cloud engineering skills:

* Launching virtual machines using AWS EC2
* Connecting to Linux servers using SSH
* Installing software on cloud infrastructure
* Running backend applications on remote servers
* Configuring AWS security groups
* Deploying a Node.js application on AWS

---

## Future Improvements

Possible upgrades to make this project production-ready:

* Use Nginx as a reverse proxy
* Use PM2 to manage the Node.js process
* Add a domain name
* Enable HTTPS with SSL
* Deploy automatically from GitHub using CI/CD

---

## Author

Sunny Nishar

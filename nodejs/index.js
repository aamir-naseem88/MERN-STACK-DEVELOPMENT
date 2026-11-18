
// what is nodejs?
// a js run-time enviounment. it was developed by ryan dahl in 2009. it is built on chrome v8 engine. it is used to run js code outside the browser. it is used to build server-side applications. it is a cross-platform and open-source.

// ##### global object in nodejs #####
// it is the object which is only accessable in nodejs. it have several methods and properties. it is used to access the global scope of nodejs. it is used to access the global variables and functions. it is used to access the global objects. it is used to access the global methods. it is used to access the global properties. it is used to access the global constants. it is used to access the global events. it is used to access the global modules. it is used to access the global process. it is used to access the global console. it is used to access the global buffer. it is used to access the global setTimeout. it is used to access the global setInterval. it is used to access the global clearTimeout. it is used to access the global clearInterval. it is used to access the global require. it is used to access the global module. it is used to access the global exports.

// console.log(global);

// global.setTimeout(()=>{
//     console.log("this is setTimeout");
//     clearInterval(int);
// }, 2000);

// const int = global.setInterval(()=>{
//     console.log("this is setInterval");
// }, 1000);

// to access the folder and file
// console.log(__dirname); // it will give the path of the current directory
// console.log(__filename); // it will give the path of the current file


// ##### modules and require #####
// we distribute the code in different files each file is called a module in nodejs. so that code does not messy. we export that file and can use the code of this file in other files. this is called import and export.

// now we are importing two variables from other.js

// const {users, greet} = require('./other.js');
// now use these
// console.log(users);
// greet("Fatima");

// ##### built-in modules in nodejs #####

// 1. fs (file syste)
// read file
// async method

// const fs = require('fs');

// fs.readFile("text.txt", "utf8", (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// write/create file

// fs.writeFile("text2.txt", "this is text2 file", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file created");
// });

// fs.writeFile("text.txt", "Hi, Zainab!", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file updated");
// });

// directories

// fs.mkdir("myFolder", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("folder created");
// });

// fs.rmdir("myFolder", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("folder deleted");
// });

// deleting files
// fs.unlink("text2.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file deleted");
// });

// stream and buffer
// when a file is too large to read in one go, we can read it in chunks using streams. Streams are instances of EventEmitter class. Streams can be readable, writable, or both. Streams can be used to read and write data in chunks. Streams can be used to read and write data in a non-blocking way. Streams can be used to read and write data in a memory-efficient way. Streams can be used to read and write data in a time-efficient way. Streams can be used to read and write data in a network-efficient way. Streams can be used to read and write data in a file-efficient way. Streams can be used to read and write data in a database-efficient way. Streams can be used to read and write data in a process-efficient way. Streams can be used to read and write data in a thread-efficient way. Streams can be used to read and write data in a CPU-efficient way. Streams can be used to read and write data in a GPU-efficient way. Streams can be used to read and write data in a disk-efficient way. Streams can be used to read and write data in a memory-efficient way.

// const readStream = fs.createReadStream("text.txt", "utf8");
// readStream.on("data", (chunk)=>{
//     console.log("new chunk received");
//     console.log(chunk);
// });

// const writeStream = fs.createWriteStream("text3.txt");
// writeStream.write("Hello, this is a new file!");
// writeStream.end();

// creating server nodejs

// const http = require('http');

// const fs = require('fs');
// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.write("Hello, this is home page");
//         res.end();
//     }else if(req.url === "/about"){
//         res.write("Hello, this is about page");
//         res.end();
//     }else{
//         res.write("404 page not found");
//         res.end();
//     }
// });

// server.listen(3000, ()=>{
//     console.log("Server is running on port 3000");
// });

// request and response objects in nodejs

// const server = http.createServer((req, res) => {
// request object's some porperties
// console.log(req.url, res.method);
// response object's some methods
// console.log(res);
// set header content type
// res.setHeader("Content-Type", "text/html");
// res.write("<h1>Hello, this is home page</h1>");
// res.end();

// returning html page using response object
// firstly we have to import fs module on top
// after that we have to read the file first
// res.setHeader("Content-Type", "text/html");
//     fs.readFile("./html_page/index.html", (err, data) => {
//         if (err) {
//             console.log(err);
//             // res.write("<h1>404 page not found</h1>");
//             res.end();
//         } else {
//             // res.writeHead(200, { "Content-Type": "text/html" });
//             res.write(data);
//             res.end();
//         }   
// });
// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

/*
===============================================
CREATING SERVER IN NODE JS
===============================================
*/

// const http = require('http');

// const server = http.createServer((req, res) => {
    //    console.log('get received');
    // REQUES OBJECT
    // console.log(req);
    // console.log(req.url, req.method);
    // RESPONSE DATA
    // console.log(res);
    // SENDING RESPONSE TO BROWSER
    // first we have to make the header content type
    // res.setHeader("Content-Type","text/plain");
    // res.write("hello! plain text is being sent from server!");
    // res.end();

    // now sending html to browser
    // res.setHeader("Content-Type","text/html");
    // res.write("<h1>hello! plain text is being sent from server!</h1>");
    // res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log("Server is running on port 3000!");
// })

/*
===============================================
RETURNING HTML PAGES IN RESPONSE
===============================================
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type","text/html");
//    firstly read
    fs.readFile('./html_pages/index.html', (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            // if there is only single file then we can pass data to res.end() method
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log("Server is running on port 3000!");
})
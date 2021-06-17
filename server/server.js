
// const http = require('http');
// const hostname = 'localhost';
// const port = 3000;
// const server = http.createServer((req,res)=>{
//     // for texting server are run or not ....................

//     console.log("a request occure ")

// });


// server.listen(port,hostname,()=>{
//     console.log(`listening on port ${port}`)
// })



const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res)=>{
    // for texting server are run or not ....................

    //console.log("a request occure ")

  console.log(req)
  
  
  // use command nodemon server (" step 1- npm install -g nodemon")
//step 2:- Get-ExecutionPolicy,Set-ExecutionPolicy Unrestricted,Get-ExecutionPolicy follow that command in power shell addmi.. or run as addmi... 
//step 3:- nodemon server
//ping on browser localhost:3000
});


// server.listen(port,hostname,()=>{
//     console.log(`listening on port ${port}`)
// })
server.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
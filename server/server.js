const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res)=>{
   

  console.log('request url',req.url)
  console.log('request',req.method)

  
  

});

server.listen(port,()=>{
    console.log(`listening on port ${port}`)
})


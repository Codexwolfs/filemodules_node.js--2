/*const importedStuff = require('./users');
console.log(importedStuff);*/

//file system module..........................................

//part 5 to read data from text file using js .

const fs = require('fs')

//read file ................
/*fs.readFile('./abc/notes.txt',(err,data)=> {
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
    })*/


    //write the file ....................

// fs.writeFile('./abc/notes.txt','who are you',(err,data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('who are you')
//     }
//     })


//code for append file ................

// fs.appendFile('./abc/notes.txt','i am rajat payal',(err,data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('a message will updated ')
//     }
//     })


// create a new directory ...................


// fs.mkdir('def',(err,data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('a folder created   ')
//     }
//     })

//or create or The folder already exist.................
// if(!fs.existsSync('newfolder')){
//     fs.mkdir('newfolder',(err,data)=>{
//         if(err){
//             console.log(err)
//         }  else {
//             console.log( 'a new folder occure ')
//         }
        
//     })

// }else{
//     console.log('The folder already exist')
// }

// // delete file or remove file ........................


// if (fs.existsSync('./newfolder')) {
//     fs.rmdir('./newfolder', (err) => {
//     if (err) {
//     console.log(err)
//     }
//     console.log('folder deleted')
//     })
//     } else {
//     console.log('The folder already deleted')
//     }
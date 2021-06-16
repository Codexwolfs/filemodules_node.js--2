const fs =require('fs')
const readStream = fs.createReadStream('bigdata.txt',{encoding:'utf-8'});

readStream.on('data',chunk=>{
    console.log('#### new chunk ####');
    // // for all content ...
    console.log(chunk.toString())
    
})


// add data in some another file using this .........
// const writeStream=fs.createWriteStream('abc.txt');
//    readStream.on('data',chunk=>{
//    console.log('\n ### newdata #######\n');
//    console.log(chunk)   
//    console.log(chunk.toString())
//    writeStream.write('\n #kjahsdha\n');
//    writeStream.write(chunk);
//    })

//    //for pipelines 
//    const writeStream=fs.createWriteStream('abc.txt');
// readStream.pipe(writeStream)

const fs = require('fs');
const readableStream = fs.createReadStream('../book.txt',{encoding : 'utf-8'});
readableStream.on('data',(chunk)=>{
    console.log("Received chunk of length: ",chunk.length)
})
readableStream.on('end',()=>{
    console.log('Finished reading');
})
readableStream.on('error',(error)=>{
    console.log('Some error is coming',error);
})
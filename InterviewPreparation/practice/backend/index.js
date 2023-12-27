// stream and event emitter concept:

// readable
var fs=require('fs')
var readStream=fs.createReadStream('source.txt')
var data='';
readStream.setEncoding('utf8')
// event emitter
readStream.on('data',function(chunk){
    data+=chunk;
})
readStream.on('end',function(){
    console.log(data)
})

// readStream.on('start', () => {
//     console.log('started');
// });
//   readStream.emit('start');

// writeable
var writeData="Write the file"
var writeStream=fs.createWriteStream("des.txt")
writeStream.write(writeData,'utf8')
writeStream.end()
writeStream.on('finish',function(){
    console.log("Writing is Completed")
})

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>index</div>
    )
  }
}


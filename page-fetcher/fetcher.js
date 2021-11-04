const args = process.argv;
const gnort = (args.slice(2));
const url = gnort[0];
const file = gnort[1];
const fs = require('fs')
//const text = "./index.html"
const net = require('net');
const words = ""
const request = require('request');


request(url, (error, response, body) => {
  
  fs.writeFile(file, body, err => {
    if (err) {
      console.error(err)
      return
    }
    
    const bytes = body.length
    console.log(`Downloaded & saved ${bytes}bytes to ${file}`);//text 
  })
  
});

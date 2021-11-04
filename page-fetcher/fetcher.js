const args = process.argv;
const gnort = (args.slice(2));
const url = gnort[0];
const file = gnort[1];
const fs = require('fs')
//const text = "./index.html"
const net = require('net');
const bytes = 0
const words = ""
const request = require('request');


request(url, (error, response, body) => {
  
  fs.writeFile(file, body, err => {
    if (err) {
      console.error(err)
      return
    }
    
    console.log(`Downloaded & saved ${bytes} to ${file}`);//text 
  })
  
});

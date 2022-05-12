const request = require('request');
const fs = require('fs');

const linkInput = process.argv[2];
const pathInput = process.argv[3];

request(linkInput, function(error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  fs.writeFile(pathInput, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${pathInput}`);
  });
});







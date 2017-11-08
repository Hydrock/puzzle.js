'use strict';
const open    = require("open"),
      express = require('express'),
      app     = express();

function startWebserver() {

  app.use(express.static('app/client'));
  
  app.get('/', (req, res) => { 
    res.sendFile('index.html');
  });

  app.post('/', function (req, res) {
    res.send('POST request to the homepage');
  });
  
  app.listen(3000, () => { 
    console.log('PuzzleJS app listening on port 3000! - http://localhost:3000');
    open("localhost:3000/", "chrome");
  });

}

module.exports = startWebserver;



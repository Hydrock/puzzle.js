'use strict';
const open    = require("open"),
      express = require('express'),
      app     = express(),
      bodyParser = require('body-parser');

      const jsonfile = require('jsonfile');
      const directories = require('./directories.js');

function startWebserver() {

  app.use(express.static('app/client'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))
  
  app.get('/', (req, res) => { 
    res.sendFile('index.html');
  });

  app.get(/.*components*/, (req, res) => {
    console.log(req.url)
    res.sendFile(directories.projectFolder + req.url);
    //res.sendFile(directories.projectFolder + '/components/test/test/index.html');
  });

  app.post('/', function (req, res) {
    console.log(req.body.command);

    if (req.body.command === 'getComponents') {
      let components = jsonfile.readFileSync(directories.appRoot + '/app/tmp/tmp-components.json');
      res.send({
        components: components
      });
    } else if (req.body.command === 'loadComponentHtml') {
      //let htmlSrc = directories.projectFolder + '/componennts/' + req.body.path +  '/index.html';
      let htmlSrc = 'components/' + req.body.path +  '/index.html';
      res.send(htmlSrc);

    } else {
      res.send('nothing');
    }

  });
  
  app.listen(3000, () => { 
    console.log('PuzzleJS app listening on port 3000! - http://localhost:3000');
    open("localhost:3000/", "chrome");
  });

}

module.exports = startWebserver;



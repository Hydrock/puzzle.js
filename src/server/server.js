'use strict';
const open    = require("open");
const express = require('express');
const app     = express();

app.use(express.static('app/client'));

app.get('/', (req, res) => { 
  res.sendFile('index.html');
});

app.listen(3000, () => { 
  console.log('PuzzleJS app listening on port 3000! - http://localhost:3000');
  open("localhost:3000/", "chrome");
});

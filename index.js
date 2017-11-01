#!/usr/bin/env node
var chalk = require('chalk'); // color console
let co = require('co');
let prompt = require('prompt');
let commander = require('commander');
const path = require('path');
var fs   = require('fs');
var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
var dirToJson = require('dir-to-json');
var jsonFormat = require('json-format')

let pathStartProgramm = process.cwd();

let projectConfig;

try {
  projectConfig = require(pathStartProgramm + '/config1.json');
} catch (error) {
  console.log(chalk.red('Config do not finded!'));
  createConfig()
  //return;
}


let dir;
dirToJson( pathStartProgramm + '/components', function( err, dirTree ){
  if( err ) {
    throw err;
  } else {
    dir = dirTree;
  }
});

function createConfig () {
  let config = {x: 11};

  prompt.start();
  prompt.get(['name'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  Project Name: ' + result.name);

    config = { name: result.name, components: dir }
    config = jsonFormat(config);
    writeConfig(config)
  });
}

function writeConfig (dataObj) {
  var json = dataObj;

  fs.writeFile("./config.json", json, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(chalk.green("The config was saved!"));
  }); 
}


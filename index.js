#!/usr/bin/env node
var chalk = require('chalk'); // color console
let co = require('co');
let prompt = require('prompt');
let commander = require('commander');
const path = require('path');
var fs   = require('fs');
var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');

let pathStartProgramm = process.cwd();

let projectConfig;

try {
  projectConfig = require(pathStartProgramm + '/config1.json');
} catch (error) {
  console.log(chalk.red('Config do not finded!'));
  createConfig()
  //return;
}

function createConfig () {
  let config = {x: 11};

  prompt.start();
  prompt.get(['name'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  Project Name: ' + result.name);

    config = {name: result.name}
    config = JSON.stringify(config);
    writeConfig(config)
  });
}

function writeConfig (dataObj) {
  var json = JSON.stringify(dataObj);

  fs.writeFile("./config.json", json, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(chalk.green("The config was saved!"));
  }); 
}
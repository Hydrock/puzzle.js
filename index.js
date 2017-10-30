#!/usr/bin/env node
let co = require('co');
let prompt = require('co-prompt');
let commander = require('commander');
const path = require('path');
var fs   = require('fs');
var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');

let pathStartProgramm = process.cwd();

let pathProject = '/home/avechkanov/Documents/Web/puzzle test folder';

let projectConfig;

try {
  projectConfig = require(pathProject + '/config.json');
} catch (error) {
  console.log('Config do not finded!');
  return;
}

console.log(projectConfig)
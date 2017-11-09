
const directories = require('./directories.js');
const chalk = require('chalk');

const dirToJson = require('dir-to-json');

const componentsFolderName = '/components';
const pathToFolder = directories.projectFolder + componentsFolderName;

module.exports = () => dirToJson(pathToFolder);
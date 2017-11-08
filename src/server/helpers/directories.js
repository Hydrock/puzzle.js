const path = require('path');
//const appRoot = require('app-root-path');

const directories = {
  projectFolder: process.cwd(),
  appRoot: process.env.PWD
};

module.exports = directories;
